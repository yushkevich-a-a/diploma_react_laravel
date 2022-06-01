import React from 'react'
import PropTypes from 'prop-types'
import { getHoursAndMinutes } from '../../../../lib/functions';
import { useNavigate } from 'react-router';

function MovieSeansHall(props) {
  const { item } = props;
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/client/hall/seans/${item.id}`, { replace: true});
  }

  return (
    <div className="movie-seances__hall">
      <h3 className="movie-seances__hall-title">{item.name}</h3>
      <ul className="movie-seances__list">
        {
          item.sessions.map( session => <li key={session.id} className="movie-seances__time-block">
              <a className="movie-seances__time" onClick={handleClick}>
                {getHoursAndMinutes(session.start_session)}
              </a>
            </li>)
        }
      </ul>
  </div>    
  )
}

MovieSeansHall.propTypes = {}

export default MovieSeansHall
