import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

//root es el elemento de html donde se renderiza la aplicacion
const root = ReactDOM.createRoot(document.getElementById('root'))
//render espera un elemento como en js, por lo que para pasar varios deben ser envueltos en uno superior

root.render(
  <App />
)
