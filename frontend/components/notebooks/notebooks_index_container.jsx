import { connect } from 'react-redux';
import {
  fetchNotebook,
  fetchNotebooks,
  createNotebook,
  updateNotebook,
  deleteNotebook
} from '../../actions/notebook_actions';
import { updateNotebookFormModal } from '../../actions/ui_actions';
import NotebookIndex from './notebooks_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const revealIndex = (state.ui.notebook_tab) ? "reveal-notebook" : "hide-notebook";
  return {
    reveal: revealIndex,
    notebooks: Object.values(state.notebooks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    updateNotebookFormModal: () => dispatch(updateNotebookFormModal())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);
