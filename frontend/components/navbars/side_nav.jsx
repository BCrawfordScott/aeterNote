import React from 'react';

class SideNav extends React.Component {

  render() {
    return(
      <nav className='side-nav'>
        <button className='logout-button' onClick={() => this.props.logout()}>Logout</button>
      </nav>
    );
  }
}

export default SideNav;
