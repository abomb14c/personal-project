import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import LeagueContainer from '../LeagueContainer/LeagueContainer'
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../../Components/Nav/Navigation'
import LandingPage from '../../Components/LandingPage/LandingPage'
import SignUpPage from '../../Components/SignUpPage/SignUpPage'
import SignInPage from '../../Components/SignInPage/SignInPage'
import PasswordForgetPage from '../../Components/PasswordForget/PasswordForget'
import HomePage from '../../Components/Home/Home'
import AccountPage from '../../Components/AccountPage/AccountPage'

import * as routes from '../../constants/routes'

import { firebase } from '../../firebase/index'
import { auth } from 'firebase';
import withAuthentication from '../../authentication/WithAuthentication';

class App extends Component {

  
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation  />
          <hr/>

          <Route
            exact path = {routes.LANDING}
            component = {() => <LandingPage />}
          />
          <Route
            exact path = {routes.SIGN_UP}
            component = {() => <SignUpPage />}
          />
          <Route
            exact path = {routes.SIGN_IN}
            component = {() => <SignInPage />}
          />
          <Route
            exact path = {routes.PASSWORD_FORGET}
            component = {() => <PasswordForgetPage />}
          />
          <Route
            exact path = {routes.HOME}
            component = {() => <HomePage />}
          />
          <Route
            exact path = {routes.ACCOUNT}
            component = {() => <AccountPage />}
          />
        </div>
    </Router>
    );
  }
}

export default withAuthentication(App);
