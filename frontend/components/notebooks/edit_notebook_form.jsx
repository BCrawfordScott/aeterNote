import React from 'react';

class NoteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebook = Object.assign({}, this.state);
    this.props.processForm(notebook).then(
      newNotebook => this.props.updateNotebookFormModal()
    );
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render () {
    const { reveal } = this.props;
    const { updateEditNotebook } = this.props;
    return(
      <div className={`form-modal ${reveal}`} >
        <div className='edit-notebook-container'>
          <img className='gray-i'src={window.staticImages.grayI}/>
          <h3 className='info-title'>
            {`NOTEBOOK INFO`}
            <div className='bottom-border'/>
          </h3>
          <h5 className='Overview'>Overview</h5>
          <form
            className='notebook-form'
            onSubmit={this.handleSubmit}>

            <ul className='errors'>
              {
                this.props.errors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))
              }
            </ul>
            <div className='title-box'>
              <p className='mini-title'>Title</p><input
                className="edit-title"
                type='text'
                placeholder="Title your notebook"
                value={this.state.title}
                onChange={this.update('title')}/>
            </div>
            <div className='form-buttons'>
              <button className='notebook-button edit-cancel' onClick={(e) => {
                  e.preventDefault();
                  updateEditNotebook();
                }}>
                Cancel
              </button>
              <input className='notebook-button edit-submit'
                type='submit'
                value={`${this.props.formType}`}/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NoteForm;
