import React from 'react';


class NoteIndexItem extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    const { note } = this.props;
    return(
      <div className= 'notebook-item-container'>
        <li className='note-item'>

          <h5>
            {note.title}
            <div className='note-item-buttons'>
              <button className='button-note'>
                <img src={window.staticImages.whiteTrashCan} />
              </button>
            </div>
          </h5>

          <p>{note.content}</p>
        </li>
        <div className='bottom-border'></div>
      </div>
    );
  }
}
// <h5>this.props.title</h5>

export default NoteIndexItem;
