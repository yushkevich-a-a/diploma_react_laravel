import React from 'react';
import { useSelector } from 'react-redux';
import SeansHall from '../SeansHall';

function ListSeansHall(props) {
  const { data } = useSelector( store => store.admin );

  return (
    <div className="conf-step__seances">
      {
        data.map(item => <SeansHall key={item.id} item={item}/>)
      }
    </div>
  )
}

export default ListSeansHall;
