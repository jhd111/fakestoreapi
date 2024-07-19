import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Appprovider } from './components/Usecontex.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Appprovider>
    <App />
  </Appprovider>,
)
