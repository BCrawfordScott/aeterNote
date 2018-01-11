import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSelectedNote } from '../../actions/ui_actions';

class SideNav extends React.Component {

  constructor(props) {
    super(props);


    // this.handleClose = this.handleClose.bind(this);
  }

  // handleClose() {
  //   document.getElementById('notebooks').addClass('slideleft');
  //   setTimeout(() => this.updateNotebookTab(), 2000);
  //
  //
  // }

  render() {
    return(
      <nav className='side-nav'>
        <div className='note-buttons'>
          <div className='side-nav-button note-new-button'
            onClick={() => {
              this.props.newNote();
              this.props.history.push('/notes');
            }}>
          </div>
          <div className='side-nav-button notebooks-button'
            onClick={() => this.props.updateNotebookTab()}>
          </div>
          <div className='side-nav-button note-index-button'
            onClick={() => this.props.history.push('/notes')}>
          </div>
        </div>
        <button className='logout-button' onClick={() => this.props.logout()}>Logout</button>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newNote: () => dispatch(updateSelectedNote(false))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SideNav));
