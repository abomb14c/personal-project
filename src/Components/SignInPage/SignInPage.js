import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../SignUpPage/SignUpPage'
import { auth } from '../../firebase/index'
import * as routes from '../../constants/routes'
import { PasswordForgetLink } from '../PasswordForget/PasswordForget'
import './signIn.css'

const SignInPage = ({ history }) =>
  <div className="background">
    <div className="sign-in-container">
      <h1 className="sign-in">Sign In</h1>
      <SignInForm history={history} />
      <div className="password-reset">
        <PasswordForgetLink />
        <SignUpLink />
      </div> 
    </div>
  </div>

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });

  const INITIAL_STATE = {
    email: "",
    password: "",
    error: null 
  };

  class SignInForm extends Component {
    constructor(props){
      super(props)

      this.state = {...INITIAL_STATE}
    }

    onSubmit = (event) => {
      const {
        email,
        password
      } = this.state;
      
      const {
        history
      } = this.props;

      auth.doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState(() => ({ ...INITIAL_STATE }));
          history.push(routes.HOME);
        })
        .catch(error => {
          this.setState(byPropKey('error', error));
        });
      event.preventDefault();
    }

    render() {
      const {
        email,
        password,
        error
      } = this.state;

      const isInvalid = 
        password === "" ||
        email === "";

      return (
        <form className="login-form" onSubmit={this.onSubmit}>
          <input
            className="login-input login-input-one"
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email"
          />
          <input
            className="login-input"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit" className="sign-in-button">Sign In</button>

          { error && <p>(error.message)</p>}
        </form>
      ); 
    }
  }

export default withRouter(SignInPage);

export {
  SignInForm
};