import React from 'react';
import PropTypes from 'prop-types';

function HallClient(props) {
  const { rows, places, seats, selectedSeats, handleSelect }= props;

  const handleClick = (seat) => {
    if (seat.status === 'disable' || seat.status === 'taken') {
      return;
    }
    handleSelect(seat);
  }

  return (
    <div className="buying-scheme">
    <div className="buying-scheme-screen"></div>
    <div className="buying-scheme__wrapper" style={{
        display: 'grid',
        gridTemplateRows: `repeat(${rows || '1'}, 2rem)`,
        gridTemplateColumns: `repeat(${places || '1'}, 2rem)`,
        gap: '4px',
        justifyContent: 'center',
        }}>
          {
            seats.map( seat => <span key={seat.id} onClick={() => handleClick(seat)}
               className={`buying-scheme__chair buying-scheme__chair_${selectedSeats.find( item => item.id === seat.id) ? 'selected' : seat.status}`}></span>)
          }
    </div>
    <div className="buying-scheme__legend">
      <div className="col">
        <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_standart"></span> Свободно (<span className="buying-scheme__legend-value">250</span>руб)</p>
        <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_vip"></span> Свободно VIP (<span className="buying-scheme__legend-value">350</span>руб)</p>            
      </div>
      <div className="col">
        <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_taken"></span> Занято</p>
        <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_selected"></span> Выбрано</p>                    
      </div>
    </div>
  </div>
  )
}

HallClient.propTypes = {}

export default HallClient;
