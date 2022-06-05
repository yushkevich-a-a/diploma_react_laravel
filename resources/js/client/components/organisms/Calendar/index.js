import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { format, addDays, differenceInDays  } from 'date-fns';
import { ru } from 'date-fns/locale'
import { fetchSelectDate } from '../../../../store/clientReducer/action';

function Calendar(props) {
  const { dateSeans } = useSelector( store => store.clientReducer);
  const dispatch = useDispatch();
  const [ dateList, setDateList ] = useState([]);
  const [ startDay, setStartDay ] = useState(new Date());
  const today = format(new Date(), 'dd-MM-yyyy');

  useEffect(() => {
    if (dateSeans === null) {
      dispatch(fetchSelectDate(format(new Date(), 'dd-MM-yyyy')));
    }
    createDateList(startDay);
  }, [startDay]);

  const createDateList = ( firstDay ) => {
    const dateList = [];
    for( let i = 0; i < 6; i++ ) {
      const day = addDays(firstDay, i);
      dateList.push(day);
    }
    setDateList(dateList);
  }

  const handleClick = (date) => {
    dispatch(fetchSelectDate(format(date, 'dd-MM-yyyy')));
  }

  const handleAddToStartDay = () => {
    const newStartDay = addDays(startDay, 1)
    setStartDay(newStartDay);
    createDateList(newStartDay);
  }

  const handleRemovefromStartDay = () => {
    const newStartDay = addDays(startDay, -1)
    setStartDay(newStartDay);
    createDateList(newStartDay);
  }

  return (
    <nav className="page-nav">
      {(format(startDay, 'dd-MM-yyyy') !== today) && <a className="page-nav__day page-nav__day_prev" onClick={handleRemovefromStartDay}>
      </a>}
      {
        dateList.map( item => <a key={format(item, 'dd-MM-yyyy')} 
        onClick={() => handleClick(item)}
        className={`page-nav__day ${format(item, 'dd-MM-yyyy') === today ? 'page-nav__day_today' : ''} ${format(item, 'dd-MM-yyyy') === dateSeans ? 'page-nav__day_chosen' : ''}`} 
        href="#">
        <span className="page-nav__day-week">{
          format(item, 'EEEEEE', { locale: ru})
        }</span><span className="page-nav__day-number">{format(item, 'd', { locale: ru})}</span>
      </a> )
      }
      {
      differenceInDays(dateList[dateList.length - 1], new Date()) < 10 && <a className="page-nav__day page-nav__day_next" onClick={handleAddToStartDay}>
      </a>
    }
  </nav>
  )
}

Calendar.propTypes = {}

export default Calendar
