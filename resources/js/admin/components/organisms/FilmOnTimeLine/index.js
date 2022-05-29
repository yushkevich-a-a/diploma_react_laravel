import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import DeleteSessionPopup from '../Popups/DeleteSessionPopup';

const colorFilm = [ '#caff85', '#85ff89', '#85ffd3', '#85e2ff', '#8599ff', '#ba85ff', '#ff85fb', '#ff85b1', '#ffa285']

function FilmOnTimeLine(props) {
  const { films } = useSelector( store => store.adminReduser );
  const { item, handleUpdateData } = props;
  const [ openDelete, setDeleteCreate ] = useState(false);
  const filmIndex = films.findIndex( film => Number(film.id) === Number(item.film_id));
  const film = films[filmIndex]
  const timestartMinutes = item.start_session % 60;
  const timestartHours = (item.start_session - timestartMinutes) / 60;
  
  const openPopupDeleteSession = () => {
    setDeleteCreate(!openDelete);
  }

  const handleClick = (e) => {
    e.stopPropagation();
    openPopupDeleteSession();
  }

  return (
      <div className="conf-step__seances-movie" onClick={handleClick}
      style={{width: `${item.duraton_session * 0.5}px`, backgroundColor: colorFilm[filmIndex], left: `${item.start_session * 0.5}px`}}>
        <p className="conf-step__seances-movie-title">{film.title}</p>
        <p className="conf-step__seances-movie-start">{timestartHours}:{timestartMinutes}</p>
        {
          openDelete && <DeleteSessionPopup
            sessionId={item.id}
            filmTitle={film.title}
            handleUpdateData={handleUpdateData}
            handleClosePopup={openPopupDeleteSession}/>
        }
      </div>
  )
}

FilmOnTimeLine.propTypes = {};

export default FilmOnTimeLine;
