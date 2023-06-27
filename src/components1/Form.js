import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';



function Form(props) {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');


    const emailChangeHandler = (event) => {
        setUserEmail(event.target.value);

    }

    const passChangeHandler = (event) => {
        setPassword(event.target.value);

    }

    const handleSubmit = e => {
        e.preventDefault();


    }

    return (
        <div className='form-group' >
            <form className='form-group-content' onSubmit={handleSubmit}>
                <div className='form-group-content1'>
                    <label htmlFor='mail'>Email Address</label>
                    <input type='email' id='mail' value={userEmail} onChange={emailChangeHandler}></input>
                </div>
                <div className='form-group-content1'>
                    <label htmlFor='pass'>Password</label>
                    <input type='password' id='pass' value={password} onChange={passChangeHandler}></input>
                </div>

                <div className='form-group-content1'>
                    <p><a href='#'>Forgot Password?</a></p>
                </div>
                <div className='form-group-content1'>
                    <Link to='/home'>
                        <button type='submit'>Sign In</button>
                    </Link>
                </div>
            </form>
        </div>


    )
}



export default Form
