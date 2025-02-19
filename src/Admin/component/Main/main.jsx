import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.scss'
function Main() {
  return (
    <div className='main'>
      <div className='w-full h-[100px] bg-red-500'><h2>Heaad</h2>
      </div>
      <div className='body'>
        <Router>
        <Routes>

        </Routes>
      </Router>
      </div>
      
    </div>
  )
}

export default Main