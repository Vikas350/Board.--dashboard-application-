import React from 'react';
import '../Styles/page2.css';

function Schedule() {
  return (
    <div className='schedule'>
      <div className='schead'>
        <p>Today's Schedule</p>
        <a href='#'>See all </a>
      </div>
      <div className='meetings'>
        <div className='meeting-type'>
          <div className='m1'></div>
          <div>
            <h3>Meeting with suppliers from Kuta Bali</h3>
            <h6>14:00 - 15:00</h6>
            <h6>at sunset road, Kuta bali</h6>
          </div>
        </div>
        <div className='meeting-type'>
          <div className='m2'></div>
          <div>
            <h3>Check operation at Giga factory 1</h3>
            <h6>18:00 - 20:00</h6>
            <h6>at central jakarta</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
