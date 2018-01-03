import React from 'react';
import SessionLinks from '../session/session_links';

const TopNav = () => {
  return(
    <div className='top-nav'>
      <img height='75' width='95' src={window.staticImages.logoMain} />  
      <h3>æterNote</h3>
      <SessionLinks/>
    </div>
  );
};

export default TopNav;
