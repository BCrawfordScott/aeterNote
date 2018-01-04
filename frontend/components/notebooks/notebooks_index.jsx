import React from 'react';
// import NoteIndexItem from './notebook_index_item';

class NotebookIndex extends React.Component {
  constructor(props){
    super(props);

  }

  render(){

    const notebooks = Object.values(this.props.notebooks);

    return(
      <div className='notebooks'>
        <h3>NOTEBOOKS</h3>

        <ul>
          {notebooks.map(notebook => notebook.title)}
        </ul>
      </div>
    );
  }
}

// <li> <NotebookIndexItem key={`${notebook.id}`} title={`${notebook.title}`} /> </li>

export default NotebookIndex;
