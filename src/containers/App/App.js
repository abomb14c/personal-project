import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import LeagueContainer from '../LeagueContainer/LeagueContainer'
import Navigation from '../../Components/Nav/Navigation'

import * as routes from '../../constants/routes'

class App extends Component {
  
  
  
  render() {
    return (
      <div className="App">
        <Navigation />
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
    );
  }
}

export default App;
