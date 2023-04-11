import React from 'react'

export const Tarea04 = ({ title = "Tarea 04 por default", subtitle }) => {
  return (
    <>
      <h1>{ title }</h1>
      <h3>{ subtitle }</h3>
    </>
  )
}
