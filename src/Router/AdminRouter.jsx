import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading";
import useAllUsers from "../Hooks/useAllUsers";
import { AuthContext } from "../Provider/AuthProvider";
export default function AdminRouter({ children }) {
  const { user, loading } = useContext(AuthContext);
  const [users] = useAllUsers();
  const admin = users.filter((user) => user?.role === "admin");
  console.log(admin);
  if (loading) {
    return <Loading />;
  }
  if (user && admin.length !== 0) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
}
