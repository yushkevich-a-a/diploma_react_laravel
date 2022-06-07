import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClientBackgroundWrapper from '../../templates/ClientBackgroundWrapper';
import Header from '../../organisms/Header';
import Calendar from '../../organisms/Calendar';
import Main from '../../organisms/Main';
import { getRequest } from '../../../../lib/api';
import Film from '../../organisms/Film';
import { useDispatch } from 'react-redux';
import { fetchClientComplete, fetchDataClient, fetchErrorCLient } from '../../../../store/clientReducer/action';

function ClientPage(props) {
  const [ data, setData ] = useState(null);
  const dispatch = useDispatch();

  useEffect(async ()=> {
    localStorage.clear();
    dispatch(fetchDataClient());
    try {
      const data = await getRequest('/client');
      setData( data );
      dispatch(fetchClientComplete());
    } catch (e) {
      dispatch(fetchErrorCLient(e.message));
    }
  }, [])

  return (
    <ClientBackgroundWrapper>
      <Calendar />
      {
        data && <Main>
          {
            data.map( film => {
              if (film.halls.length === 0 ) {
                return;
              }
            return <Film key={film.id} item={film} />
          } )
          }
        </Main>
      }
      
    </ClientBackgroundWrapper>
  )
}

ClientPage.propTypes = {}

export default ClientPage;
