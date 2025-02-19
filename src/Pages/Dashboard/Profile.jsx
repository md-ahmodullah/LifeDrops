import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import avatar from "../../assets/images/avatar.png";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useDistricts from "../../Hooks/useDistricts";
import useUpazila from "../../Hooks/useUpazila";
import useUsers from "../../Hooks/useUsers";
import CustomHelmet from "../../ReusableComponents/Helmet";
const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
export default function Profile() {
  const [logginUser, setLogginUser] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [districts] = useDistricts();
  const [upazilas] = useUpazila();
  const navigate = useNavigate();
  const [users, refetch] = useUsers();
  const id = users?._id;
  const axiosSecure = useAxiosSecure();

  const handleEdit = () => {
    setIsEditable(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditable(false);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const blood = form.blood.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const photoFile = form.photo.files[0];
    const formData = new FormData();
    formData.append("image", photoFile);
    if (!photoFile) {
      setErrMessage("Please upload a photo.");
      return;
    }
    fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const photoURL = data.data.display_url;
        const updateUserInfo = { name, photoURL, blood, district, upazila };
        axiosSecure.put(`/users/${id}`, updateUserInfo).then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your profile has been updated!",
            showConfirmButton: false,
            timer: 2000,
          });
          refetch();
        });
      });
  };
  return (
    <>
      <CustomHelmet title={"Dashboard | Profile"} />
      <section className="bg-base-300 flex justify-center items-start min-h-screen py-4 lg:pt-12">
        <div className="rounded-md border-2 border-red-400 p-2 w-11/12 md:w-4/5 lg:w-3/5 mx-auto bg-red-200">
          <div className="bg-gradient-to-t from-red-900 to-red-700 rounded-md min-h-80">
            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="pb-2">
                <img
                  src={users?.photoURL || avatar}
                  alt=""
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                />
              </div>
              <p className="text-xs font-normal text-gray-200">
                {users?.email}
              </p>
              <h1 className="text-xl md:text-2xl font-bold text-gray-200 uppercase">
                {users?.name}
              </h1>
            </div>
            <div className="px-5">
              <div className="flex items-center justify-between pb-1 pt-2">
                <h1 className="text-lg md:text-xl font-medium text-gray-200">
                  Details Information
                </h1>
                {!isEditable ? (
                  <button
                    onClick={handleEdit}
                    className="rounded-md py-1.5 px-3 bg-red-600 border-none font-medium text-white"
                  >
                    Edit
                  </button>
                ) : (
                  ""
                )}
              </div>
              <hr />
            </div>
            <div className="px-5 pt-2 pb-8">
              <fieldset disabled={!isEditable}>
                <form
                  onSubmit={handleSubmit}
                  className="px-3 lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Your Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      defaultValue={users?.name}
                      className="w-full outline-none rounded border px-4 py-2 bg-gray-200 border-none text-black placeholder:text-gray-500 focus:border-red-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Your Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={users?.email}
                      className="w-full outline-none rounded border px-4 py-2 bg-gray-200 border-none text-black placeholder:text-gray-500 focus:border-red-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Photo URL
                      </span>
                    </label>
                    {/* <input
                      type="text"
                      name="photoURL"
                      placeholder="Photo URL"
                      defaultValue={users?.photoURL}
                      className="w-full outline-none rounded border px-4 py-2 bg-gray-200 border-none text-black placeholder:text-gray-500 focus:border-red-200"
                      required
                    /> */}
                    <input
                      name="photo"
                      type="file"
                      className="file-input file-input-bordered w-full bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Blood Group
                      </span>
                    </label>
                    {users.blood && (
                      <select
                        name="blood"
                        className="px-4 py-2 w-full outline-none border-none rounded bg-gray-200"
                        defaultValue={users?.blood}
                        required
                      >
                        <option value="">{"will set"}</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="A-">A-</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    )}
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        District
                      </span>
                    </label>
                    {users?.district && upazilas.length > 0 && (
                      <select
                        name="district"
                        className="px-4 py-2 w-full outline-none border-none rounded bg-gray-200"
                        defaultValue={users?.district}
                        required
                      >
                        <option value="">{"will set"}</option>
                        {districts.map((district, i) => (
                          <option key={i} value={district?.name}>
                            {district?.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Upazila
                      </span>
                    </label>
                    {users.upazila && upazilas.length > 0 && (
                      <select
                        name="upazila"
                        className="px-4 py-2 w-full outline-none border-none rounded bg-gray-200"
                        defaultValue={users?.upazila}
                        required
                      >
                        <option value="">{"will set"}</option>
                        {upazilas.map((upazila, i) => (
                          <option key={i} value={upazila?.name}>
                            {upazila?.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  {isEditable ? (
                    <div>
                      <button className="btn bg-red-600 text-white border-none font-medium hover:bg-blue-600">
                        Save
                      </button>
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
