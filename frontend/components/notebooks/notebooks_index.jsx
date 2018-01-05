import React from 'react';
import NotebookIndexItem from './notebook_index_item';

class NotebookIndex extends React.Component {

  // componentDidMount() {
  //   console.log(this.props.notebooks);
  //   this.props.fetchNotebooks();
  // }


  render(){
    const { notebooks } = this.props;
    return(
      <div className='notebooks'>
        <header>
          <h3>NOTEBOOKS</h3>
          <button><img src={window.staticImages.notebookPlus}/></button>
        </header>
        <ul>
          {notebooks.map(notebook => <NotebookIndexItem key={notebook.id} title={notebook.title} />)}
        </ul>
      </div>
    );
  }
}



export default NotebookIndex;
