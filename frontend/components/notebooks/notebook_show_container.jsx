import { connect } from 'react-redux';
import NotebookShow from './notebook_show';
import {
  updateSortOptions ,
  updateEditNotebook
} from '../../actions/ui_actions';

const mapStateToProps = state => {
  const revealShow = (state.ui.notebook_tab) ? "reveal-show" : "hide-show";
  const revealSort = (state.ui.sort_options) ? "reveal-sort" : "hide-sort";
  const notebook = (state.notebooks[state.ui.current_notebook]) ?
    state.notebooks[state.ui.current_notebook] :
    {title: ''};
  const locked = (
    Object.values(state.notebooks).length === 0 ||
    !(state.ui.current_notebook)) ? 'locked' : '';
  return {
    notebook: notebook,
    revealShow: revealShow,
    revealSort: revealSort,
    locked: locked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSortOptions: () => dispatch(updateSortOptions()),
    updateEditNotebook: () => dispatch(updateEditNotebook())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);
