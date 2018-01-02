import React from 'react';
import { Link } from 'react-router-dom';


const SessionLinks = () => {
  return(
    <nav className='login-signup'>
      <Link to='/login'>Login</Link>
      &nbsp; or &nbsp;
      <Link to='/signup'>Sign Up</Link>
    </nav>
  );
};

export default SessionLinks;
