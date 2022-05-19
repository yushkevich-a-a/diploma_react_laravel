import React, { useState } from 'react'
import PropTypes from 'prop-types'

function ConfigSection(props) {
  const { title } = props;
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className="conf-step">
      <header className={`conf-step__header ${isOpen ? 'conf-step__header_opened' : 'conf-step__header_closed' }`} onClick={handleClick}>
        <h2 className="conf-step__title">{title}</h2>
      </header>
      <div className="conf-step__wrapper">
        {
          props.children
        }
      </div>
    </section>
  )
}

ConfigSection.propTypes = {}

export default ConfigSection
