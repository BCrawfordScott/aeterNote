import React from 'react';
import Note from './note_container';
import NoteDeleteWarning from './note_delete_warning';

class NoteShow extends React.Component {
  render () {
    return(
      <div>
        <NoteDeleteWarning />
        <Note />
      </div>


    );
  }
}

export default NoteShow;
