import AdminDashboard from "../AdminDashboard/AdminDashboard";
import VolunteerDashboard from "../VolunteerDashboard/VolunteerDashboard";
import Dashboard from "./Dashboard";

export default function DashboardLayout() {
  const isAdmin = true;
  const isVolunteer = false;
  const isDonor = false;

  return (
    <div>
      {isAdmin && <AdminDashboard />}
      {isVolunteer && <VolunteerDashboard />}
      {isDonor && <Dashboard />}
    </div>
  );
}
