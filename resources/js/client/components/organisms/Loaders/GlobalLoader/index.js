import React from 'react';
import Loader from '../Loader';
import './style.css';

function GlobalLoader(props) {
  return (
    <div className='wrapper-global-loader'>
      <Loader />
    </div>
  )
}

export default GlobalLoader;
