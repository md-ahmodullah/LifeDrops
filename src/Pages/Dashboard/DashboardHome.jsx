import axios from "axios";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo4 from "../../assets/logo/logo4.png";
import BtnLink from "../../Components/Reusable/BtnLink";
import SmBtn from "../../Components/Reusable/SmBtn";
import { AuthContext } from "../../Provider/AuthProvider";
import deep from "/public/deep.json";
export default function DashboardHome() {
  const [myDonations, setMyDonations] = useState([]);
  const [showBtn, setShowBtn] = useState(true);
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
        fetch(`http://localhost:5000/donationRequest/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your request has been deleted.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "You are not authorized to delete this assignment.",
                icon: "error",
              });
            }
          });
      }
    });
  };

  const handleDone = (id) => {
    const status = "done";
    const modified = { status };
    console.log(modified);
    console.log(id);
    axios
      .patch(`http://localhost:5000/donationRequest/${id}`, modified)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your request is done!",
          showConfirmButton: false,
          timer: 2000,
        });
        setShowBtn(false);
      });
  };
  const handleCancel = (id) => {
    const status = "cancel";
    const modified = { status };
    console.log(modified);
    console.log(id);
    axios
      .patch(`http://localhost:5000/donationRequest/${id}`, modified)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your request is cenceled!",
          showConfirmButton: false,
          timer: 2000,
        });
        setShowBtn(false);
      });
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const datee = new Date(date);
    return datee.toLocaleDateString("en-US", options);
  };
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
                            <Link to="/">
                              <FaEdit
                                className="text-base text-blue-600"
                                title="Edit"
                              />
                            </Link>
                            <button
                              onClick={() => handleDelete(myDonation._id)}
                            >
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
        </div>
      </section>
    </>
  );
}
