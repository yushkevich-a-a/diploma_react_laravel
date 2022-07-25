import React from 'react';
import PropTypes from 'prop-types';
import { deleteRequest } from '../../../../../lib/api';
import Popup from '../Popup';
import Button from '../../../atoms/Button/Button';
import { useDispatch } from 'react-redux';
import { fetchData, fetchDataComplete, fetchDataError } from '../../../../../store/adminReducer/adminSlice';

function DeleteSessionPopup(props) {
  const { handleUpdateData, handleClosePopup, sessionId, filmTitle } = props;
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchData());
    try {
      const data = await deleteRequest(`/session/${sessionId}`);
      dispatch(fetchDataComplete());
      handleUpdateData(data.data);
      handleClosePopup();
    } catch (e) {
      dispatch(fetchDataError(e.message));
    }
  }

  return (
    <Popup title={'Снятие с сеанса'} handleClose={handleClosePopup}>
      <form action="delete_hall" method="post" acceptCharset="utf-8">
        <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса фильм <span>{filmTitle}</span>?</p>
        <div className="conf-step__buttons text-center">
          <Button type="submit" handleClick={handleSubmit} title='удалить'/>
          <Button handleClick={handleClosePopup} title='Отменить' style='regular'/>   
        </div>
      </form>
    </Popup>
  )
}

DeleteSessionPopup.propTypes = {
  handleClosePopup: PropTypes.func.isRequired,
  handleUpdateData: PropTypes.func.isRequired,
  sessionId: PropTypes.number.isRequired,
  filmTitle: PropTypes.string.isRequired,
}

export default DeleteSessionPopup;
