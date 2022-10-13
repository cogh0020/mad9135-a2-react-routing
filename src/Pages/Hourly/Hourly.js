import React, { useEffect, useState } from 'react'
import { getForecast } from '../../weather.service'

function Hourly(){
  const [hourlyData, setHourlyData] = useState()

  useEffect(()=>{
    callFetch()
  }, [])

  async function callFetch (params){
    const fetchData = await getForecast(params)
    .then(data => {
      //console.log(data)
      //console.log(fetchData)
      let fixedArray = data.hourly.slice(0,6)
      setHourlyData(fixedArray)
      console.log(fixedArray)
    })
    .catch(err => console.log(err))
  }

  if (!hourlyData) {
    return<>
    <p>There is no hourly data</p>
    </>
  }
  else {
    console.log(hourlyData)
    return (
    <ul className="weather-card-list">
      {hourlyData.map((hour)=>(
        <li className="weather-card" key={hour.dt}>
          <img srs="" alt="IMG"></img>
          <p>Temperature: {hour.temp}</p>
          <p>Feels Like: {hour.feels_like}</p>
          <p>Humidity: {hour.humidity}</p>
          {/* <p>Humidity: {hour.weather.description}</p> */}
        </li>
      ))}
    </ul>
    )
  }
}

export default Hourly