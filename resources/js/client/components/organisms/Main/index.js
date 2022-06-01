import React from 'react'
import PropTypes from 'prop-types'


function Main(props) {
  return (
    <main>
      {
        props.children
      }
    </main>
  )
}

Main.propTypes = {}

export default Main
