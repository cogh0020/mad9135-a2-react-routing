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

  useEffect(()=>{
    callFetch()
  }, [])

  async function callFetch(location){
    const fetchData = await getGeolocation(location)
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
        <Route path="/hourly" element={<Hourly coords={coords} />}/>
        <Route path="/daily" element={<Daily coords={coords}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
