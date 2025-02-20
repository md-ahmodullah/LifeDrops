import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import logo4 from "../assets/logo/logo4.png";
import useUsers from "../Hooks/useUsers";
import { AuthContext } from "../Provider/AuthProvider";
export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to="">Home</NavLink>
      <NavLink to="/donationRequests">Donation Requests</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      {user && <NavLink to="/funding">Funding</NavLink>}
    </>
  );

  const [users] = useUsers();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <>
      <div className="navbar sticky top-0 z-10 bg-base-100 backdrop-blur-md bg-opacity-25 font-poppins lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 backdrop-blur-md bg-opacity-65 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold gap-2"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo4} alt="Blood Logo" className="w-7 h-9" />
            <Link className="text-2xl md:text-3xl font-bold text-red-600">
              <span className="text-blue-600">Life</span>Drops
            </Link>
          </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div> */}
        <div className="navbar-end">
          <div className="hidden lg:flex mr-6">
            <ul className="menu menu-horizontal px-1 font-semibold gap-6">
              {links}
            </ul>
          </div>
          {user ? (
            <>
              <div className="dropdown dropdown-end mr-2">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="profile"
                      src={users?.photoURL || avatar}
                      title={user?.displayName}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 backdrop-blur-md bg-opacity-65 rounded-box z-[1] mt-3 p-2 shadow font-semibold"
                >
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <li>
                    <button onClick={handleLogOut} className="text-red-600">
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-red-600 text-white border-none hover:bg-blue-600"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
