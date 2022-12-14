import React, { useEffect, useState } from 'react'
import LoadOverlay from '../../Components/LoadOverlay/LoadOverlay'
import { getForecast, createWeatherIcon } from '../../weather.service'

function Hourly({coords}){
  const [hourlyData, setHourlyData] = useState()

  useEffect(()=>{
    callFetch()
  }, [])

  async function callFetch (){
    console.log(coords)
    const fetchData = await getForecast(coords)
    .then(data => {
      let fixedArray = data.hourly.slice(0,6)
      setHourlyData(fixedArray)
      console.log(fixedArray)
    })
    .catch(err => console.log(err))
  }

  if (!hourlyData) {
    return<>
    <p>There is no hourly data</p>
    <LoadOverlay/>
    </>
  }
  else {
    return (
    <ul className="weather-card-list">
      {hourlyData.map((hour)=>(
        <li className="weather-card" key={hour.dt}>
          <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
          <img alt="Icon" src={createWeatherIcon(hour.weather[0].icon)}></img>
          <p>{hour.weather[0].main}</p>
          <p>Temperature: {hour.temp}</p>
          <p>Feels Like: {hour.feels_like}</p>
          <p>Humidity: {hour.humidity}</p>
        </li>
      ))}
    </ul>
    )
  }
}
//dt=new Date(1234567890 * 1000).toLocaleString();

export default Hourly