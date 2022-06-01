import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ClientBackgroundWrapper from '../../templates/ClientBackgroundWrapper';
import Header from '../../organisms/Header';
import Calendar from '../../organisms/Calendar';
import Main from '../../organisms/Main';
import { getRequest } from '../../../../lib/api';
import Film from '../../organisms/Film';

function ClientPage(props) {
  const [ data, setData ] = useState(null)

  useEffect(async ()=> {
    try {
      const data = await getRequest('/client');
      console.log(data);
      setData( data );
    } catch (e) {

    }
  }, [])

  return (
    <ClientBackgroundWrapper>
      <Header />
      <Calendar />
      {
        data && <Main>
          {
            data.map( film => <Film key={film.id} item={film} /> )
          }
        </Main>
      }
      
    </ClientBackgroundWrapper>
  )
}

ClientPage.propTypes = {}

export default ClientPage;
