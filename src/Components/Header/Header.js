import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'

function Header(location){

  const [searchValue, setSearchValue] = useState()

  useEffect(()=>{
    if (searchValue){
      //pass the value back up to app
    }
  }, [searchValue])

  function handleSubmit(ev){
    ev.preventDefault()
    console.log("Form submitted")
    setSearchValue(ev.target[0].value)
  }
  return(
    <header className="App-header">
        <h2 className="app-title">Weather App</h2>
        <NavBar/>
        <div className="search">
          <form className="inputForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="Location"></input>
            <button type="submit">Search</button>
          </form>
        </div>
    </header>
  )
}

export default Header