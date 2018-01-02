import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  componentWillReceiveProps(newProps) {
   if(newProps.loggedIn) {
     this.props.history.push('/');
   }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }


  render() {
    return(
      <div className='session-form'>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <ul className='errors'>
            {
              this.props.errors.map((error, i) => (
                <li ket={i}>{error}</li>
              ))
            }
          </ul>
          <label>Email:
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('email')}/>
          </label>
          <label>Password:
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>
          <input type='submit' value={`${this.props.formType}`}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
