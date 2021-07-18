import {combineReducers} from 'redux';
import nav from './nav/navReducer';

const appReducers = combineReducers({
  nav,
});

function rootReducer(state, action) {
  return appReducers(state, action);
}

export default rootReducer;
