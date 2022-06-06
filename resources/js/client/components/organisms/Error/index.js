import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './style.css';
import { fetchErrorCLientComplete } from '../../../../store/clientReducer/action';

function Error(props) {
  const { error } = props;
  const dispatch = useDispatch();
  const element = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      element.current.classList.add('hide_error');
      setTimeout(() => {
        dispatch(fetchErrorCLientComplete())
      }, 2000);
    }, 2000);
  }, [])

  return (
    <div className="error-wrapper" ref={element}>
      <div className="error-message">
        {
          error
        }
      </div>
    </div>
  )
}

Error.propTypes = {}

export default Error;
