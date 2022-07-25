import React from 'react'
import PropTypes from 'prop-types'
import baсkground from '../../../assets/background.jpg';
import './style.css';
import Header from '../../organisms/Header';
import { useSelector } from 'react-redux';
import Error from '../../organisms/Error';
import GlobalLoader from '../../organisms/Loaders/GlobalLoader';

function ClientBackgroundWrapper(props) {
  const { loading, error } = useSelector( store => store.client );
  document.body.style.backgroundImage = `url(${baсkground})`;
  document.body.style.backgroundPosition = 'right';

  return (
    <>
    {
      loading && <GlobalLoader />
    }
    {
      error && <Error error={error} />
    }
      <Header />
      {
        props.children
      }
    </>
  )
}

ClientBackgroundWrapper.propTypes = {}

export default ClientBackgroundWrapper
