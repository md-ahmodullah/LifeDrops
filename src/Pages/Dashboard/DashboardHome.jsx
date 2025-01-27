import axios from "axios";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import logo4 from "../../assets/logo/logo4.png";
import BtnLink from "../../Components/Reusable/BtnLink";
import SmBtn from "../../Components/Reusable/SmBtn";
import { AuthContext } from "../../Provider/AuthProvider";
import deep from "/public/deep.json";
export default function DashboardHome() {
  const [myDonations, setMyDonations] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const userEmail = user?.email;
    if (userEmail) {
      axios
        .get("http://localhost:5000/donationRequest", {
          params: { requesterEmail: userEmail },
        })
        .then((res) => setMyDonations(res.data));
    }
  }, [user]);

  const handleDone = () => {
    console.log("helo");
  };
  const handleCancel = () => {
    console.log("helo");
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const datee = new Date(date);
    return datee.toLocaleDateString("en-US", options);
  };
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
          {myDonations.length !== 0 ? (
            <>
              <div className="overflow-x-auto pt-6">
                <table className="table table-xs">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Group</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myDonations.slice(0, 3).map((myDonation) => (
                      <tr key={myDonation._id}>
                        <th>1</th>
                        <td>{myDonation.name}</td>
                        <td>{myDonation.address}</td>
                        <td>{formatDate(myDonation.date)}</td>
                        <td>{myDonation.blood}</td>
                        <td>
                          {myDonation.status === "pending" ? (
                            <div className="space-x-1">
                              <SmBtn
                                handler={handleDone}
                                text={"Done"}
                                color={"bg-blue-600"}
                              />
                              <SmBtn
                                handler={handleCancel}
                                text={"Cancel"}
                                color={"bg-red-600"}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </td>
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
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-center pt-12">
                <BtnLink
                  redirectLink={"/dashboard/my-donation-requests"}
                  action={"View My All Request"}
                />
              </div>
            </>
          ) : (
            <div className="min-h-[400px] flex flex-col items-center justify-center">
              <h1 className="text-xl font-semibold pb-3 pt-10 md:pt-0">
                You haven't any donation request
              </h1>
              <div className="w-10/12 md:w-2/5 lg:w-1/4 mx-auto">
                <Lottie animationData={deep} loop={true} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
