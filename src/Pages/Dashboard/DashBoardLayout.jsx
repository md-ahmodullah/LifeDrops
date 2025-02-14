import { useContext } from "react";
import useAdmin from "../../Hooks/useAdmin";
import useAllUsers from "../../Hooks/useAllUsers";
import useVolunteer from "../../Hooks/useVolunteer";
import { AuthContext } from "../../Provider/AuthProvider";
import AdminHome from "../AdminDashboard/AdminHome";
import DonorHome from "./DonorHome";

export default function DashboardLayout() {
  const { user } = useContext(AuthContext);
  const [users] = useAllUsers();
  const [isAdmin] = useAdmin();
  const [isVolunteer] = useVolunteer();

  return <div>{isAdmin || isVolunteer ? <AdminHome /> : <DonorHome />}</div>;
}
