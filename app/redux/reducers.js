import {combineReducers} from 'redux';

const appReducers = combineReducers({});

function rootReducer(state, action) {
  return appReducers(state, action);
}

export default rootReducer;
