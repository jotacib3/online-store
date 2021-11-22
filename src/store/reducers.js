import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

const injectedReducers = {
  auth: authReducer,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export const createReducer = () => rootReducer;
