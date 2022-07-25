import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Film from '../Film';
import DeleteFilmPopup from '../Popups/DeleteFilm';

function FilmsList(props) {
  const { films } = useSelector( store => store.admin );
  const [ filmOnDelete, setFilmOnDelete ] = useState(null);
  const [ openDelete, setDeleteIsOpen ] = useState(false);

  const openPopupDeleteSession = () => {
    setDeleteIsOpen(!openDelete);
  }

  const handleCLickOnFilm = (data) => {
    openPopupDeleteSession();
    setFilmOnDelete(data)
  }

  const handleClosePopup = () => {
    handleCLickOnFilm(null);
  }

  return (
    <div className="conf-step__movies">
      {
        films.map( item => <Film key={item.id} data={item} handleCLickOnFilm={handleCLickOnFilm}/>)
      }
      {
        openDelete && <DeleteFilmPopup handleClosePopup={handleClosePopup} filmTitle={filmOnDelete.title} filmId={filmOnDelete.id}/>
      }
    </div>
  )
}

export default FilmsList;
