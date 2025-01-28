import { useContext } from "react";
import logo4 from "../../assets/logo/logo4.png";
import { AuthContext } from "../../Provider/AuthProvider";
import AdminHome from "../AdminDashboard/AdminHome";
import DonorHome from "./DonorHome";
export default function DashboardHome() {
  const { user } = useContext(AuthContext);
  const isAdmin = false;
  const isVolunteer = false;
  const isDonor = true;
  return (
    <>
      <section className="w-11/12 mx-auto">
        <div className="py-5 md:py-10">
          <h1 className="text-xl md:text-3xl font-bold text-center text-red-700 uppercase">
            Welcome, {user?.displayName}!
          </h1>
          <div className="flex items-center gap-2 pt-5 md:pt-12 px-2">
            <div>
              <img src={logo4} alt="Blood Logo" className="w-8 h-11" />
            </div>
            <div>
              <h1 className="text-base lg:text-2xl text-gray-700 font-bold">
                Recent Donation Requests
              </h1>
              <p className="text-xs text-red-500 font-medium w-11/12">
                Every Drop Counts. Donate Blood, Save Lives
              </p>
            </div>
          </div>
          <>
            {isAdmin && <AdminHome />}
            {isVolunteer && "Vlol"}
            {isDonor && <DonorHome />}
          </>
        </div>
      </section>
    </>
  );
}
