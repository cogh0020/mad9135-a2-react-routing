import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home(){
  const navigate = useNavigate()

  return (
  <>
    <h1>Home</h1>
    <button onClick={()=>{navigate('/hourly')}}>View Hourly Weather </button>
    <button onClick={()=>{navigate('/daily')}}>View Daily Weather </button>
  </>
  )
}

export default Home