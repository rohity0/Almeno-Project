import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  const { isAuthenticated, userId, token } = useSelector(
    (store) => store.auth.data
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}
