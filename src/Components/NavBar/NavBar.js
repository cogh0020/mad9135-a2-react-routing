import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function NavBar(){

  return(
    <nav className="page-nav">
      <NavLink className="nav-link" to="/" style={({isActive})=> ({color: isActive ? "dodgerblue" : "white"})}>Home</NavLink>
      <NavLink className="nav-link" to="/hourly" style={({isActive})=> ({color: isActive ? "dodgerblue" : "white"})}>Hourly</NavLink>
      <NavLink className="nav-link" to="/daily" style={({isActive})=> ({color: isActive ? "dodgerblue" : "white"})}>Daily</NavLink>
    </nav>
  )
}

export default NavBar