import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ConfigSection from '../ConfigSection';
import { deleteRequest } from '../../../../lib/api';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { fetchData, fetchDataError, fetchDataSuccess } from '../../../../store/adminReducer/action';
import CreateHallPopup from '../Popups/CreateHallPopup';

function CreateHall(props) {
  const { data } = useSelector( store => store.adminReducer );
  const [ openPopup, setOpenPopup ] = useState(false);
  const dispatch = useDispatch()

  const handleClosePopup = () => {
    setOpenPopup(!openPopup);
  }

  const handleDelete = async (id) => {
    dispatch(fetchData());
    try {
      const data = await deleteRequest(`/hall/${id}`);
      if (data.status === 'error') {
        throw new Error(data.data);
      }
      dispatch(fetchDataSuccess(data.data));
    } catch(e) {
      dispatch(fetchDataError(e.message));
    }
  }

  return (
    <ConfigSection title='Управление залами'>
        <p className="conf-step__paragraph">Доступные залы:</p>
        <ul className="conf-step__list">
          {
            data.map( item => <li key={item.id}>{item.name}
              <button onClick={() => handleDelete(item.id)} className="conf-step__button conf-step__button-trash"></button>
            </li>)
          }
        </ul>
        <Button handleClick={handleClosePopup} title={'Создать зал'}/>
        { openPopup && <CreateHallPopup handleClosePopup={handleClosePopup}/> }
    </ConfigSection>
  )
}

CreateHall.propTypes = {}

export default CreateHall;
