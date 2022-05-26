import React from 'react';
import PropTypes from 'prop-types';
import ConfigSection from '../ConfigSection';
import CreateFilm from '../CreateFilm';
import FilmsList from '../FilmsList';
import ListSeansHall from '../ListSeansHall';

function EditSeanses(props) {
  return (
    <ConfigSection title='Сетка сеансов'>
      <CreateFilm />
      <FilmsList />
      <ListSeansHall />
      {/*      
      <div className="conf-step__seances">
        <div className="conf-step__seances-hall">
          <h3 className="conf-step__seances-title">Зал 1</h3>
          <div className="conf-step__seances-timeline">
            <div className="conf-step__seances-movie" style={{width: "60px", backgroundColor: "rgb(133, 255, 137)", left: "0"}}>
              <p className="conf-step__seances-movie-title">Миссия выполнима</p>
              <p className="conf-step__seances-movie-start">00:00</p>
            </div>
            <div className="conf-step__seances-movie" style={{width: "60px", backgroundColor: 'rgb(133, 255, 137)', left: "360px"}}>
              <p className="conf-step__seances-movie-title">Миссия выполнима</p>
              <p className="conf-step__seances-movie-start">12:00</p>
            </div>
            <div className="conf-step__seances-movie" style={{width: "65px", backgroundColor: "rgb(202, 255, 133)", left: "420px"}}>
              <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>
              <p className="conf-step__seances-movie-start">14:00</p>
            </div>              
          </div>
        </div>
        <div className="conf-step__seances-hall">
          <h3 className="conf-step__seances-title">Зал 2</h3>
          <div className="conf-step__seances-timeline">
            <div className="conf-step__seances-movie" style={{width: "65px", backgroundColor: "rgb(202, 255, 133)", left: "595px"}}>
              <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>
              <p className="conf-step__seances-movie-start">19:50</p>
            </div>
            <div className="conf-step__seances-movie" style={{width: "60px", backgroundColor: "rgb(133, 255, 137)", left: "660px"}}>
              <p className="conf-step__seances-movie-title">Миссия выполнима</p>
              <p className="conf-step__seances-movie-start">22:00</p>
            </div>              
          </div>
        </div>
      </div>
      
      <fieldset className="conf-step__buttons text-center">
        <button className="conf-step__button conf-step__button-regular">Отмена</button>
        <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent"/>
      </fieldset> */}
    </ConfigSection>
  )
}

EditSeanses.propTypes = {}

export default EditSeanses
