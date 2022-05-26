import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function TextareaRow(props) {
  const { title, handleChange, type, placeholder, nameField, value }  = props;
  return (
    <label className="conf-step__label conf-step__label-fullsize" htmlFor={nameField}>
      {title}
      <textarea className="conf-step__input conf-step__textarea" onChange={handleChange} type={type} value={value} placeholder={placeholder} name={nameField}>
      </textarea>
    </label>
  )
}

TextareaRow.propTypes = {}

export default TextareaRow
