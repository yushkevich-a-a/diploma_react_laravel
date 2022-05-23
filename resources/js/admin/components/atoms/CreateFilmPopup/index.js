import React from 'react'
import PropTypes from 'prop-types'
import Popup from '../../organisms/Popup'

function CreateFilmPopup(props) {


  return (
    <Popup title='Добавление фильма'>
      <form action="add_movie" method="post" accept-charset="utf-8">
        <label className="conf-step__label conf-step__label-fullsize" for="name">
          Название фильма
          <input className="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="name"/>
        </label>
        <div className="conf-step__buttons text-center">
          <input type="submit" value="Добавить фильм" className="conf-step__button conf-step__button-accent"/>
          <button className="conf-step__button conf-step__button-regular">Отменить</button>            
        </div>
      </form>
    </Popup>
  )
}

CreateFilm.propTypes = {}

export default CreateFilm
