import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setRedirecting(true);
      const timer = setTimeout(() => {
        loginWithRedirect();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Checking authentication...</p>
      </div>
    );
  }

  if (!isAuthenticated && redirecting) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <p className="modal-title">Unauthorized Access</p>
          <p>You are not authorized to view this page.</p>
          <p>Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;