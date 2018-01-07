import React from 'react';
import SideNav from '../navbars/side_nav_container';
import Notebooks from '../notebooks/notebooks_index_container';
import CreateNotebook from '../notebooks/create_notebook_form_container';
import UpdateNotebook from '../notebooks/update_notebook_form_container';
import NotebookShow from '../notebooks/notebook_show_container';

const NoteHome = () => {
  return(
    <div className='modal-holder'>
      <CreateNotebook />

      <main className='notes-main'>

          <SideNav />

        <div className='note-box'>
          <Notebooks />
          <NotebookShow />
          <div className='under-construction'>
            <img className='logo' src={window.staticImages.logoMain} />
            <article>
              <p>Tibi gratias ago pro cum stetissent iuxta!</p>
              <p>-Thanks for stopping by!</p>
              <p>Check back soon for more elephantastic-features!</p></article>
            </div>
          </div>
        </main>
    </div>
  );
};

export default NoteHome;
