import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

function SeansHall(props) {
  const { item } = props;
  const [ seansData, setSeansData ] = useState([]);
  
  useEffect(() => {
    

    document.addEventListener('click', listnerFunc);
    return () => {
      document.removeEventListener('click', listnerFunc);
    }
  }, []);

  const listnerFunc = (e) => {
    const element = e.target;
    if (element.closest('.conf-step__seances-movie')) {
      console.log('событие на фильме');
      return;
    }
    if (element.closest('.conf-step__seances-timeline')) {
      console.log('событие на шкале времени');
      return;
    }
  }

  return (
    <div className="conf-step__seances-hall">
      <h3 className="conf-step__seances-title">{item.title}</h3>
      <div className="conf-step__seances-timeline">
        {/* {
          seansData.map( item => <div className="conf-step__seances-movie" style={{width: "60px", backgroundColor: "rgb(133, 255, 137)", left: "0"}}>
            <p className="conf-step__seances-movie-title">Миссия выполнима</p>
            <p className="conf-step__seances-movie-start">00:00</p>
          </div> )
        }       */}
      </div>
    </div>
  )
}

SeansHall.propTypes = {}

export default SeansHall;
