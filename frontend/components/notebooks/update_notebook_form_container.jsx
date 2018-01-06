import { connect } from 'react-redux';
import NoteForm from '../notes/note_form';
import { updateNotebookFormModal } from '../../actions/ui_actions';
import {
  updateNotebook,
  removeNotebookErrors
} from '../../actions/notebook_actions';

const mapStateToProps = state => {
  const revealIndex = (state.ui.notebook_form_modal) ? "reveal-notebook-form" : "hide-notebook-form";
  console.log(state.errors);
  return {
    reveal: revealIndex,
    title: "",
    errors: state.errors.notebooks,
    formType: 'Update'
  };
};

const mapDisptachToProps = dispatch => {
  return {
    updateNotebookFormModal: () => dispatch(updateNotebookFormModal()),
    processForm: notebook => dispatch(updateNotebook(notebook)),
    removeErrors: () => dispatch(removeNotebookErrors())
  };
};


export default connect(mapStateToProps, mapDisptachToProps)(NoteForm);
