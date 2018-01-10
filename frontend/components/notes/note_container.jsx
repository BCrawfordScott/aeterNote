import { connect } from 'react-redux';
import Note from './note';
import {
  updateNote,
  createNote,
  fetchNote
} from '../../actions/note_actions';
import { updateNoteDeleteWarning } from '../../actions/ui_actions';

const mapStateToProps = state => {

  const note = (state.ui.selected_note) ?
    state.notes[state.ui.selected_note] :
    {
      title: '',
      content: '',
      plain_text: '',
      notebook_id: (state.ui.current_notebook) ?
        state.ui.current_notebook : Object.keys(state.notebooks)[0]
    };
  const notebook = state.notebooks[note.notebook_id];
  const notebooks = Object.values(state.notebooks);
  return {
    note: note,
    notebook: notebook,
    notebooks: notebooks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNote: note => dispatch(updateNote(note)),
    createNote: note => dispatch(createNote(note)),
    fetchNote: noteId => dispatch(fetchNote(noteId)),
    deleteWarning: () => dispatch(updateNoteDeleteWarning()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
