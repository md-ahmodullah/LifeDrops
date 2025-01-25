import { Link, NavLink } from "react-router-dom";
import logo4 from "../assets/logo/logo4.png";
export default function Navbar() {
  const links = (
    <>
      <NavLink>
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>Donation Requests</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>Blogs</a>
        </li>
      </NavLink>
      <NavLink>
        <li>
          <a>Funding</a>
        </li>
      </NavLink>
    </>
  );

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
              className="menu menu-sm dropdown-content bg-base-100 backdrop-blur-md bg-opacity-65 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo4} alt="Blood Logo" className="w-7 h-9" />
            <Link className="text-2xl md:text-3xl font-bold text-red-600">
              <span className="text-blue-700">Life</span>Drops
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Login</button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 backdrop-blur-md bg-opacity-65 rounded-box z-[1] mt-3 p-2 shadow font-semibold"
            >
              <NavLink>
                <li>
                  <a>Dashboard</a>
                </li>
              </NavLink>
              <li>
                <a>Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
