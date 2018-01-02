import React from 'react';
import TopNav from './navbars/top_nav';
import SessionForm from './session/session_form_container';

const HomePage = () => {
  return (
    <main>
      <TopNav />
      <p>This is where all the ad text will go!</p>
      <SessionForm />  
    </main>
  );
};

export default HomePage;
