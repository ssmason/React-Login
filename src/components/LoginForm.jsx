import './LoginForm.css';
import { useState } from 'react';
import React from 'react'
import { useRef } from 'react';

export const LoginForm = ( { credentials, setUser }) => {

    const [ username, setUsername ] = React.useState('');
    const [ password, setPassword ] = React.useState('');
    const [ failedLogin, setfailedLogin ] = React.useState(false);
 

    const handleChange = (event) => {
        if (event.target.name === "username") {
            setUsername(event.target.value);
        } else if (event.target.name === "password") {
            setPassword(event.target.value);
        }
    }

    const handleReset = () => { 
        setUsername("");
        setPassword("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("loging in with:" , username, password);
        const match = credentials.find(
            (user) => user.username === username && user.password === password
        );

        if (match) { 
            setfailedLogin(false);
            handleReset();
            setUser( username );  
        } else {
            setfailedLogin(true);
        }
       

    }
  return (
    <section >
        
        <div className="login-form"> 
            <p>Please enter your credentials to log in.</p> 
            <form onSubmit={handleSubmit}>
                <input   type="text" id="username" name="username"  onChange={(e) => setUsername(e.target.value)} placeholder="UserName" value={username}  autoComplete='false'/>
                <input   type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}placeholder="Password" value={password}  autoComplete='false'/>
                {failedLogin && <p className="error">Invalid username or password</p>}
                <button type="submit">Login</button>
                <span onClick={handleReset} className="reset">Reset</span>
            </form>
        </div>
    </section>
  )
}
