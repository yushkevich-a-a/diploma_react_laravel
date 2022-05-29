import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Popup from '../Popup'
import { postRequest } from '../../../../../lib/api';
import Button from '../../../atoms/Button/Button';
import { fetchData, fetchDataError, fetchDataSuccess } from '../../../../../store/adminReducer/action';

function CreateHallPopup(props) {
  const { handleClosePopup } = props;
  const [ dataField, setDataField ] = useState('');
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setDataField(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchData());
    try {
      const data = await postRequest('/hall', { name: dataField.toLocaleLowerCase() });
      dispatch(fetchDataSuccess(data.data));
      handleClosePopup();
    } catch (e) {
      dispatch(fetchDataError(e.message));
    }
  }

  const resetDataField = () => {
    setDataField('');
    handleClosePopup();
  }

  return (
      <Popup title={'добавление зала'} handleClose={resetDataField}>
        <form action="add_hall" acceptCharset="utf-8">
          <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
            Название зала
            <input onChange={handleChange} value={dataField} className="conf-step__inputв" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name"/>
          </label>
          <div className="conf-step__buttons text-center">
            <Button type="submit" handleClick={handleSubmit} title='Добавить зал'/>
            <Button handleClick={resetDataField} title='Отменить' style='regular'/>
          </div>
        </form>
      </Popup>
  )
}

CreateHallPopup.propTypes = {}

export default CreateHallPopup
