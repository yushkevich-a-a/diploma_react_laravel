import React from 'react'
import PropTypes from 'prop-types'
import baсkground from '../../../assets/background.jpg';
import './style.css';

function ClientBackgroundWrapper(props) {

  document.body.style.backgroundImage = `url(${baсkground})`;
  document.body.style.backgroundPosition = 'right';

  return (
    <>
    {
      props.children
    }
    </>
  )
}

ClientBackgroundWrapper.propTypes = {}

export default ClientBackgroundWrapper
