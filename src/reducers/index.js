import { combineReducers } from 'redux';
import addNbaReducer from './addNbaReducer'

const rootReducer = combineReducers({
    nba: addNbaReducer
  });
  
  export default rootReducer;