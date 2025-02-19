import React from 'react'
import './admin.scss';
import Navbar from './component/Navbar/navbar';
import Main from './component/Main/main';
function Admin() {
  return (
    <div className='boDy'>
      <Navbar />
      <Main />
    </div>
  )
}

export default Admin;