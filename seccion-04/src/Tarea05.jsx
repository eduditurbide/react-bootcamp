import React from 'react'
import PropTypes from 'prop-types'

export const Tarea05 = ({ title, subtitle }) => {
  return (
    <>
      <h1>{ title }</h1>
      <h3>{ subtitle }</h3>
    </>
  )
}

Tarea05.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
}