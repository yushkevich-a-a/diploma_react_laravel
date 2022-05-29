import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Popup from '../Popup';
import { useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { postRequest } from '../../../../lib/api';

const intData = {
  start_time: '00:00', 
  film: '',
}

function CreateSessionPopup(props) {
  const { films } = useSelector( store => store.adminReduser );
  const { handleUpdateData, handleClosePopup, item } = props;
  const [ dataField, setDataField ] = useState({...intData});

  useEffect(() => {
    if (films.length === 0) {
      return;
    }
    setDataField( prevState => ({...prevState, film: films[0].title}));
  }, [])

  const resetDataField = () => {
    setDataField({...intData});
    handleClosePopup();
  }

  const handleChange = (e) => {
    const name = e.target.name;
    setDataField( prevState => ({...prevState, [name]: e.target.value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const timeArr = dataField.start_time.split(':');
      const startTimeInMinutes = Number(timeArr[0]) * 60 + Number(timeArr[1])
      const data = await postRequest('/session', {
        start_session: startTimeInMinutes, 
        film_id: films.find(item => item.title === dataField.film).id,
        hall_id: item.id
      });
      resetDataField();
      handleUpdateData(data.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Popup title={'Добавление сессии ' + item.name} handleClose={resetDataField}>
      <form action="add_movie" method="post" acceptCharset="utf-8">
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="film">
            Выберите фильм
            <select className="conf-step__input" name="film" value={dataField.film} onChange={handleChange}>
              {
                films.map( item => <option key={item.id} value={item.title}>{item.title}</option>)
              }
            </select>
          </label>
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="start_time">
            Время начала
            <input className="conf-step__input" type="time" value={dataField.start_time} onChange={handleChange} name="start_time" />
          </label>
          <div className="conf-step__buttons text-center">
            <Button type="submit" handleClick={handleSubmit} title='Добавить'/>
            <Button handleClick={resetDataField} title='Отменить' style='regular'/>         
          </div>
        </form>
  </Popup>
  )
}

CreateSessionPopup.propTypes = {}

export default CreateSessionPopup;
