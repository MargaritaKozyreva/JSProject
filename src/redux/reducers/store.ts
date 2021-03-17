import { createStore, combineReducers } from 'redux';
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
  auth: authReducer,
  profile: profileReducer
});

let store = createStore(reducers)

export default store