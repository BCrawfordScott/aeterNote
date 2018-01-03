import React from 'react';
import SideNav from '../navbars/side_nav_container';

const NoteHome = () => {
  return(
    <main className='notes-main'>
      <SideNav />
      <div className='under-construction'>
        <img  src={window.staticImages.logoMain} />
        <article>Thanks for stoping by!
          Check back soon for more elephantastic-features!</article>
      </div>
    </main>
  );
};

export default NoteHome;
