import React from 'react';
import { withRouter } from 'react-router-dom';

class SideNav extends React.Component {

  render() {
    return(
      <nav className='side-nav'>
        <div className='note-buttons'>
          <button
            className='notebooks-button'
            onClick={() => this.props.updateNotebookTab()}>
            <img src={window.staticImages.notebookIcon}/>
          </button>
          <div className='note-index-button'
            onClick={() => this.props.history.push('/notes')}>
          </div>
        </div>

        <button className='logout-button' onClick={() => this.props.logout()}>Logout</button>
      </nav>
    );
  }
}

export default withRouter(SideNav);
