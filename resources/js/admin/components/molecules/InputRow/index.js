import React from 'react'
import PropTypes from 'prop-types'

function InputRow(props) {
  const { title, handleChange, type, placeholder, nameField, value }  = props;

  return (
    <label className="conf-step__label conf-step__label-fullsize" htmlFor={nameField}>
      {title}
    <input className="conf-step__input" 
      onChange={handleChange} 
      type={type} 
      value={value}
      placeholder={placeholder} 
      name={nameField}/>
  </label>
  )
}

InputRow.defaultProps = {
  type: 'text',
}

InputRow.propTypes = {}

export default InputRow;
