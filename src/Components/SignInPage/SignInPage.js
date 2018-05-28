import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SignUpLink } from '../SignUpPage/SignUpPage'
import { auth } from '../../firebase/index'
import * as routes from '../../constants/routes'

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <SignUpLink />
  </div>

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
  });

  const INITIAL_STATE = {
    email: "",
    password: "",
    error: null 
  };

export default SignInPage;