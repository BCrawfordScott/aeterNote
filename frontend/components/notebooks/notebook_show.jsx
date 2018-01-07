import React from 'react';
import SortOptions from './sort_options';
import EditNotebook from './update_notebook_form_container';


class NotebookShow extends React.Component {
  render () {
    const { notebook } = this.props;
    return(
      <div className={`notebook-show ${this.props.revealShow}`} >
        <header>
          <img className={this.props.locked}
            src={window.staticImages.infoI}
            onClick={this.props.updateEditNotebook}/>
          <EditNotebook />
          <h3 className='notebook-title'>{notebook.title}</h3>
        </header>
        <div className='note-info'>
          <div className='count-options'>
            <p>note count</p>
            <div className='sort-options' onClick={this.props.updateSortOptions}>
              Options <img src={window.staticImages.downArrow}/>
            <SortOptions reveal={this.props.revealSort}/>
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
