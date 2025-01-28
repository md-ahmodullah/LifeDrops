import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo4 from "../../assets/logo/logo4.png";
export default function VolunteerDashboard() {
  const links = (
    <>
      <NavLink to="/dashboard/profile">
        <li>
          <a>Profile</a>
        </li>
      </NavLink>
      <NavLink to="/dashboard">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/dashboard/all-blood-donation-request">
        <li>
          <a>All Donation Request</a>
        </li>
      </NavLink>
      <NavLink to="/dashboard/content-management">
        <li>
          <a>Content Management</a>
        </li>
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
            <ul className="menu bg-red-950 text-white min-h-full w-60 font-medium">
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
                Volunteer Dashboard
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
