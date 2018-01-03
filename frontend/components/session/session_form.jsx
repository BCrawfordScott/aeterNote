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
    // this.emailFocus = this.emailFocus.bind(this);
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

  // emailFocus(e) {
  //   (e.target.value === 'Email') ? e.target.value = '' : e.target.value = this.state.value;
  // }
  //
  // emailBlur(e) {
  //   (e.target.value === '') ? e.target.value = 'Emial' : e.target.value = this.state.value;
  // }

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
            <input
              className="email"
              type='text'
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')}/>
            <input
              className="password"
              type='password'
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}/>

            <input
              type='submit'
              value={`${this.props.formType}`}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
