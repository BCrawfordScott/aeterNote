import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';

class QuillNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    merge(this.state, {
      saveAction: (this.props.note.id) ?
          this.props.updateNote : this.props.createNote,
      notebook_id: this.props.note.notebook_id
    });

    this.update = this.update.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSaveAction = this.handleSaveAction.bind(this);
  }


  componentWillReceiveProps(newProps) {

    this.setState({
      id: newProps.note.id,
      title: newProps.note.title,
      content: newProps.note.content,
      plain_text: newProps.note.plain_text,
      notebook_id: newProps.note.notebook_id,
      notebook: newProps.notebook,
      notebooks: newProps.notebooks
    });
    this.setState((newProps.note.id) ?
        { saveAction: newProps.updateNote } :
        { saveAction: newProps.createNote });
  }

  componentDidMount() {

    if (this.props.note.id) {
      this.props.fetchNote(this.props.note.id);
    }
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleEditorChange(content, delta, source, editor) {
    this.setState({
      content: content,
      plain_text: editor.getText().trim()
    });
  }

  handleSaveAction() {
    const note = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content,
      plain_text: this.state.plain_text,
      notebook_id: this.state.notebook_id,
    };
    this.state.saveAction(note);

  }

  render() {
    console.log(this.props.notebook);
    return (

    <main className='note-new-edit'>
      <form className='note-show'>
        <div className='action-tools'>
          <div className='delete-note-trash'
            onClick={() => this.props.deleteWarning()}>
          </div>
          <div className='notebook-select'>
            {this.props.notebook.title}
            <img src={window.staticImages.downArrow}/>
          </div>
        </div>
        <div className='title-save'>
          <input className='note-title-edit'
            type='text'
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="Title your new note"/>
          <button className="notebook-button save-button"
            onClick={(e) => {
              e.preventDefault();
              this.handleSaveAction();
            }}>
            Save
          </button>
        </div>
      </form>
        <ReactQuill
          value={this.state.content}
          ref={ editor => { this.editor = editor; }}
          onChange={this.handleEditorChange}
          />


    </main>

      );
  }
}


export default QuillNote;
