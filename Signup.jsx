import './Signup.scss'
import{motion} from "framer-motion"
import React, { useState } from 'react';
import axios from 'axios';
import {FaUser, FaLock ,FaAddressBook,FaEnvelope} from "react-icons/fa"

const SignUp = ({ onLoginClick }) => {
    const handleLoginClick = () => {
        onLoginClick();
    };
    
    const handleRoleChange = (event) => {
       setSelectedRole(event.target.value);
    };
    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        const user = {
          username,
          email,
          password,
          role: selectedRole,
        };
        console.log('Signup successful:', user);
        try {
          const response = await axios.post('/signup', user);
          console.log('Signup successful:', response.data);
          handleLoginClick();
        } catch (error) {
          console.error('Signup failed:', error.message);
        }
    };
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState(''); 
        
        
        
  return (
    <motion.div className="signup">
    <motion.div className="wrapper">
       <motion.form onSubmit={handleSignupSubmit}>
           <h1>Sign Up</h1>
           <div className="inputbox">
                <input type="text" placeholder="Full Name" required onChange={(e)=> setUsername(e.target.value)}/>
                <FaUser size={60}/>
           </div>
           <div className="inputbox">
                <input type = "text" placeholder="Enter Email-id" required onChange={(e) => setEmail(e.target.value)}/>
                <FaEnvelope size={60}/>
           </div>
           <div className="inputbox">
                <input type = "password" placeholder="Enter Password" required onChange={(e)=>setPassword(e.target.value)}/>
                <FaLock size={60}/>
           </div>
           <div className="inputbox">
            
              
              <select value={selectedRole} onChange={handleRoleChange} required>
                <option value="">Select Role</option>
                <option value="recruiter">Recruiter</option>
                <option value="seeker">Seeker</option>
              </select>
              <FaAddressBook size={60}/>
          </div>
           
            <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.94}}type="submit">Sign Up</motion.button>
            <div className="separator">
                    <span></span>
                    <p>or</p>
                    <span></span>
             </div>
             <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.94}}type="button" className="signup-btn" onClick={handleLoginClick}>
                Login
            </motion.button>
        </motion.form>
    </motion.div>
    </motion.div>
  )
}

export default SignUp

