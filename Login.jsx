import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaUser, FaLock } from 'react-icons/fa';
import SignUp from '../SignUp/Signup';
import './Login.scss'
const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const handleSignupClick = () => {
    setShowSignup(!showSignup); // Toggle the value of showSignup
  };
  const handleLoginSubmit = async (event)=>{
     event.preventDefault();
     const user = {
        username,
        password,
     }
     console.log('User Info', user);
     try{
        const response = await axios.post('/signup', user);
        console.log('Login Successful:', response.data);
     }
     catch(error){
        console.error('Error', error.message);
     }
  };
  return (
    <div>
      {showSignup ? (
        <SignUp onLoginClick={handleSignupClick}/>
      ) : (
        <motion.div className="login">
          <motion.div className="wrapper">
            <motion.form onSubmit={handleLoginSubmit}>
              <h1>Login</h1>
              <div className="inputbox">
                <input type="text" placeholder="Username" required onChange={(e)=> setUsername(e.target.value)} />
                <FaUser size={60} />
              </div>
              <div className="inputbox">
                <input type="password" placeholder="Password" required onChange={(e)=> setPassword(e.target.value)}/>
                <FaLock size={60} />
              </div>
              
              <div className="rem__for">
                <label>
                  <input type="checkbox" /> Remember Me{' '}
                </label>
                <br />
                <motion.a href="#" >Forgot Password?</motion.a>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                type="submit"
              >
                Login
              </motion.button>
              <div className="separator">
                <span></span>
                <p>or</p>
                <span></span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.94 }}
                type="button"
                className="signup-btn"
                onClick={handleSignupClick}
              >
                Sign Up
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Login;
