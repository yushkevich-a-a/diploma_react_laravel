import React from 'react';
import PropTypes from 'prop-types';
import baсkground from '../../../assets/background-admin.jpg';

function AdminBackgroundWrapper(props) {

  document.body.style.backgroundImage = `url(${baсkground})`;
  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  document.body.style.backgroundBlendMode = 'multiply';

  return (
    <>
    {
      props.children
    }
    </>
  )
}

AdminBackgroundWrapper.propTypes = {}

export default AdminBackgroundWrapper;
