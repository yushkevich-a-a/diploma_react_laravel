import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function InputFileRow(props) {
  const { title, handleChange, nameField, value }  = props;
  const fileInput = useRef(null);

  useEffect(() => {
    if(value === null) {
      fileInput.current.files = null;
    }
  }, [value])

  const handleAddFile = (e) => {
    const name = e.target.name;
    handleChange(name, fileInput.current.files[0]);
  }

  return (
    <label className="conf-step__label conf-step__label-fullsize" htmlFor={nameField}>
      {title}
      <input ref={fileInput} className="conf-step__input" 
        onChange={handleAddFile} 
        type='file' 
        name={nameField}/>
    </label>
  )
}

InputFileRow.propTypes = {
  handleChange: PropTypes.func, 
  title: PropTypes.string.isRequired, 
  nameField: PropTypes.string.isRequired
}

export default InputFileRow
