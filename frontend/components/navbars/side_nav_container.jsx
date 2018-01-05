import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { updateNotebookTab } from '../../actions/ui_actions';
import SideNav from './side_nav';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    updateNotebookTab: () => dispatch(updateNotebookTab())
  };
};

export default connect(null, mapDispatchToProps)(SideNav);
