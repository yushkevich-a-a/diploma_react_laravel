import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Popup from '../Popup'
import { postFormRequest } from '../../../../lib/api';
import { useDispatch } from 'react-redux';
import Button from '../../atoms/Button/Button';
import FormRow from '../../molecules/InputRow';
import TextareaRow from '../../molecules/TextareaRow';
import InputFileRow from '../../molecules/InputFileRow';
import { fetchFilmsSuccess } from '../../../../store/adminReducer/action';

const initData = {
  title: '',
  description: '',
  duration: 0, 
  country: '',
  poster: null
}

function CreateFilmPopup(props) {
  const { handleClosePopup } = props;
  const [ dataField, setDataField ] = useState({...initData});
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDataField( prevState => ({...prevState, [name]: value}));
  }

  const handleChangeFile = (name, file) => {
    setDataField( prevState => ({...prevState, [name]: file}));
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append('poster', dataField.poster);
      fd.append('title', dataField.title);
      fd.append('description', dataField.description);
      fd.append('duration', dataField.duration);
      fd.append('country', dataField.country);

      const data = await postFormRequest('/film', fd);
      dispatch(fetchFilmsSuccess(data.data));
      resetDataField();
    } catch (e) {
      console.log(e.message);
    }
  }

  const resetDataField = () => {
    setDataField({...initData});
    handleClosePopup();
  }

  return (
    <Popup title='Добавление фильма' handleClose={resetDataField}>
      <form>
        <FormRow title="Название фильма" handleChange={handleChange} value={dataField.title} placeholder='Например, "Гражданин Кейн"' nameField='title' />
        <TextareaRow title="Описание фильма" handleChange={handleChange} value={dataField.description} placeholder='описание' nameField='description'/>
        <FormRow title="Продолжительность фильма" handleChange={handleChange} value={dataField.duration} type='number' placeholder='120' nameField='duration' />
        <FormRow title="Страна" handleChange={handleChange} value={dataField.country} placeholder='Укажите страну' nameField='country' />
        <InputFileRow title="Обложка фильма" handleChange={handleChangeFile} nameField='poster' value={dataField.poster}/>
        <div className="conf-step__buttons text-center">
          <Button type="submit" handleClick={handleSubmit} title='Добавить фильм'/>
          <Button handleClick={resetDataField} title='Отменить' style='regular'/>
        </div>
      </form>
    </Popup>
  )
}

CreateFilmPopup.propTypes = {};

export default CreateFilmPopup;
