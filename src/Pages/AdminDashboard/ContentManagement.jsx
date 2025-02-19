import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { MdDelete, MdLibraryAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import content from "../../assets/images/content-management.png";
import useAdmin from "../../Hooks/useAdmin";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useUsers from "../../Hooks/useUsers";
import CustomHelmet from "../../ReusableComponents/Helmet";
export default function ContentManagement() {
  const [status, setStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const [users] = useUsers();
  const [isAdmin] = useAdmin();
  const axiosSecure = useAxiosSecure();

  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs", status],
    queryFn: async () => {
      const res = await axios.get(
        "https://life-drops-server-seven.vercel.app/blogs",
        {
          params: { status: status },
        }
      );
      return res.data;
    },
  });
  const handlePublish = (id) => {
    const status = "published";
    const modified = { status };
    axiosSecure.patch(`/blogs/${id}`, modified).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Blog is published now!",
        showConfirmButton: false,
        timer: 2000,
      });
      refetch();
    });
  };
  const handleUnpublish = (id) => {
    const status = "draft";
    const modified = { status };
    axiosSecure.patch(`/blogs/${id}`, modified).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Blog is unpublished!",
        showConfirmButton: false,
        timer: 2000,
      });
      refetch();
    });
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
        axiosSecure.delete(`/blogs/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your blog has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
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
      <CustomHelmet title={"Dashboard | Content Management"} />
      <section className="w-full md:w-11/12 mx-auto py-6 font-poppins">
        <div className="flex items-center justify-between gap-4 md:gap-0">
          <div className="flex items-center gap-2 px-4">
            <div>
              <img src={content} alt="blog Logo" className="w-8 md:w-12" />
            </div>
            <div>
              <h1 className="text-base lg:text-2xl text-gray-700 font-bold">
                Content Management
              </h1>
              <p className="text-xs text-red-500 font-medium w-11/12">
                Read More, Learn More
              </p>
            </div>
          </div>
          <div className="mr-4 border border-gray-300 px-2 md:px-4 py-3 rounded shadow bg-base-200">
            <Link
              to="/dashboard/content-management/add-blog"
              className={`${
                isAdmin
                  ? "flex items-center gap-1.5 text-base md:text-xl font-bold"
                  : "pointer-events-none flex items-center gap-1.5 text-gray-400 md:text-xl font-bold"
              } `}
            >
              <MdLibraryAdd />
              Add Blog
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 ">
          <h1 className="text-2xl font-bold px-3">All Blogs({blogs.length})</h1>
          <form className="pr-8">
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={handleStatusChange}
            >
              <option value="All">All</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </form>
        </div>
        <div className="overflow-x-auto py-5">
          <table className="table">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Status</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginatedBlogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={blog.thumbnail}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{blog.title}</td>
                  <td>{blog.status}</td>
                  {users?.role === "Admin" ? (
                    <>
                      <th>
                        {blog.status === "draft" ? (
                          <button
                            onClick={() => handlePublish(blog._id)}
                            className="btn bg-blue-600 btn-sm text-white hover:bg-green-500"
                          >
                            Publish
                          </button>
                        ) : (
                          <button
                            onClick={() => handleUnpublish(blog._id)}
                            className="btn bg-red-600 btn-sm text-white hover:bg-yellow-500"
                          >
                            Unpublish
                          </button>
                        )}
                      </th>
                      <th>
                        <button>
                          <MdDelete
                            onClick={() => handleDelete(blog._id)}
                            className="text-2xl text-red-600"
                            title="Delete"
                          />
                        </button>
                      </th>
                    </>
                  ) : (
                    <>
                      <td className="text-red-600">Not Allowed</td>
                      <td></td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
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
