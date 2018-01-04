import React from 'react';
import SideNav from '../navbars/side_nav_container';
import Notebooks from '../notebooks/notebooks_index_container';

const NoteHome = () => {
  return(
    <main className='notes-main'>
      <SideNav />
      <Notebooks />
      <div className='under-construction'>
        <img  src={window.staticImages.logoMain} />
        <article>
          <p>Tibi gratias ago pro cum stetissent iuxta!</p>
          <p>-Thanks for stopping by!</p>
          <p>Check back soon for more elephantastic-features!</p></article>
      </div>
    </main>
  );
};

export default NoteHome;
