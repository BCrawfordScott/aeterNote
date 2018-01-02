import React from 'react';

class SideNav extends React.Component {

  render() {
    return(
      <button className='logout-button' onClick={() => this.props.logout()} >Logout</button>
    );
  }
}

export default SideNav;
