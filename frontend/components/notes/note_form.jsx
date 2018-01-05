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
    this.props.processForm(notebook);
    this.props.updateNotebookFormModal();
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render () {
    const { reveal } = this.props;
    const { updateNotebookFormModal } = this.props;
    return(
      <div className={`form-modal ${reveal}`} >
        <div className='container'>
          <img className='plus-logo'src={window.staticImages.notebookPlus}/>
          <h3>
            {`${this.props.formType.toUpperCase()} NOTEBOOK`}
            <div className='bottom-border'/>
          </h3>
          <form
            className='new-notebook-form'
            onSubmit={this.handleSubmit}>

            <ul className='errors'>
              {
                this.props.errors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))
              }
            </ul>

            <input
              className="title"
              type='text'
              placeholder="Title your notebook"
              value={this.state.title}
              onChange={this.update('title')}/>
            <div className='form-buttons'>
              <button className='cancel-button' onClick={(e) => {
                  e.preventDefault();
                  updateNotebookFormModal();
                }}>
                Cancel
              </button>
              <input id='submit'
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
