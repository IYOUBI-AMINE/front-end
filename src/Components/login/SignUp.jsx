import React, { useState } from 'react';
import '../login/SignUp.css';

import { Link } from 'react-router-dom';

const SignUp = () => {
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = () => {
    const user = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      
    };

   
    const existingUsersString = localStorage.getItem('users');
    const existingUsers = existingUsersString ? JSON.parse(existingUsersString) : [];

    
    existingUsers.push(user);

    
    localStorage.setItem('users', JSON.stringify(existingUsers));
  };

  return (
    <div className='body'>
      <form className='sform'>
        
        <input
          placeholder=' First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        /><br/>
        <input
          placeholder=' Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        /><br/>
        <input
          placeholder=' Phone Number'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        /><br/>
        <input
          placeholder=' Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br/>
        <input
          type='password'
          placeholder=' Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br/><br />
       
        <label>Already have an account? <Link to='/Signin' className='vlink'> Sign In</Link></label>
        <br/><br/>
        <button className='sub-btn' onClick={handleSubmit}>Submit</button>
      </form><br/>
    </div>
  );
};

export default SignUp;
