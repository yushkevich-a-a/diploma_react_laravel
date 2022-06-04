import React from 'react'
import PropTypes from 'prop-types'
import baсkground from '../../../assets/background.jpg';
import './style.css';
import Header from '../../organisms/Header';

function ClientBackgroundWrapper(props) {

  document.body.style.backgroundImage = `url(${baсkground})`;
  document.body.style.backgroundPosition = 'right';

  return (
    <>
      <Header />
      {
        props.children
      }
    </>
  )
}

ClientBackgroundWrapper.propTypes = {}

export default ClientBackgroundWrapper
