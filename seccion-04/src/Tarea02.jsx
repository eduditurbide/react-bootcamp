import React from 'react'

const newMessage = {
    message: "Nuevo mensaje",
    title: "Nuevo título"
}

const getResult = (a, b) => {
  return a + b
}

export const Tarea02 = () => {

  return (
    <>
        <h1>Tarea 02</h1>
        <p>Soy un subtitulo</p>

        <code>{ JSON.stringify(newMessage) }</code>

        <p>Suma de 1 más 2 = { getResult(1,2) }</p>

    </>
  )
}
