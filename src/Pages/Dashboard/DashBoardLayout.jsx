import useAllUsers from "../../Hooks/useAllUsers";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import VolunteerDashboard from "../VolunteerDashboard/VolunteerDashboard";
import Dashboard from "./Dashboard";

export default function DashboardLayout() {
  const [users] = useAllUsers();
  const isAdmin = false;
  const isVolunteer = true;
  const isDonor = false;

  return (
    <div>
      {isAdmin && <AdminDashboard />}
      {isVolunteer && <VolunteerDashboard />}
      {isDonor && <Dashboard />}
    </div>
  );
}
