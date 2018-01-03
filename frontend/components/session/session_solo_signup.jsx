import React from 'react';
import SessionForm from '../session/session_form_container';
import { Link } from 'react-router-dom';



const SoloSignup = () => {

  return(
    <div className='solo-session'>
      <img  src={window.staticImages.logoMain} />
      <p className='greeting'>Welcome to æterNote</p>
      <div className='solo-session-template'>
        <SessionForm />

      </div>
      <p>Already have an account?</p>
      <Link to='/login'>Login</Link>
    </div>
  );
};




export default SoloSignup;
