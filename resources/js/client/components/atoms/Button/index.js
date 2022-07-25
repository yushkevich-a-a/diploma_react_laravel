import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Button(props) {
  const { handleClick, title, type } = props;

  return (
    <button type={type} onClick={handleClick} className={ type === 'submit' ? "acceptin-button" : "disabled-button" }>{title}</button>
  )
}

Button.propTypes = {}

Button.defaultProps = {
  type: 'button',
  handleClick: () => {}
}

export default Button;
