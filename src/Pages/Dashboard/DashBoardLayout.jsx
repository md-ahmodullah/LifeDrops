import AdminDashboard from "../AdminDashboard/AdminDashboard";
import VolunteerDashboard from "../VolunteerDashboard/VolunteerDashboard";
import Dashboard from "./Dashboard";

export default function DashboardLayout() {
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
