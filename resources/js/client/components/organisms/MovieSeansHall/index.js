import React from 'react'
import PropTypes from 'prop-types'
import { getHoursAndMinutes } from '../../../../lib/functions';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { parse, getMilliseconds  } from 'date-fns';

function MovieSeansHall(props) {
  const { dateSeans } = useSelector( store => store.client );
  const { item } = props;
  const navigate = useNavigate();
  const dateSeansMilliseconds = parse(dateSeans, 'dd-MM-yyyy', new Date()).getTime();

  const handleClick = (e, id) => {
    e.preventDefault();
    navigate(`/client/hall/seans/${id}`);
  }

  return (
    <div className="movie-seances__hall">
      <h3 className="movie-seances__hall-title">{item.name}</h3>
      <ul className="movie-seances__list">
        {
          item.sessions.map( session => {
            return <li key={session.id} className="movie-seances__time-block">
              <a className="movie-seances__time" onClick={(e) => handleClick(e, session.id)}>
                {getHoursAndMinutes(session.start_session)}
              </a>
            </li>
            })
        }
      </ul>
  </div>    
  )
}

MovieSeansHall.propTypes = {
  item: PropTypes.object.isRequired,
}

export default MovieSeansHall
