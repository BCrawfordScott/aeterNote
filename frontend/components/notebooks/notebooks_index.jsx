import React from 'react';
import NotebookIndexItem from './notebook_index_item';


class NotebookIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hide: this.props.hide
    };
  }


  componentDidMount() {
    this.props.fetchNotebooks();
    this.setState({ hide: "" });
  }


  render(){
    const { notebooks } = this.props;
    const { reveal } = this.props;
    const { revealModal } = this.props;
    const { updateNotebookFormModal } = this.props;
    const { updateNotebookSelected } = this.props;
    const { deleteWarning } = this.props;
    const { notebookTab } = this.props;
    return(
      <div >
        <div className={`modalbg ${revealModal}`}
          onClick={() => notebookTab() }>
          <div className={`notebooks ${reveal}` }>

            <header>
              <h3>NOTEBOOKS</h3>
              <button onClick={ () => updateNotebookFormModal() }>
                <img src={window.staticImages.notebookPlus}/>
              </button>
            </header>

            <ul className= 'notebooks-ul'>
              {notebooks.map(notebook => <NotebookIndexItem
                key={notebook.id}
                id={notebook.id}
                title={notebook.title}
                deleteWarning={deleteWarning}
                selectNotebook={updateNotebookSelected}/>)}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}



export default NotebookIndex;
