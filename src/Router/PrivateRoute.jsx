import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading";
import { AuthContext } from "../Provider/AuthProvider";
export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  console.log(user, loading);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}
