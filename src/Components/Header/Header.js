//import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'

function Header(){


  // useEffect(()=>{
  //   if (){
  //     //pass the value back up to app
  //   }
  // }, [searchValue])

  // function handleSubmit(ev){
  //   ev.preventDefault()
  //   console.log("Form submitted")
  //   setSearchValue(ev.target[0].value)
  //   this.props.onSearch(ev.target[0].value)
  // }

  return(
    <header className="App-header">
        <h2 className="app-title">Weather App</h2>
        <NavBar/>
        
    </header>
  )
}

export default Header