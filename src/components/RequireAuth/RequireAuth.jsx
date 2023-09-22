import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

export default function RequireAuth({ children, userStatus }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return "Loading";
  }

  if (!userStatus.userStatus) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}
