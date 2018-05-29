import { combineReducers } from 'redux';
import addNbaReducer from './addNbaReducer'
import sessionReducer from './session';
import userReducer from './user';

const rootReducer = combineReducers({
    nba: addNbaReducer,
    sessionState: sessionReducer,
    userState: userReducer
  });
  
  export default rootReducer;