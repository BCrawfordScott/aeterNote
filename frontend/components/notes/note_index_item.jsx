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
              <div className='button-note'>
                <img src={window.staticImages.whiteTrashCan} />
              </div>
            </div>
          </h5>
          <div className='note-content-container'>
            <p className='note-content'>{note.content}</p>
          </div>
        </li>
        <div className='bottom-border'></div>
      </div>
    );
  }
}
// <h5>this.props.title</h5>

export default NoteIndexItem;
