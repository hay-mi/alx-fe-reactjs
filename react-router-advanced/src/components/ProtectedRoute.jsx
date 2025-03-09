import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from ".src/hooks/useAuth";

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
