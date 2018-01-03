import React from 'react';
import TopNav from './navbars/top_nav';
import SessionForm from './session/session_form_container';

const HomePage = () => {
  return (
    <main>
      <TopNav />
      <div className='description'>
        <h3>Never Forget A Million Dollar Idea Again</h3>
        <p>Record and organize all your thoughts,
          notes, and ideas in one easy to manage
          place with æterNote.</p>
        <SessionForm />
      </div>
    </main>
  );
};

export default HomePage;
