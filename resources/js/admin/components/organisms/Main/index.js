import React from 'react';
import PropTypes from 'prop-types';
import CreateHall from '../CreateHall';
import EditHall from '../EditHall';
import EditPrice from '../EditPrice';
import EditSeanses from '../EditSeanses';



function Main(props) {
  return (
    <main className="conf-steps">
      <CreateHall />
      <EditHall />
      <EditPrice />
      <EditSeanses />
    </main>
  )
}

Main.propTypes = {}

export default Main;
