import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home(){
  const navigate = useNavigate()

  return (
  <>
    <h1>Home</h1>
    <p> App instructions go here!</p>

    <div className="current-weather">
      
    </div>

    <div className="home-card-list">
      <div className="home-card">
        <img src="" alt="Image For Hourly Weather"></img>
        <p>Hourly</p>
        <button onClick={()=>{navigate('/hourly')}}>View Hourly Weather </button>
      </div>

      <div className="home-card">
        <img src="" alt="Image For Daily Weather"></img>
        <p>Daily</p>
        <button onClick={()=>{navigate('/hourly')}}>View Daily Weather </button>
      </div>
    </div>
  </>
  )
}

export default Home