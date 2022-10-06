import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function NavBar(){

  return(
    <>
    <NavLink to="/home" style={({isActive})=> ({color: isActive ? "red" : "black"})}>Home</NavLink>
    <NavLink to="/hourly" style={({isActive})=> ({color: isActive ? "red" : "black"})}>Hourly</NavLink>
    <NavLink to="/daily" style={({isActive})=> ({color: isActive ? "red" : "black"})}>Daily</NavLink>
    </>
  )
}

export default NavBar