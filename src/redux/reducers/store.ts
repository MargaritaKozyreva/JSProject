import { createStore, combineReducers } from 'redux';
import { User } from '../../mocks/userData';
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';

export interface StoreState {
  auth: AuthState,
  profile: User
}

export interface AuthState {
  login: string | null,
  password: string | null,
}

let reducers = combineReducers<StoreState>({
  auth: authReducer,
  profile: profileReducer
});

let store = createStore(reducers)

export default store