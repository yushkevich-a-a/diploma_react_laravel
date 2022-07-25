import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Hall(props) {
const { row, col, handleClick, data } = props;

  const notEmptyHall = !!(row * col);

  return (
    <div className="conf-step__hall">
      {notEmptyHall && <div className="conf-step__hall-wrapper" style={{
        display: 'grid',
        gridTemplateRows: `repeat(${row || '1'}, 26px)`,
        gridTemplateColumns: `repeat(${col || '1'}, 26px)`,
        gap: '10px',
        justifyContent: 'center',
        }}>
        {
          data.map( item => <span key={item.id} onClick={() => handleClick(item.id)} className={`conf-step__chair conf-step__chair_${item.status}`}></span>)
        }
      </div>}
      {!notEmptyHall && <div className="conf-step__hall-warn">
        Настройте корректное колличество рядов и мест
      </div>} 
    </div>
  )
}

Hall.propTypes = {}

export default Hall
