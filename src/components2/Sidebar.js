import React from 'react';
import Title from './Title';
import Options from './Options';
import End from './End';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Title/>
      <Options/>
      <End/>
    </div>
  )
}

export default Sidebar;
