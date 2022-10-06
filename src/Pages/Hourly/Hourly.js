import React from 'react'

function Hourly({weatherData}){

  const myHourlyWeather = weatherData.list
  console.log(myHourlyWeather)

  return (
    <ul className="weather-card-list">
      {myHourlyWeather.map((hour)=>(
        <li className=" weather-card" key={hour.dt}>
          <p>Temperature: {hour.main.temp}</p>
          <p>Feels Like: {hour.main.feels_like}</p>
          <p>Humidity: {hour.main.humidity}</p>
          <p>Humidity: {hour.weather.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default Hourly