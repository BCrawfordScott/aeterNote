import React from 'react';
import SortOptions from '../notebooks/sort_options';

class NoteIndex extends React.Component {

  componentDidMount() {
    console.log('mounted');
    this.props.fetchNotes();
  }

  render () {
    return(
      <div className='notes-index'>
        <header className='notes-header'>
          <h3 className='placeholder'>NOTES</h3>
          <div className='note-count-options'>
            <p>note count</p>
            <div className='sort-options' onClick={this.props.updateSortOptions}>
              Options <img src={window.staticImages.downArrow}/>
            <SortOptions reveal={this.props.revealSort}/>
            </div>
          </div>
        </header>
        <ul className='notes-ul'>
        </ul>
      </div>
    );
  }
}

export default NoteIndex;
