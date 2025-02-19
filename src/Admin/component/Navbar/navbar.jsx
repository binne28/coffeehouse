import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './navbar.scss'
function Navbar() {
    return (
        <div className='nav'>
            <div className='logo'>
                <img className='w-full h-full px-[20px] ' src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg" alt="" />
            </div>
            <div className='menu'>
                <Router>
                    <Routes>
                    
                    </Routes>
                </Router>
            </div>
        </div>
    )
}

export default Navbar;