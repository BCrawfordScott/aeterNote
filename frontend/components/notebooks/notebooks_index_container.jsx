import { connect } from 'react-redux';
import {
  fetchNotebook,
  fetchNotebooks,
  createNotebook,
  updateNotebook,
  deleteNotebook
} from '../../actions/notebook_actions';
import NotebookIndex from './notebooks_index';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const revealIndex = (state.ui.notebook_tab) ? "reveal-notebooks" : "hide-notebook";
  return {
    reveal: revealIndex,
    notebooks: Object.values(state.notebooks)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebooks: () => dispatch(fetchNotebooks())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NotebookIndex);
