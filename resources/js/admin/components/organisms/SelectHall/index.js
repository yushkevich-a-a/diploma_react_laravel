import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

function SelectHall(props) {
  const { handleRequestData, resetData, name } = props;
  const { data } = useSelector( store => store.admin );
  const [ selectedHall, setSelectedHall ] = useState(0);

  useEffect(() => {
    if (data.length === 0) {
      resetData(null);
      return;
    }
    handleChecked(data[0].id);
  }, [data]);

  const handleChecked = (id) => {
    handleRequestData(id);
    setSelectedHall(id);
  }

  return (
    <>
      <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
      <ul className="conf-step__selectors-box">
        {
          data.map( item => <li key={item.id}>
              <input type="radio" 
              className="conf-step__radio" 
              name={name} 
              value={item.name} 
              onChange={() => handleChecked(item.id)} 
              checked={selectedHall === item.id}/>
              <span className="conf-step__selector">{item.name}</span>
            </li>)
        }
      </ul>
    </>
  )
}

SelectHall.propTypes = {}

export default SelectHall
