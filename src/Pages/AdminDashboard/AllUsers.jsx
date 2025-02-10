import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
import logo4 from "../../assets/logo/logo4.png";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
export default function AllUsers() {
  const [status, setStatus] = useState("All");
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
  // useEffect(() => {
  //   axios
  //     .get(`https://life-drops-server-seven.vercel.app/users?status=${status}`)
  //     .then((res) => setFilterUser(res.data));
  // }, [status]);
  const handleBlock = (id) => {
    const status = "block";
    const modified = { status };
    axios
      .patch(`https://life-drops-server-seven.vercel.app/users/${id}`, modified)
      .then(() => {
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
    axios
      .patch(`https://life-drops-server-seven.vercel.app/users/${id}`, modified)
      .then(() => {
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
    axios
      .patch(`https://life-drops-server-seven.vercel.app/users/${id}`, modified)
      .then(() => {
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
    axios
      .patch(`https://life-drops-server-seven.vercel.app/users/${id}`, modified)
      .then(() => {
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

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
  };
  return (
    <>
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
          <div>
            <>
              <div className="overflow-x-auto pt-6">
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
                    {allUsers.map((userr, i) => (
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
                                <a onClick={() => handleAdmin(userr._id)}>
                                  Admin
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          </div>
        </div>
      </section>
    </>
  );
}
