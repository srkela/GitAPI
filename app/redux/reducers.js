import {combineReducers} from 'redux';
import nav from './nav/navReducer';
import commits from './commits/commitsReducer';

const appReducers = combineReducers({
  nav,
  commits,
});

function rootReducer(state, action) {
  return appReducers(state, action);
}

export default rootReducer;
