import { connect } from 'react-redux';
import NotebookShow from './notebook_show';

const mapStateToProps = state => {
  const revealShow = (state.ui.notebook_tab) ? "reveal-show" : "hide-show";
  return {
    notebook: state.notebooks[state.ui.current_notebook],
    revealShow: revealShow
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookShow);
