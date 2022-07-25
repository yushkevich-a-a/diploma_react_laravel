import React from 'react';
import CreateHall from '../CreateHall';
import EditHall from '../EditHall';
import EditPrice from '../EditPrice';
import EditSeanses from '../EditSeanses';
import OpenSaling from '../OpenSale';



function Main(props) {
  return (
    <main className="conf-steps">
      <CreateHall />
      <EditHall />
      <EditPrice />
      <EditSeanses />
      <OpenSaling />
    </main>
  )
}

export default Main;
