import React from 'react';

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
        </div>

        <button className='logout-button' onClick={() => this.props.logout()}>Logout</button>
      </nav>
    );
  }
}

export default SideNav;
