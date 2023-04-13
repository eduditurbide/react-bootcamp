import React from 'react'
import PropTypes from 'prop-types'

export const Tarea05 = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      <h3>{ subtitle }</h3>

      <p>Un subtitulo por props</p>
    </>
  )
}

Tarea05.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}