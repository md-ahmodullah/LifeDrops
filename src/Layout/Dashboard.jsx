import { BiSolidBookContent } from "react-icons/bi";
import { FaHome, FaList, FaUser, FaUsers } from "react-icons/fa";
import { FaFileWaveform } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo4 from "../assets/logo/logo4.png";
import useAllDonationRequest from "../Hooks/useAllDonationRequest";
import useAllUsersOnly from "../Hooks/useAllUsersOnly";
import useDonationRequest from "../Hooks/useDonationRequest";
import usePendingRequest from "../Hooks/usePendingRequest";

export default function Dashboard() {
  const [myDonations] = useDonationRequest();
  const [AllDonationRequest] = useAllDonationRequest();
  const [pendingRequest] = usePendingRequest();
  const [allUsersOnly] = useAllUsersOnly();
  const isAdmin = true;
  const links = (
    <>
      {isAdmin ? (
        <>
          <NavLink
            to="/dashboard/profile"
            className="flex gap-2 items-center text-gray-100"
          >
            <FaUser className="text-base" />
            <a>Profile</a>
          </NavLink>
          <NavLink
            end
            to="/dashboard/adminHome"
            className="flex gap-2 items-center text-gray-100"
          >
            <FaHome className="text-lg" />
            <a>Admin Home</a>
          </NavLink>
          <NavLink
            to="/dashboard/all-users"
            className="flex gap-2 items-center text-gray-100"
          >
            <FaUsers className="text-lg" />
            <a>All Users({allUsersOnly.length})</a>
          </NavLink>
          <NavLink
            to="/dashboard/all-blood-donation-request"
            className="flex gap-2 items-center text-gray-100"
          >
            <FaList className="text-base" />
            <a>All Donation Requests({AllDonationRequest.length})</a>
          </NavLink>
          <NavLink
            to="/dashboard/content-management"
            className="flex gap-2 items-center text-gray-100"
          >
            <BiSolidBookContent className="text-base" />
            <a>Content Management</a>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/dashboard/profile"
            className="flex gap-2 items-center text-gray-100"
          >
            <FaUser className="text-base" />
            <a>Profile</a>
          </NavLink>
          <NavLink
            end
            to="/dashboard"
            className="flex gap-2 items-center text-gray-100"
          >
            <FaHome className="text-lg" />
            <a>User Home</a>
          </NavLink>
          <NavLink
            to="/dashboard/my-donation-requests"
            className="flex gap-2 items-center text-gray-100"
          >
            <FaList className="text-sm" />
            <a>My Donation Requests({myDonations.length})</a>
          </NavLink>
          <NavLink
            to="/dashboard/create-donation-request"
            className="flex gap-2 items-center text-gray-100"
          >
            <FaFileWaveform className="text-lg" />
            <a>Create Donation Request</a>
          </NavLink>
        </>
      )}
      <div className="divider border-t border-gray-600"></div>
      <NavLink to="/" className="flex gap-2 items-center text-gray-100">
        <FaHome className="text-lg" />
        <a>Home</a>
      </NavLink>
      <NavLink
        to="/donationRequests"
        className="flex gap-2 items-center text-gray-100"
      >
        <MdOutlinePendingActions className="text-xl" />
        <a>Pending Request({pendingRequest.length})</a>
      </NavLink>
      <NavLink to="/blogs" className="flex gap-2 items-center text-gray-100">
        <TfiWrite className="text-lg" />
        <a>Published Blogs</a>
      </NavLink>
    </>
  );

  return (
    <>
      <section className="flex font-poppins">
        <div className="lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-side z-10">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-red-950 text-white min-h-full w-60 font-medium gap-4">
              <div className="flex items-center gap-2 pt-2 pb-6 px-4">
                <img src={logo4} alt="Blood Logo" className="w-6 h-8" />
                <Link
                  className="text-xl md:text-2xl font-bold text-red-500"
                  to="/"
                >
                  <span className="text-blue-500">Life</span>Drops
                </Link>
              </div>
              {links}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <section className="bg-red-800 h-[60px] flex items-center justify-between md:justify-start">
            <div className="drawer-content p-5">
              <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
                <RiMenuUnfoldLine className="text-white text-2xl" />
              </label>
            </div>
            <div className="px-3">
              <p className="text-xl md:text-2xl font-bold text-gray-200">
                Dashboard
              </p>
            </div>
          </section>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </section>
    </>
  );
}
