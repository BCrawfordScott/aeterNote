import React from 'react';


class NotebookIndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <li className='notebook-item'>

        <h5>{this.props.title}</h5>

        <p>notes</p>
        <div className='bottom-border'></div>
      </li>
    );
  }
}
// <h5>this.props.title</h5>

export default NotebookIndexItem;
