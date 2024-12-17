import React, { useState } from 'react';
import './loginsignup.css';
import user_icon from './Assets/person.png';
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import Eachrecipe from '../fooditems/fdata';

const Loginsignup = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in

  const handleLogin = () => {
    if (password.length >= 10) {
      setIsLoggedIn(true); // Set the user as logged in
    } else {
      alert('Password must be at least 10 characters long.');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="welcome-message"><Eachrecipe/></div>
    );
  }

  return (
    <div className='containerss'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input 
              type="text" 
              placeholder='Name' 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="email icon" />
          <input type="email" placeholder='Email Id' />
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input 
            type="password" 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forgot-password">
          Lost Password?<span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div 
          className={action === "Login" ? "submit gray" : "submit"} 
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div 
          className={action === "Sign Up" ? "submit gray" : "submit"} 
          onClick={handleLogin}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
