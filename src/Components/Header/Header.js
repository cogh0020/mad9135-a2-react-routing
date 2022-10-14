import React from 'react'
import NavBar from '../NavBar/NavBar'

function Header(){

  return(
    <header className="App-header">
        <h2 className="app-title">Weather App</h2>
        <NavBar/>
        <div className="search">
          <input placeholder="Location"></input>
          <button>Search</button>
        </div>
    </header>
  )
}

export default Header