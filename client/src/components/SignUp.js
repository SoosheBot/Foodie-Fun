import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const SignUp = (props) => {
    const [credentials, setCredentials] = useState({
        username:'',
        password:'',
        email:'',
        location:''
    });

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        axiosWithAuth()
        .post()
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            props.history.push('/protected');
        })
        .catch(err => {
            console.log('login error', err);
        });
    };

    return (
        <div className='login-form'>
            <form onSubmit={submitForm}>
                <input type='text'
                className='username'
                placeholder='Enter username...'
                value={credentials.username}
                onChange={handleChange}
                />
                <input type='text'
                className='password'
                placeholder='Enter password...'
                value={credentials.password}
                onChange={handleChange} 
                />
                <input type='text'
                className='email'
                placeholder='Enter email...'
                value={credentials.email}
                onChange={handleChange} 
                />
                <input type='number'
                className='location'
                placeholder='Enter zip code...'
                value={credentials.location}
                onChange={handleChange} 
                /> 
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;