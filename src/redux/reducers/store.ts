import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { ITheme, User } from "types/types";
import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';
import themeReducer from './theme-reducer';

export interface StoreState {
  auth: AuthState,
  profile: User,
  theme: ITheme
}

export interface AuthState {
  login: string | null,
  password: string | null,
}

let reducers = combineReducers<StoreState>({
  auth: authReducer,
  profile: profileReducer,
  theme: themeReducer
});

let store = createStore(reducers, applyMiddleware(thunk, logger))

export default store