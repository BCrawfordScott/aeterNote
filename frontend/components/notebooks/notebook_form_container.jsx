import { connect } from 'react-redux';
import NoteForm from '../notes/note_form';
import { updateNotebookFormModal } from '../../actions/ui_actions';

const mapStateToProps = state => {
  const revealIndex = (state.ui.notebook_form_modal) ? "reveal-notebook-form" : "hide-notebook-form";
  return {
    reveal: revealIndex,
  };
};

const mapDisptachToProps = dispatch => {
  return {
    updateNotebookFormModal: () => dispatch(updateNotebookFormModal())
  };
};


export default connect(mapStateToProps, mapDisptachToProps)(NoteForm);
