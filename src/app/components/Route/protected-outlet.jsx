import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import {
  saveClaimsAction,
  saveTokenAction,
} from '../../../store/auth/authSlice';

const ProtectedOutlet = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  if (!token) {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  const decoded = jwt_decode(token);
  const expiresAt = decoded.exp * 1000;
  const dateNow = Date.now();
  const isValid = dateNow <= expiresAt;
  dispatch(saveClaimsAction(decoded));
  dispatch(saveTokenAction(token));

  return isValid ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedOutlet;
