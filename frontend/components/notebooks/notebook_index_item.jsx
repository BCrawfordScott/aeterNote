import React from 'react';


class NotebookIndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div className= 'notebook-item-container'>
        <li className='notebook-item'>

          <h5>
            {this.props.title}
            <div className='notebook-item-buttons'>
              <button className='button-notebook'>
                <img src={window.staticImages.whitePencil} />
              </button>
              <button className='button-notebook'>
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
