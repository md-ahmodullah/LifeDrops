import { useContext } from "react";
import useAllUsers from "../../Hooks/useAllUsers";
import { AuthContext } from "../../Provider/AuthProvider";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import VolunteerDashboard from "../VolunteerDashboard/VolunteerDashboard";
import Dashboard from "./Dashboard";

export default function DashboardLayout() {
  const { user } = useContext(AuthContext);
  const [users] = useAllUsers();
  const isAdmin = false;
  const isVolunteer = false;
  const isDonor = true;

  return (
    <div>
      {isAdmin && <AdminDashboard />}
      {isVolunteer && <VolunteerDashboard />}
      {isDonor && <Dashboard />}
    </div>
  );
}
