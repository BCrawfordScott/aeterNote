import React from 'react';

class NoteForm extends React.Component {
  render () {
    const { reveal } = this.props;
    const { updateNotebookFormModal } = this.props;
    return(
      <div className={`form-modal ${reveal}`} >
        <div className='container'>
          <h1 className='temporary'>Get ready to make something!</h1>
          <button className='cancel-button' onClick={() => updateNotebookFormModal()}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default NoteForm;
