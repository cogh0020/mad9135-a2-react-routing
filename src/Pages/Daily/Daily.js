import React, {useEffect, useState} from 'react'
import { createWeatherIcon, getForecast } from '../../weather.service'

function Daily(coords){

const [dailyData, setDailyData] = useState()

  useEffect(()=>{
    callFetch()
  }, [])

  async function callFetch (){
    console.log(coords)
    const fetchData = await getForecast(coords)
    .then(data => {
      let fixedArray = data.daily.slice(0,6)
      setDailyData(fixedArray)
      console.log(fixedArray)
    })
    .catch(err => console.log(err))
  }

  if (!dailyData) {
    return<>
    <p>There is no daily data</p>
    </>
  }
  else {
    return (
    <ul className="weather-card-list">
      {dailyData.map((day)=>(
        <li className="weather-card" key={day.dt}>
          <p>Day</p>
          <img src={createWeatherIcon(day.weather[0].icon)} alt="IMG"></img>
          <p>{day.weather[0].main}</p>
          <p>High: {day.temp.max}</p>
          <p>Low: {day.temp.min}</p>
        </li>
      ))}
    </ul>
    )
  }
}

export default Daily