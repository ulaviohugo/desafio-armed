import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  element: React.ReactElement;
  roles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, roles }) => {
  const { user } = useAuth();
  const location = useLocation();

  const isAuthorized = user && roles.includes(user.role);

  return isAuthorized ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
