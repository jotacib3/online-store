import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import profileSlice from './profile/profileSlice';

const injectedReducers = {
  auth: authReducer,
  profile: profileSlice,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export const createReducer = () => rootReducer;
