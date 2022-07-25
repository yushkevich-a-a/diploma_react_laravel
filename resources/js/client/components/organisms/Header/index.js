import React from 'react';
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

export default Header;
