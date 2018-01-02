import React from 'react';
import SessionLinks from '../session/session_links';

const TopNav = () => {
  return(
    <div className='top-nav'>
      <h3>æterNote</h3>
      <SessionLinks/>
    </div>
  );
};

//<img src='/assets/images/logo1.0.png'/>  <--Use Window routes!!!!!ß
export default TopNav;
