import React from 'react';
import SideNav from '../navbars/side_nav_container';
import Notebooks from '../notebooks/notebooks_index_container';
import CreateNotebook from '../notebooks/create_notebook_form_container';
import UpdateNotebook from '../notebooks/update_notebook_form_container';
import NotebookShow from '../notebooks/notebook_show_container';
import DeleteWarning from '../notebooks/notebook_delete_warning';
import NoteShow from '../notes/note_show';


const NoteBookHome = () => {

  return(
    <div className='modal-holder'>
      <CreateNotebook />
      <DeleteWarning />
      <main className='notes-main'>

          <SideNav />




          <Notebooks />
          <NotebookShow />
          <div className=' note-show-wrapper'>
            <NoteShow />
          </div>

      </main>
    </div>
  );
};

export default NoteBookHome;