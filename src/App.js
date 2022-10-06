import {Route, Routes, useRoutes, Navigate} from 'react-router'

import { getForecast, createWeatherIcon } from './weather.service'
import { getGeolocation } from './map.service'

import Home from './Pages/Home/Home'
import Hourly from './Pages/Hourly/Hourly'
import Daily from './Pages/Daily/Daily'

import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'

import './App.css';
import NotFound from './Pages/NotFound/NotFound'

function App() {

  async function doFetch(searchValue){
    try {
      //Make fetch call, store data in variable 
    } catch (err) {
      console.log('Error fetching:', err)
    }
  }

  


  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hourly" element={<Hourly/>}/>
        <Route path="/daily" element={<Daily/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
