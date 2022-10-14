import {Route, Routes} from 'react-router'
import {useState, useEffect} from 'react'
import { getGeolocation } from './map.service'

import Home from './Pages/Home/Home'
import Hourly from './Pages/Hourly/Hourly'
import Daily from './Pages/Daily/Daily'

import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'

import './App.css';
import NotFound from './Pages/NotFound/NotFound'

function App() {

  const [coords, setCoords] = useState({})
  let options = { coords, units:"metric"}

  useEffect(()=>{
    callFetch()
    geoFunc()
  }, [])


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
    setCoords(coordObject)
  }

  async function callFetch(){
    const fetchData = await getGeolocation("Ottawa")
    .then(data => {
      setCoords(data)
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hourly" element={<Hourly coords={options} />}/>
        <Route path="/daily" element={<Daily coords={options}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
