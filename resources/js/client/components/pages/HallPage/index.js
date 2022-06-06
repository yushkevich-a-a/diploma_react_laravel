import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useParams } from 'react-router';
import ClientBackgroundWrapper from '../../templates/ClientBackgroundWrapper';
import Main from '../../organisms/Main';
import { getRequest } from '../../../../lib/api';
import { getHoursAndMinutes } from '../../../../lib/functions';
import HallClient from '../../organisms/HallClient';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataClient, fetchErrorCLient, fetchLoadingSuccess } from '../../../../store/clientReducer/action';

function HallPage(props) {
  const { seans_id } = useParams();
  const { data, dateSeans } = useSelector( store => store.clientReducer );
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
          <button className="acceptin-button" onClick={()=>{navigate('/payment')}} >Забронировать</button>
        </section>}     
      </Main>
    </ClientBackgroundWrapper>
  )
}

HallPage.propTypes = {};

export default HallPage;
