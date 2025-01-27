import Lottie from "lottie-react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import logo4 from "../../assets/logo/logo4.png";
import SmBtn from "../../Components/Reusable/SmBtn";
import useDonationRequest from "../../Hooks/useDonationRequest";
import deep from "/public/deep.json";
export default function MyDonationRequest() {
  const [myDonations] = useDonationRequest("pending");
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
      <section className="font-poppins">
        <div className="py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-4">
              <div>
                <img src={logo4} alt="Blood Logo" className="w-8 h-11" />
              </div>
              <div>
                <h1 className="text-base lg:text-2xl text-gray-700 font-bold">
                  Your All Donation Request({myDonations.length})
                </h1>
                <p className="text-xs text-red-500 font-medium w-11/12">
                  Every Drop Counts. Donate Blood, Save Lives
                </p>
              </div>
            </div>
            <div className="pr-8">
              <select
                className="select select-bordered w-full max-w-xs"
                // onChange={handleDifficultyChange}
              >
                <option>All</option>
                <option>Pending</option>
                <option>Inprogress</option>
                <option>Done</option>
                <option>Canceled</option>
              </select>
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
                    {myDonations.map((myDonation, i) => (
                      <tr key={myDonation._id}>
                        <th>{i + 1}</th>
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
