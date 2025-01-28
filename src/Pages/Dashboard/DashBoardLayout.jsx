import useAllUsers from "../../Hooks/useAllUsers";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import VolunteerDashboard from "../VolunteerDashboard/VolunteerDashboard";
import Dashboard from "./Dashboard";

export default function DashboardLayout() {
  const [users] = useAllUsers();
  const admin = users.filter((user) => user?.role === "admin");
  console.log(admin);
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
