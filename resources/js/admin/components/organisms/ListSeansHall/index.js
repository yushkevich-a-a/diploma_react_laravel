import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import SeansHall from '../SeansHall';

function ListSeansHall(props) {
  const { data } = useSelector( store => store.adminReducer );


  return (
    <div className="conf-step__seances">
      {
        data.map(item => <SeansHall key={item.id} item={item}/>)
      }
    </div>
  )
}

ListSeansHall.propTypes = {}

export default ListSeansHall
