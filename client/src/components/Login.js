import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username:'',
        password:''
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
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;