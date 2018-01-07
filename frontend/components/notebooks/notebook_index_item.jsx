import React from 'react';


class NotebookIndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const notebookId = this.props.id;
    return(
      <div className= 'notebook-item-container'>
        <li className='notebook-item'
            onClick={() => {
              this.props.selectNotebook(notebookId);
            } }>

          <h5>
            {this.props.title}
            <div className='notebook-item-buttons'>
              <button className='button-notebook'
                onClick={() => this.props.deleteWarning()}>
                <img src={window.staticImages.whiteTrashCan} />
              </button>
            </div>
          </h5>

          <p>notes</p>
        </li>
        <div className='bottom-border'></div>
      </div>
    );
  }
}
// <h5>this.props.title</h5>

export default NotebookIndexItem;
