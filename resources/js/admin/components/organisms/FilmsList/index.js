import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function FilmsList(props) {
  const { films } = useSelector( store => store.admin );

  return (
    <div className="conf-step__movies">
      {
        films.map( item => <div className="conf-step__movie" key={item.id}>
          <img className="conf-step__movie-poster" alt="poster" src={item.url} />
          <h3 className="conf-step__movie-title">{item.title}</h3>
          <p className="conf-step__movie-duration">{item.duration} минут</p>
        </div> )
      }        
    </div>
  )
}

FilmsList.propTypes = {}

export default FilmsList;
