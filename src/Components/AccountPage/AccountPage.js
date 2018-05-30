import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { PasswordForgetForm } from '../PasswordForget/PasswordForget';
import PasswordChangeForm from '../PasswordChange/PasswordChange';
import withAuthorization from '../../WithAuthorization/WithAuthorization'
import './account.css'

const AccountPage = ({ authUser }) =>
  <div className="account-background">
  <div className="account-container">
    <h3 className="account">Account</h3>
    <h1 className="acount-name"> {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
  </div>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);