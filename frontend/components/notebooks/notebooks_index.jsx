import React from 'react';
import NotebookIndexItem from './notebook_index_item';

class NotebookIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotebooks();
  }


  render(){
    const { notebooks } = this.props;
    const { reveal } = this.props;
    const { updateNotebookFormModal } = this.props;
    return(
      <div className={`modal ${reveal}`}>
        <div className='notebooks'>
          <header>
            <h3>NOTEBOOKS</h3>
            <button onClick={ () => updateNotebookFormModal() }>
              <img src={window.staticImages.notebookPlus}/>
            </button>
          </header>
          <ul className= 'notebooks-ul'>
            {notebooks.map(notebook => <NotebookIndexItem key={notebook.id} title={notebook.title} />)}
          </ul>
        </div>
      </div>
    );
  }
}



export default NotebookIndex;
