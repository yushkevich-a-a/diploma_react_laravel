import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import CreateFilmPopup from '../CreateFilmPopup';

function CreateFilm(props) {
  const { data } = useSelector( store => store.adminReduser );
  const [ openPopup, setOpenPopup ] = useState(false);

  const handleClosePopup = () => {
    setOpenPopup(!openPopup);
  }

  return (
    <>
    <p className="conf-step__paragraph">
      <Button handleClick={handleClosePopup} title={'Добавить фильм'}/>
    </p>
    {
      openPopup && <CreateFilmPopup handleClosePopup={handleClosePopup}/>
    }
    </>
  )
}

CreateFilm.propTypes = {}

export default CreateFilm
