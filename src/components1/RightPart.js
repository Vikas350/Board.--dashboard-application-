import React, { useState } from 'react'
import '../Styles/page1.css';
import UpperText from './UpperText';
import '../Styles/page1.css';
import LoginTypes from './LoginTypes';
import Form from './Form';
import BelowText from './BelowText';

function RightPart(props) {
  

  return (
    <div className='right'>
      <div className='loginPlace'>
        <UpperText />
        <LoginTypes/>
        <Form/>
        <BelowText/>
      </div>
    </div>
  )
}

export default RightPart
