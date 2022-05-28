import React from 'react'
import PropTypes from 'prop-types'
import { deleteRequest } from '../../../../lib/api';
import Popup from '../Popup';
import Button from '../../atoms/Button/Button';

function DeleteSessionPopup(props) {
  const { handleUpdateData, handleClosePopup, sessionId, filmTitle } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await deleteRequest(`/session/${sessionId}`);
      handleUpdateData(data.data);
      handleClosePopup();
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Popup title={'Снятие с сеанса'} handleClose={handleClosePopup}>
      <form action="вудуеу_hall" method="post" acceptCharset="utf-8">
        <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса фильм <span>{filmTitle}</span>?</p>
        <div className="conf-step__buttons text-center">
          <Button type="submit" handleClick={handleSubmit} title='удалить'/>
          <Button handleClick={handleClosePopup} title='Отменить' style='regular'/>   
        </div>
      </form>
    </Popup>
  )
}

DeleteSessionPopup.propTypes = {}

export default DeleteSessionPopup
