import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
import logo4 from "../../assets/logo/logo4.png";
import Loading from "../../Components/Loading";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import CustomHelmet from "../../ReusableComponents/Helmet";

export default function AllUsers() {
  const [status, setStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const axiosSecure = useAxiosSecure();
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers", status],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-users", {
        params: { status: status },
      });
      return res.data;
    },
  });
  const handleBlock = (id) => {
    const status = "block";
    const modified = { status };
    axiosSecure.patch(`/users/${id}`, modified).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User is blocked!",
        showConfirmButton: false,
        timer: 2000,
      });
      refetch();
    });
  };
  const handleUnblock = (id) => {
    const status = "active";
    const modified = { status };
    axiosSecure.patch(`/users/${id}`, modified).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User is unblocked!",
        showConfirmButton: false,
        timer: 2000,
      });
      refetch();
    });
  };
  const handleVolunteer = (id) => {
    const role = "volunteer";
    const modified = { role };
    axiosSecure.patch(`/users/${id}`, modified).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User is Volunteer Now!",
        showConfirmButton: false,
        timer: 2000,
      });
      refetch();
    });
  };
  const handleAdmin = (id) => {
    const role = "Admin";
    const modified = { role };
    axiosSecure.patch(`/users/${id}`, modified).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User is Admin Now!",
        showConfirmButton: false,
        timer: 2000,
      });
      refetch();
    });
  };
  if (allUsers.length === 0) {
    return <Loading />;
  }

  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  const paginatedUsers = allUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
  };
  return (
    <>
      <CustomHelmet title={"Dashboard | All Users"} />
      <section className="font-poppins w-11/12 mx-auto">
        <div className="py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-4">
              <div>
                <img src={logo4} alt="Blood Logo" className="w-6 h-8" />
              </div>
              <div>
                <h1 className="text-base lg:text-2xl text-gray-700 font-bold">
                  All Users({allUsers.length})
                </h1>
              </div>
            </div>
            <form className="pr-8">
              <select
                className="select select-bordered w-full max-w-xs"
                onChange={handleStatusChange}
              >
                <option value="All">All</option>
                <option value="active">Active</option>
                <option value="block">Block</option>
              </select>
            </form>
          </div>
          <div className="overflow-x-auto overflow-y-hidden pt-6">
            <table className="table table-xs">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((userr, i) => (
                  <tr key={userr._id}>
                    <th className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={userr.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </th>
                    <td>{userr.name}</td>
                    <td>{userr.email}</td>
                    <td
                      className={
                        userr.role === "Admin"
                          ? "text-red-600 font-semibold"
                          : ""
                      }
                    >
                      {userr.role}
                    </td>
                    <td>{userr.status}</td>
                    <td>
                      <div className="dropdown dropdown-hover">
                        <BsThreeDotsVertical
                          tabIndex={0}
                          role="button"
                          className="text-black text-xl"
                        />
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow"
                        >
                          {userr.status === "active" ? (
                            <li>
                              <a onClick={() => handleBlock(userr._id)}>
                                Block
                              </a>
                            </li>
                          ) : (
                            <li>
                              <a onClick={() => handleUnblock(userr._id)}>
                                Unblock
                              </a>
                            </li>
                          )}
                          <li>
                            <a onClick={() => handleVolunteer(userr._id)}>
                              Volunteer
                            </a>
                          </li>
                          <li>
                            <a onClick={() => handleAdmin(userr._id)}>Admin</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {totalPages > 1 && (
          <div className="join flex items-center justify-center">
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
