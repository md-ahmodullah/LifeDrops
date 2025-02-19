import axios from "axios";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo4 from "../../assets/logo/logo4.png";
import BtnLink from "../../Components/Reusable/BtnLink";
import SmBtn from "../../Components/Reusable/SmBtn";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useDonationRequest from "../../Hooks/useDonationRequest";
import { AuthContext } from "../../Provider/AuthProvider";
import CustomHelmet from "../../ReusableComponents/Helmet";
import deep from "/public/deep.json";

export default function DonorHome() {
  const [showBtn, setShowBtn] = useState(true);
  const { user } = useContext(AuthContext);
  const [myDonations, refetch] = useDonationRequest();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/donationRequest/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your request has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleDone = (id) => {
    const status = "done";
    const modified = { status };
    axios
      .patch(
        `https://life-drops-server-seven.vercel.app/donationRequest/${id}`,
        modified
      )
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your request is done!",
          showConfirmButton: false,
          timer: 2000,
        });
        setShowBtn(false);
        refetch();
      });
  };
  const handleCancel = (id) => {
    const status = "cancel";
    const modified = { status };
    axios
      .patch(
        `https://life-drops-server-seven.vercel.app/donationRequest/${id}`,
        modified
      )
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your request is cenceled!",
          showConfirmButton: false,
          timer: 2000,
        });
        setShowBtn(false);
        refetch();
      });
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const datee = new Date(date);
    return datee.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <CustomHelmet title={"Dashboard | Home"} />
      <section className="w-11/12 mx-auto py-5 md:py-8">
        <div className="">
          <h1 className="text-xl md:text-3xl font-bold text-center text-red-700 uppercase">
            Welcome, {user?.displayName}!
          </h1>
          <div className="flex items-center gap-2 pt-5 md:pt-8 px-2">
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
        </div>
        <div>
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
                    {myDonations.slice(0, 3).map((myDonation, i) => (
                      <tr key={myDonation._id}>
                        <th>{i + 1}</th>
                        <td>{myDonation.name}</td>
                        <td>{myDonation.address}</td>
                        <td>{formatDate(myDonation.date)}</td>
                        <td>{myDonation.blood}</td>
                        <td>
                          {myDonation.status === "inprogress" && showBtn ? (
                            <div className="space-x-1">
                              <SmBtn
                                handler={() => handleDone(myDonation._id)}
                                text={"Done"}
                                color={"bg-blue-600"}
                              />
                              <SmBtn
                                handler={() => handleCancel(myDonation._id)}
                                text={"Cancel"}
                                color={"bg-red-600"}
                              />
                            </div>
                          ) : (
                            myDonation?.status
                          )}
                        </td>
                        <td className="flex items-center gap-2 pb-4">
                          <Link to={`/details/${myDonation._id}`}>
                            <FaEye
                              className="text-base text-green-700"
                              title="View"
                            />
                          </Link>
                          <Link to={`/update/${myDonation._id}`}>
                            <FaEdit
                              className="text-base text-blue-600"
                              title="Edit"
                            />
                          </Link>
                          <button onClick={() => handleDelete(myDonation._id)}>
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
