import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header className="page-header">
      <h1 className="page-header__title">
        Идём<span>в</span>кино</h1>
      <span className="page-header__subtitle">Администраторррская</span>
    </header>
  )
}

Header.propTypes = {}

export default Header;
