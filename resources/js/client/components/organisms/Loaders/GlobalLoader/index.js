import React from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader';
import './style.css';

function GlobalLoader(props) {
  return (
    <div className='wrapper-global-loader'>
      <Loader />
    </div>
  )
}

GlobalLoader.propTypes = {}

export default GlobalLoader;
