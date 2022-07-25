import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import ClientBackgroundWrapper from '../../templates/ClientBackgroundWrapper';
import Main from '../../organisms/Main';
import { getRequest } from '../../../../lib/api';
import { getHoursAndMinutes } from '../../../../lib/functions';
import HallClient from '../../organisms/HallClient';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataClient, fetchErrorCLient, fetchLoadingSuccess } from '../../../../store/clientReducer/clientSlice';
import Button from '../../atoms/Button';

function HallPage(props) {
  const { seans_id } = useParams();
  const { data, dateSeans, selectSeats } = useSelector( store => store.client );
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(async ()=> {
    dispatch(fetchDataClient());
    try {
      const data = await getRequest(`/client/seans/${seans_id}/date/${dateSeans}`);
      dispatch(fetchLoadingSuccess(data));
    } catch (e) {
      dispatch(fetchErrorCLient(e.message));
    }
  }, [])

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
          <HallClient rows={data.hall.rows} places={data.hall.places} seats={data.hall.seats} />
          {
            !!selectSeats.length && <Button handleClick={()=>{navigate('/payment', {replace: true})}} title='Забронировать' type='submit' />
          }
          {
            !selectSeats.length && <Button title='Выберите место'/>
          }
        </section>}     
      </Main>
    </ClientBackgroundWrapper>
  )
}

export default HallPage;
