import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getRequest } from '../../../../lib/api';
import CreateSessionPopup from '../CreateSessionPopup';
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

SeansHall.propTypes = {}

export default SeansHall;
