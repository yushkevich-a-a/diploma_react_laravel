import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  const { handleClick, title, type, style } = props;

  return (
    <button type={type} onClick={handleClick} className={`conf-step__button conf-step__button-${style}`}>{title}</button>
  )
}

Button.propTypes = {}

Button.defaultProps = {
  type: 'button',
  style: 'accent'
}

export default Button;
