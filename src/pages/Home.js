import React from 'react'
import Sidebar from '../components2/Sidebar'
import Navbar from '../components2/Navbar'
import Datacards from '../components3/Datacards'
import Activities from '../components3/Activities'
import Products from '../components3/Products'
import Schedule from '../components3/Schedule'
import '../Styles/page2.css';

function Home() {
  return (
    <div className='fullhome'>
      <Sidebar />
      <div className='part2'>
        <Navbar />
        <Datacards />
        <Activities />
        <div className='part3'>
          <Products />
          <Schedule />
        </div>
      </div>
    </div>
  )
}

export default Home
