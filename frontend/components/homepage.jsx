import React from 'react';
import TopNav from './navbars/top_nav';
import SessionForm from './session/session_form_container';

const HomePage = () => {
  return (
    <div className='homepage'>
      <TopNav />
      <main>
        <div className='description'>
          <h3>Never Forget A Million Dollar Idea Again</h3>
          <p>Record and organize all your thoughts,
            notes, and ideas in one easy to manage
            place with æterNote.</p>
        </div>
        <SessionForm />
      </main>
    </div>
  );
};

export default HomePage;
