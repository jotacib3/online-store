import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import categoryReducer from './category/categorySlice';
import productReducer from './product/productSlice';
import departmentReducer from './department/departmentSlice';
import profileReducer from './profile/profileSlice';

const injectedReducers = {
  auth: authReducer,
  profile: profileReducer,
  departments: departmentReducer,
  categories: categoryReducer,
  products: productReducer,
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export const createReducer = () => rootReducer;
