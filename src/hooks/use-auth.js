import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { saveClaimsAction } from '../store/auth/authSlice';

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleStatusChange(status) {
      setIsAuthenticated(status);
    }
    const token = localStorage.getItem('token');
    if (!token) {
      localStorage.clear();
    } else {
      const decoded = jwt_decode(token);
      const expiresAt = decoded.exp * 1000;
      const dateNow = Date.now();
      const isValid = dateNow <= expiresAt;
      dispatch(saveClaimsAction(decoded));
      handleStatusChange(isValid);
    }
  }, [dispatch]);

  return isAuthenticated;
}

export default useAuth;
