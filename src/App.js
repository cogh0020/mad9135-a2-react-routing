import {Route, Routes} from 'react-router'
import {useState, useEffect} from 'react'
import { getGeolocation } from './map.service'

import Home from './Pages/Home/Home'
import Hourly from './Pages/Hourly/Hourly'
import Daily from './Pages/Daily/Daily'
import Header from './Components/Header/Header'

import './App.css';
import NotFound from './Pages/NotFound/NotFound'

function App() {

  const [coord, setCoord] = useState({})
  const [searchValue, setSearchValue] = useState()

  let options = { coord, units:"metric"}

  useEffect(()=>{
    if (searchValue){
      callFetch(searchValue)
    }
    geoFunc()
  }, [searchValue])


  function geoFunc(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(outputLocation)
    } else {
      console.log("Could not find location")
    }
  }

  function outputLocation(position) {
    let coordObject = 
    {
      lon:position.coords.longitude,
      lat: position.coords.latitude
    }
    console.log(position)
    setCoord(coordObject)
  }

  function handleSubmit(ev){
    ev.preventDefault()
    console.log("Form submitted")
    setSearchValue(ev.target[0].value)
  }

  async function callFetch(location){
    const fetchData = await getGeolocation(location)
    .then(data => {
      setCoord(data)
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Header/>
      <div className="search">
          <form className="inputForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="Location"></input>
            <button type="submit">Search</button>
          </form>
        </div>
      <Routes>
        <Route path="/" element={<Home location={searchValue}/>}/>
        <Route path="/hourly" element={<Hourly coords={options} />}/>
        <Route path="/daily" element={<Daily coords={options}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <div className="previous-searches">
      </div>
    </div>
  );
}

export default App;
