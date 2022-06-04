import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router';
import ClientBackgroundWrapper from '../../templates/ClientBackgroundWrapper';
import Header from '../../organisms/Header';
import Main from '../../organisms/Main';
import { getRequest } from '../../../../lib/api';
import { getHoursAndMinutes } from '../../../../lib/functions';
import HallClient from '../../organisms/HallClient';

function ClientHall(props) {
  const { seans_id } = useParams();
  const [ data, setData ] = useState(null);
  const [ selectSeat, setSelectSeat ] = useState([]);

  useEffect(async ()=> {
    try {
      const data = await getRequest(`/client/seans/${seans_id}/date/${'sklls'}`);
      setData( data );
    } catch (e) {

    }
  }, [])
  
  const handleSelectSeat = (seat) => {
    if (selectSeat.find( item => item.id === seat.id)) {
      return setSelectSeat([...selectSeat.filter( item => item.id !== seat.id)])
    }
    setSelectSeat([...selectSeat, seat]);

  }

  return (
    <ClientBackgroundWrapper>
      <Main>
        { data && <section className="buying">
          <div className="buying__info">
            <div className="buying__info-description">
              <h2 className="buying__info-title">{data.film.title}</h2>
              <p className="buying__info-start">Начало сеанса: {getHoursAndMinutes(data.start_session)}</p>
              <p className="buying__info-hall">{data.hall.name}</p>          
            </div>
          </div>
          <HallClient handleSelect={handleSelectSeat} rows={data.hall.rows} places={data.hall.places} seats={data.hall.seats} selectedSeats={selectSeat}/>
          <button className="acceptin-button" onClick={()=>console.log('Забронировать')} >Забронировать</button>
        </section>}     
      </Main>
    </ClientBackgroundWrapper>
  )
}

ClientHall.propTypes = {};

export default ClientHall;
