import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignOutButton from '../Signout/SignOut'
import * as routes from '../../constants/routes'
import icon from "../../assets/league-leader-icon.png"
import './nav.css'

const Navigation = ({ authUser }) =>
  <div className="nav-bar">
    <div className="icon-div">
      <img alt="app-icon" src={icon}></img>
      <h1 className="title">League Leader</h1>
    </div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});



export default connect(mapStateToProps)(Navigation);