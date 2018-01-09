import { connect } from 'react-redux';
import Note from './Note';
import {
  updateNote,
  createNote,
  fetchNote
} from '../../actions/note_actions';

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

  return {
    note: note
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNote: note => dispatch(updateNote(note)),
    createNote: note => dispatch(createNote(note)),
    fetchNote: noteId => dispatch(fetchNote(noteId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
