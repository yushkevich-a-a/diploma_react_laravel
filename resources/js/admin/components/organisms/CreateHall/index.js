import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ConfigSection from '../ConfigSection';
import { deleteRequest } from '../../../../lib/api';
import { useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { fetchDataSuccess } from '../../../../store/adminReducer/action';
import CreateHallPopup from '../CreateHallPopup';

function CreateHall(props) {
  const { data } = useSelector( store => store.adminReduser );
  const [ openPopup, setOpenPopup ] = useState(false);

  const handleClosePopup = () => {
    setOpenPopup(!openPopup);
  }

  const handleDelete = async (id) => {
    try {
      const data = await deleteRequest(`/hall/${id}`);
      dispatch(fetchDataSuccess(data.data));
    } catch(e) {
      console.log(e.message);
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
