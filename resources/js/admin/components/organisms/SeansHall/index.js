import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getRequest } from '../../../../lib/api';
import CreateSessionPopup from '../Popups/CreateSessionPopup';
import FilmOnTimeLine from '../FilmOnTimeLine';

function SeansHall(props) {
  const { item } = props;
  const [ seansData, setSeansData ] = useState([]);
  const [ openCreate, setOpenCreate ] = useState(false);

  useEffect(async () => {
    const data = await getRequest(`/session/${item.id}`);
    setSeansData([...data]);
  }, []);

  const openPopupCreateSession = () => {
    setOpenCreate(!openCreate);
  }

  const handleUpdateData = (data) => {
    setSeansData(data.slice());
  }

  return (
    <div className="conf-step__seances-hall">
      <h3 className="conf-step__seances-title">{item.name}</h3>
      <label className="conf-step__label">
        Для добавление сеанса кликните по веременной шкале, для удаления кликните по сеансу.
      </label>
      <div className="conf-step__seances-timeline" onClick={openPopupCreateSession}>
        {
          seansData.map( item => <FilmOnTimeLine key={item.id} item={item} handleUpdateData={handleUpdateData}/> )
        } 
      </div>
      {
        openCreate && <CreateSessionPopup item={item} handleUpdateData={handleUpdateData} handleClosePopup={openPopupCreateSession}/>
      }
    </div>
  )
}

SeansHall.propTypes = {
  item: PropTypes.object.isRequired,
}

export default SeansHall;
