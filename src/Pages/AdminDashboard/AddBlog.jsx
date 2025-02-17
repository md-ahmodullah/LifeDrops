import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import JoditEditorContent from "../../Components/JoditEditor";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useDistricts from "../../Hooks/useDistricts";
import useUpazila from "../../Hooks/useUpazila";
import useUsers from "../../Hooks/useUsers";
import { AuthContext } from "../../Provider/AuthProvider";
export default function AddBlog() {
  const [content, setContent] = useState("");
  const [districts] = useDistricts();
  const [upazilas] = useUpazila();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [users] = useUsers();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.value;
    const status = "draft";

    const blog = {
      title,
      thumbnail,
      content,
      status,
    };

    axiosSecure
      .post("https://life-drops-server-seven.vercel.app/blogs", blog)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your blog has been created!",
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
        setContent("");
      });
  };
  return (
    <div className="bg-base-300 font-poppins min-h-screen py-6">
      <div className="space-y-1 lg:pt-5 w-11/12 md:w-3/4 mx-auto">
        <h1 className="text-2xl font-bold pb-5">Add Blog</h1>
        <div className="border border-white shadow-md rounded-sm bg-base-200">
          <form onSubmit={handleSubmit} className="p-3 lg:p-6">
            <div>
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Thumbnail Image
                </span>
              </label>
              <input
                type="text"
                placeholder="Thumbnail Image"
                name="thumbnail"
                className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                required
              />
            </div>
            <div className="py-2">
              <label className="label">
                <span className="label-text text-black font-semibold">
                  Content
                </span>
              </label>
              <JoditEditorContent content={content} setContent={setContent} />
            </div>
            <button className="w-full btn bg-red-600 text-white font-bold hover:bg-blue-600">
              Create Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
