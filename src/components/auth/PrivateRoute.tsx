
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

interface PrivateRouteProps {
  children: ReactNode;
  requiresAdmin?: boolean;
  requiresSuperAdmin?: boolean;
}

export const PrivateRoute = ({ 
  children,
  requiresAdmin = false,
  requiresSuperAdmin = false
}: PrivateRouteProps) => {
  const { user, loading, isAdmin, isSuperAdmin } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex h-screen w-full items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (requiresSuperAdmin && !isSuperAdmin) {
    return <Navigate to="/dashboard" replace />;
  }
  
  if (requiresAdmin && !isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};
