import React from 'react';
import '../Styles/page2.css';
import dashboard from '../Files/dashboard.png';
import transaction from '../Files/transaction.png';
import schedule from '../Files/schedule.png';
import users from '../Files/users.png';
import setting from '../Files/setting.png';

function Options() {
  return (
    <div className='options'>
      <div className='option-type'><img src={dashboard} alt=''></img><p>Dashboard</p></div>
      <div className='option-type'><img src={transaction} alt=''></img><p>Transaction</p></div>
      <div className='option-type'><img src={schedule} alt=''></img><p>Schedule</p></div>
      <div className='option-type'><img src={users} alt=''></img><p>Users</p></div>
      <div className='option-type'><img src={setting} alt=''></img><p>Settings</p></div>
    </div>
  )
}

export default Options
