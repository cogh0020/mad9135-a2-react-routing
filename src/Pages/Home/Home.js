import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home(){
  const navigate = useNavigate()

  return (
  <>
    <h1>Home</h1>
    <p>Welcome!</p>
    <p>To view the weather, enable GeoLocation through your browser</p>
    <p>Alternatively, search the weather by location in the top right</p>

    <div className="current-weather">
      Current Weather Here
    </div>

    <div className="home-card-list">
      <div className="home-card">
        <img src="" alt="#"></img>
        <p>Hourly</p>
        <button onClick={()=>{navigate('/hourly')}}>View Hourly Weather </button>
      </div>

      <div className="home-card">
        <img src="" alt="#"></img>
        <p>Daily</p>
        <button onClick={()=>{navigate('/hourly')}}>View Daily Weather </button>
      </div>
    </div>
  </>
  )
}

export default Home