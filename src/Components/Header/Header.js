//import logo from './logo.svg';
import logo from '../../logo.svg'
import React from 'react'

function Header(){

  return(
    <header className="App-header">
        React Routing - Weather App
        <img src={logo} className="App-logo" alt="logo" />
    </header>
  )
}

export default Header