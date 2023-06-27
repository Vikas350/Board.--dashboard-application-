import React from 'react';
import Navtitle from './Navtitle';
import Search from './Search';
import Icons from './Icons';

function Navbar() {
  return (
    <div className='navbar'>
      <Navtitle/>
      <Search/>
      <Icons/>
    </div>
  );
}

export default Navbar;
