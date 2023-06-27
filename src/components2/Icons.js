import React from 'react';
import bell from '../Files/bell.png';
import profile from '../Files/profile.jpg';

function Icons() {
  return (
    <div className='icons'>
      <div className='icon-type'><img src={bell} alt=''></img></div>
      <div className='icon-type'><img src={profile} alt=''></img></div>
    </div>
  )
}

export default Icons
