import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import logo4 from "../../assets/logo/logo4.png";
import BtnLink from "../../Components/Reusable/BtnLink";
import { AuthContext } from "../../Provider/AuthProvider";
export default function DashboardHome() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <section>
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
          <div className="overflow-x-auto pt-6">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Group</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Littel, Schaden and Vandervort</td>
                  <td>Canada</td>
                  <td>12/16/2020</td>
                  <td>Blue</td>
                  <td className="flex items-center gap-2 pb-4">
                    <Link to="/">
                      <FaEye
                        className="text-base text-green-700"
                        title="View"
                      />
                    </Link>
                    <Link to="/">
                      <FaEdit
                        className="text-base text-blue-600"
                        title="Edit"
                      />
                    </Link>
                    <button>
                      <MdDelete
                        className="text-base text-red-600"
                        title="Delete"
                      />
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Zemlak, Daniel and Leannon</td>
                  <td>United States</td>
                  <td>12/5/2020</td>
                  <td>Purple</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Carroll Group</td>
                  <td>China</td>
                  <td>8/15/2020</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center pt-12">
            <BtnLink
              redirectLink={"/dashboard/my-donation-requests"}
              action={"View My All Request"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
