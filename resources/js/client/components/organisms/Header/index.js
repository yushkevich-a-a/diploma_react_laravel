import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import './style.css';

function Header(props) {
  const navigate = useNavigate();

  return (
    <header className="page-header" onClick={()=>{navigate('/')}}>
      <h1 className="page-header__title">Идём<span>в</span>кино</h1>
    </header>
  )
}

Header.propTypes = {}

export default Header
