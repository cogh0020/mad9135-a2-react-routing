import {Route, Routes, useRoutes, Navigate} from 'react-router'

import Home from './Pages/Home/Home'
import Hourly from './Pages/Hourly/Hourly'
import Daily from './Pages/Daily/Daily'

import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'

import './App.css';
import NotFound from './Pages/NotFound/NotFound'

function App() {

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hourly" element={<Hourly/>}/>
        <Route path="/daily" element={<Daily/>}/>
      </Routes>
      <p>App Instructions Go Here!</p>
    </div>
  );
}

export default App;
