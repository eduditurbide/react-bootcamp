import React from 'react'
import PropTypes from 'prop-types'

export const Tarea06 = ({ title, subtitle }) => {
  return (
    <>
      <h1>{ title }</h1>
      <h3>{ subtitle }</h3>
    </>
  )
}

Tarea06.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
}

Tarea06.defaultProps = {
  title: "Tarea 06, no hay título",
  subtitle: "No hay subtítulo",
}