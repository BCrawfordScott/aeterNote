import { connect } from 'react-redux';
import NotesIndex from './notes_index';
import { fetchNotes } from '../../actions/note_actions';
import {
  updateSortOptions ,
  updateEditNotebook
} from '../../actions/ui_actions';

const mapStateToProps = state => {
  const revealSort = (state.ui.sort_options) ? "reveal-sort" : "hide-sort";
  return {
    revealSort: revealSort
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSortOptions: () => dispatch(updateSortOptions()),
    fetchNotes: () => dispatch(fetchNotes())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
