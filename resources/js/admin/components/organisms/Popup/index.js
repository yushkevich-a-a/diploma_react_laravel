import React from 'react';
import PropTypes from 'prop-types';
import close from '../../../assets/close.png';
import './style.css';

function Popup(props) {
  const { handleClose, title } = props;

  return (
    <div className="popup active">
      <div className="popup__container">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">
              { title }
              <a onClick={handleClose} className="popup__dismiss" href="#"><img src={close} alt="Закрыть"/></a>
            </h2>
          </div>
          <div className="popup__wrapper">
            {
              props.children
            }
          </div>
        </div>
      </div>
  </div>
  )
}

Popup.propTypes = {}

export default Popup;
