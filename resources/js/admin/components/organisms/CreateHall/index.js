import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ConfigSection from '../ConfigSection';
import { fetchToServer } from '../../../../lib/api';
import { useSelector } from 'react-redux';
import PopupCreateHall from '../PopupCreateHall';

function CreateHall(props) {
  const { data } = useSelector( store => store.adminReduser );
  return (
    <ConfigSection title='Управление залами'>
        <PopupCreateHall />
        <p className="conf-step__paragraph">Доступные залы:</p>
        <ul className="conf-step__list">
          {
            data.map( item => <li key={item.id}>{item.name}
              <button className="conf-step__button conf-step__button-trash"></button>
            </li>)
          }
        </ul>
        <button className="conf-step__button conf-step__button-accent">Создать зал</button>
    </ConfigSection>
  )
}

CreateHall.propTypes = {}

export default CreateHall
