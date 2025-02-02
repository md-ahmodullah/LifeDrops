import { useState } from "react";
import logo4 from "../../assets/logo/logo4.png";
import useAllUsers from "../../Hooks/useAllUsers";
export default function AllUsers() {
  const [status, setStatus] = useState("All");
  const [users] = useAllUsers();

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
                  All Users({users.length})
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
                    {users.map((userr, i) => (
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
                        <td>{userr.role}</td>
                        <td>{userr.status}</td>
                        <td className="flex items-center gap-2 pb-4">
                          <button className="btn btn-sm bg-red-600 border-none text-white hover:btn-ghost">
                            Block
                          </button>
                          <button className="btn btn-sm bg-green-500 border-none text-white hover:btn-ghost">
                            Volunteer
                          </button>
                          <button className="btn btn-sm bg-blue-600 border-none text-white hover:btn-ghost">
                            Admin
                          </button>
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
