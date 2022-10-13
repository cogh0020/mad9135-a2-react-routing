import {Route, Routes, useRoutes, Navigate} from 'react-router'
import {useState, useEffect} from 'react'

import { getForecast, createWeatherIcon } from './weather.service'
import { getGeolocation } from './map.service'

import TestData from './testData.json'

import Home from './Pages/Home/Home'
import Hourly from './Pages/Hourly/Hourly'
import Daily from './Pages/Daily/Daily'

import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'

import './App.css';
import NotFound from './Pages/NotFound/NotFound'

function App() {


  const [respData, setRespData] = useState([])
  
  const fakeHourlyData = TestData

  async function getLocation(location){
    try {
      getGeolocation("Ottawa")
    } catch (err) {
      console.log('Error fetching:', err)
    }
  }

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home weatherData={fakeHourlyData} />}/>
        <Route path="/hourly" element={<Hourly weatherData={fakeHourlyData}/>}/>
        <Route path="/daily" element={<Daily weatherData={fakeHourlyData}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
