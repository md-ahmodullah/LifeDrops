import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import logo4 from "../../assets/logo/logo4.png";
import Loading from "../../Components/Loading";
import SmBtn from "../../Components/Reusable/SmBtn";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUsers from "../../Hooks/useUsers";
import CustomHelmet from "../../ReusableComponents/Helmet";
import deep from "/public/deep.json";
export default function AllDonationRequest() {
  const [showBtn, setShowBtn] = useState(true);
  const [status, setStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const donationsPerPage = 10;
  const [users] = useUsers();
  const axiosSecure = useAxiosSecure();

  const { data: allDonations = [], refetch } = useQuery({
    queryKey: ["allDonations", status],
    queryFn: async () => {
      const res = await axiosSecure.get(`/donationRequest?status=${status}`);
      return res.data;
    },
  });

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
  };

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
    axiosSecure.patch(`/donationRequest/${id}`, modified).then(() => {
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
    axiosSecure.patch(`donationRequest/${id}`, modified).then(() => {
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

  if (allDonations.length === 0) {
    return <Loading />;
  }
  const totalPages = Math.ceil(allDonations.length / donationsPerPage);

  const paginatedDonation = allDonations.slice(
    (currentPage - 1) * donationsPerPage,
    currentPage * donationsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const datee = new Date(date);
    return datee.toLocaleDateString("en-US", options);
  };
  return (
    <>
      <CustomHelmet title={"Dashboard | All Donation Request"} />
      <section className="font-poppins w-11/12 mx-auto">
        <div className="py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-4">
              <div>
                <img src={logo4} alt="Blood Logo" className="w-8 h-11" />
              </div>
              <div>
                <h1 className="text-base lg:text-2xl text-gray-700 font-bold">
                  All Donation Request({allDonations.length})
                </h1>
                <p className="text-xs text-red-500 font-medium w-11/12">
                  Every Drop Counts. Donate Blood, Save Lives
                </p>
              </div>
            </div>
            <div className="pr-8">
              <select
                className="select select-bordered w-full max-w-xs"
                onChange={handleStatusChange}
              >
                <option value="All">All</option>
                <option value="pending">Pending</option>
                <option value="inprogress">Inprogress</option>
                <option value="done">Done</option>
                <option value="cancel">Canceled</option>
              </select>
            </div>
          </div>
          <div>
            {allDonations.length !== 0 ? (
              <div className="overflow-x-auto pt-6">
                <table className="table table-auto w-full">
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
                    {paginatedDonation.map((myDonation, i) => (
                      <tr key={myDonation._id}>
                        <th>{i + 1}</th>
                        <td>{myDonation.name}</td>
                        <td>{myDonation.address}</td>
                        <td className="min-w-[150px] whitespace-nowrap">
                          {formatDate(myDonation.date)}
                        </td>
                        <td>{myDonation.blood}</td>
                        <td className="min-w-[150px] whitespace-nowrap">
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
                        {users?.role === "Admin" ? (
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
                            <button
                              onClick={() => handleDelete(myDonation._id)}
                            >
                              <MdDelete
                                className="text-base text-red-600"
                                title="Delete"
                              />
                            </button>
                          </td>
                        ) : (
                          <td className="text-red-600 min-w-[150px] whitespace-nowrap">
                            Not Allowed
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
        {totalPages > 1 && (
          <div className="join flex items-center justify-center pt-3">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`join-item btn ${
                  currentPage === index + 1 ? "bg-red-700 text-white" : ""
                } `}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
