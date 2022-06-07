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
    </ConfigSection>
  )
}

EditSeanses.propTypes = {}

export default EditSeanses
