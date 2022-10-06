import React from 'react'

function Daily({weatherData}){

  const myDailyWeather = weatherData.list
  console.log(myDailyWeather)

  return (
    <ul className="weather-card-list">
      {myDailyWeather.map((day)=>(
        <li className=" weather-card" key={day.dt}>
          <p>Temperature: {day.main.temp}</p>
          <p>Feels Like: {day.main.feels_like}</p>
          <p>Humidity: {day.main.humidity}</p>
          <p>Humidity: {day.weather.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default Daily