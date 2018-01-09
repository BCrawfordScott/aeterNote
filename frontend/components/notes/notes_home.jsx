import React from 'react';
import SideNav from '../navbars/side_nav_container';
import Notes from '../notes/notes_index_container';
import CreateNotebook from '../notebooks/create_notebook_form_container';
import UpdateNotebook from '../notebooks/update_notebook_form_container';
import NotebookShow from '../notebooks/notebook_show_container';
import DeleteWarning from '../notebooks/notebook_delete_warning';
import Notebooks from '../notebooks/notebooks_index_container';
import NoteShow from './note_show';
// import ReactQuill from 'react-quill';



const NoteHome = () => {

  return(
    <div className='modal-holder'>
      <CreateNotebook />
      <DeleteWarning />
      <main className='notes-main'>

          <SideNav />


          <Notes />
          <Notebooks />

            <div className='under-construction'>
              <NoteShow />
            </div>


      </main>
    </div>
  );
};

export default NoteHome;

// <img className='logo' src={window.staticImages.logoMain} />
// <article>
//   <p>Tibi gratias ago pro cum stetissent iuxta!</p>
//   <p>-Thanks for stopping by!</p>
//   <p>Check back soon for more elephantastic-features!</p></article>
