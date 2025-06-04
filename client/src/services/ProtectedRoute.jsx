import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ allowedRole, children }) => {
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");
  const location = useLocation();

  console.log("🛡 role =", role);

  if (!token) return <Navigate to="/login" state={{ from: location }} replace />;
  if (role !== allowedRole) return <Navigate to={`/${role}`} replace />;

  return children; // ✅ สำคัญมาก
};

export default ProtectedRoute;
