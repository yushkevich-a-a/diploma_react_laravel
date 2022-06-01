import React from 'react'
import PropTypes from 'prop-types'
import MovieSeansHall from '../MovieSeansHall';

function Film(props) {
  const { item } = props;
  return (
      <section className="movie">
        <div className="movie__info">
          <div className="movie__poster">
            <img className="movie__poster-image" alt={item.title} src={item.url}/>
          </div>
          <div className="movie__description">
            <h2 className="movie__title">{item.title}</h2>
            <p className="movie__synopsis">{item.description}</p>
            <p className="movie__data">
              <span className="movie__data-duration">{item.duration} минут </span>
              <span className="movie__data-origin">{item.country}</span>
            </p>
          </div>
        </div> 
        {
          item.halls.map( hall => <MovieSeansHall key={hall.id} item={hall} />)
        }
      </section>
  )
}

Film.propTypes = {}

export default Film
