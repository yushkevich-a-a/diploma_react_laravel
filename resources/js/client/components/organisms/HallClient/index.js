import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeSeat, selectSeat } from '../../../../store/clientReducer/clientSlice';

function HallClient(props) {
  const { data, selectSeats } = useSelector( store => store.client );
  const { rows, places, seats }= props;
  const dispatch = useDispatch()

  const handleClick = (seat) => {
    if (seat.status === 'disable' || seat.status === 'taken') {
      return;
    }
    if (selectSeats.find( item => item.number_seat === seat.number_seat)) {
      return dispatch(removeSeat(seat.number_seat));
    }
    dispatch(selectSeat(seat));
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
               className={`buying-scheme__chair buying-scheme__chair_${selectSeats.find( item => item.id === seat.id) ? 'selected' : seat.status}`}></span>)
          }
    </div>
    <div className="buying-scheme__legend">
      <div className="col">
        <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_standart"></span> Свободно (<span className="buying-scheme__legend-value">{data.hall.usual_price}</span>руб)</p>
        <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_vip"></span> Свободно VIP (<span className="buying-scheme__legend-value">{data.hall.VIP_price}</span>руб)</p>            
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
