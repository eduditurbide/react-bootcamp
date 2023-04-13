import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { Tarea01 } from './Tarea01'
import { Tarea02 } from './Tarea02'
import { Tarea03 } from './Tarea03'
import { Tarea04 } from './Tarea04'
import { Tarea05 } from './Tarea05'
import { Tarea06 } from './Tarea06'
import { CounterApp } from './CounterApp'

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <Tarea01 /> <hr/>
        <Tarea02 /> <hr/>
        <Tarea03 /> <hr/>
        <Tarea04 subtitle="Un subtitulo por props"/> <hr/>
        <Tarea05 title='Tarea 05' subtitle={1234}/> <hr/>
        <Tarea06 /> <hr/>
        <CounterApp value={34}/> <hr/>
    </React.StrictMode>
)