import React from 'react';
import revenue from '../Files/revenue.png';
import totalTran from '../Files/tran.png';
import likes from '../Files/like.png';
import users from '../Files/Vector.png';

function Datacards() {
    return (
        <div className='datacards'>
            <div className='card' id='c1'>
                <img src={revenue} alt=''></img>
                <div className='cardtxt'>
                    <p>Total Revenues</p>
                    <h2>$2,129,430</h2>
                </div>
            </div>
            <div className='card' id='c2'>
                <img src={totalTran} alt=''></img>
                <div  className='cardtxt'>
                    <p>Total Transactions</p>
                    <h2>1,520</h2>
                </div>

            </div>
            <div className='card' id='c3'>
                <img src={likes} alt=''></img>
                <div  className='cardtxt'>
                    <p>Total Likes</p>
                    <h2>9721</h2>
                </div>

            </div>
            <div className='card' id='c4'>
                <img src={users} alt=''></img>
                <div  className='cardtxt'>
                    <p>Total Users</p>
                    <h2>892</h2>
                </div>

            </div>
        </div>
    )
}

export default Datacards
