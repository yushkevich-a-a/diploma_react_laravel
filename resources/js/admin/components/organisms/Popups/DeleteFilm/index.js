import React from 'react'
import PropTypes from 'prop-types'
import { deleteRequest } from '../../../../../lib/api';
import Popup from '../Popup';
import Button from '../../../atoms/Button/Button';
import { useDispatch } from 'react-redux';
import { fetchData, fetchDataComplete, fetchDataError, fetchDataSuccess, updateAllData } from '../../../../../store/adminReducer/adminSlice';

function DeleteFilmPopup(props) {
  const { handleUpdateData, handleClosePopup, filmId, filmTitle } = props;
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchData());
    try {
      const { data } = await deleteRequest(`/film/${filmId}`);
      dispatch(fetchDataComplete());
      handleClosePopup();
      const films = data.films;
      const hallData = data.data;
      dispatch(updateAllData({films, hallData}));
      handleClosePopup();
    } catch (e) {
      dispatch(fetchDataError(e.message));
    }
  }

  return (
    <Popup title={'Удаление фильма'} handleClose={handleClosePopup}>
      <form action="delete_hall" method="post" acceptCharset="utf-8">
        <p className="conf-step__paragraph">Вы действительно хотите удалить фильм "<span>{filmTitle}</span>"?</p>
        <div className="conf-step__buttons text-center">
          <Button type="submit" handleClick={handleSubmit} title='удалить'/>
          <Button handleClick={handleClosePopup} title='Отменить' style='regular'/>   
        </div>
      </form>
    </Popup>
  )
}

DeleteFilmPopup.propTypes = {}

export default DeleteFilmPopup