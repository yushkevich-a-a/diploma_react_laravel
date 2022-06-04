import React from 'react'
import PropTypes from 'prop-types'

function Hall(props) {
const { row, col, handleClick, data } = props;

  return (
    <div className="conf-step__hall">
      <div className="conf-step__hall-wrapper" style={{
        display: 'grid',
        gridTemplateRows: `repeat(${row || '1'}, 26px)`,
        gridTemplateColumns: `repeat(${col || '1'}, 26px)`,
        gap: '10px',
        justifyContent: 'center',
        }}>
        {
          data.map( item => <span key={item.id} onClick={() => handleClick(item.id)} className={`conf-step__chair conf-step__chair_${item.status}`}></span>)
        }
      </div>  
    </div>
  )
}

Hall.propTypes = {}

export default Hall
