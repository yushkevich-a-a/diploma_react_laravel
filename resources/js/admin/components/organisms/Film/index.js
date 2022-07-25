import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Film(props) {
  const { data, handleCLickOnFilm } = props;

  return (
    <div className="conf-step__movie" onClick={ () => handleCLickOnFilm(data)}>
          <img className="conf-step__movie-poster" alt="poster" src={data.url} />
          <h3 className="conf-step__movie-title">{data.title}</h3>
          <p className="conf-step__movie-duration">{data.duration} минут</p>
    </div>
  )
}

Film.propTypes = {
  data: PropTypes.object.isRequired,
  handleCLickOnFilm: PropTypes.func.isRequired,
}

export default Film
