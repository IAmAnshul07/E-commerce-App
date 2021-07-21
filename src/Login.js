import React from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { auth } from './firebase';

function Login() {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const login = event => {
        event.preventDefault(); //This stops the refresh
        //Do the login logic...
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in, redirect to homepage
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };

    const register = event => {
        event.preventDefault(); //This stops the refresh
        //Do the register logic...
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // Created a user and logged in, redirect to the homepage
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };
    return (
        <div className='login'>

            <Link to='/'>
                <img className='login_logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG8.png'
                    alt='/'
                />
            </Link>

            <div className='login_container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        type='text'
                        onChange={event => setEmail(event.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        type='password'
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button
                        type='submit'
                        className='login_signInButton'
                        onClick={login}
                    >Sign In</button>
                </form>
                <p>By Sign In, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button
                    className='login_registerButton'
                    onClick={register}
                >Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
