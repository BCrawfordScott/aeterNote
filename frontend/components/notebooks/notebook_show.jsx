import React from 'react';


class NotebookShow extends React.Component {
  render () {
    const { notebook } = this.props;
    return(
      <div className={`notebook-show ${this.props.revealShow}`} >
        <header>
          <img src={window.staticImages.infoI} />
          <h3 className='notebook-title'>{notebook.title}</h3>
        </header>
        <div className='note-info'>
          <div className='count-options'>
            <p>note count</p>
            <div className='sort-options'>
              Options <img src={window.staticImages.downArrow}/>
            </div>
          </div>
          <div className='notes-index'>
            <ul className='notebok-notes'>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NotebookShow;
