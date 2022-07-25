import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { handleClick, title, type, style } = props;

  return (
    <button type={type} onClick={handleClick} className={`conf-step__button conf-step__button-${style}`}>{title}</button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func, 
  title: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired, 
  style: PropTypes.string.isRequired,
}

Button.defaultProps = {
  type: 'button',
  style: 'accent'
}

export default Button;
