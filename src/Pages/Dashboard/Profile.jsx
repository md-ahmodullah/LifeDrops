import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import avatar from "../../assets/images/avatar.png";
import Loading from "../../Components/Loading";
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
  const role = users?.role;

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
  console.log(users, typeof users);
  if (!users.role) {
    return <Loading />;
  }

  return (
    <>
      <CustomHelmet title={"Dashboard | Profile"} />
      <section className="flex justify-center items-start min-h-screen py-20 lg:pt-24">
        <div className="w-11/12 md:w-4/5 lg:w-1/2 mx-auto">
          <div className="bg-[url('https://i.ibb.co.com/WpGDGRhY/profile-bg.jpg')] bg-cover bg-center bg-no-repeat bg-black bg-blend-overlay bg-opacity-25 rounded-md min-h-80 relative">
            <div className="pb-2 absolute -top-16 left-32 md:left-60 lg:left-60">
              <img
                src={users?.photoURL || avatar}
                alt=""
                className="w-32 h-32 object-cover rounded-full border-8 border-white"
              />
            </div>
            <div className="flex flex-col items-center gap-1 pt-20">
              <p className="text-xs font-normal text-gray-200">
                {users?.email}
              </p>
              <h1 className="text-xl md:text-2xl font-bold text-gray-200 uppercase">
                {users?.name}{" "}
                <sup className="text-xs font-normal text-blue-300 capitalize">
                  [{role}]
                </sup>
              </h1>
            </div>
            <div className="px-4 lg:px-7">
              <div className="flex items-end justify-between pb-1 pt-2">
                <h1 className="text-base md:text-lg font-semibold text-white">
                  Details Information
                </h1>
                {!isEditable ? (
                  <button
                    onClick={handleEdit}
                    className="rounded-md py-1 px-3 bg-transparent border border-white text-sm font-medium text-white hover:border-blue-400 hover:text-blue-400"
                  >
                    Edit
                  </button>
                ) : (
                  ""
                )}
              </div>
              <hr />
            </div>
            <div className="pt-2 pb-8">
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
                      className="w-full outline-none rounded border px-4 py-2 bg-transparent border-gray-200 text-white placeholder:text-gray-500 focus:border-red-200"
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
                      className="w-full outline-none rounded border px-4 py-2 bg-transparent border-gray-200 text-white placeholder:text-gray-500 focus:border-red-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Photo URL
                      </span>
                    </label>

                    <input
                      name="photo"
                      type="file"
                      className="file-input file-input-bordered w-full bg-transparent text-white border border-white"
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
                        className="px-4 py-2 w-full rounded bg-transparent border border-gray-200 text-white outline-none"
                        defaultValue={users?.blood}
                        required
                      >
                        <option className="text-black" value="A+">
                          A+
                        </option>
                        <option className="text-black" value="B+">
                          B+
                        </option>
                        <option className="text-black" value="A-">
                          A-
                        </option>
                        <option className="text-black" value="B-">
                          B-
                        </option>
                        <option className="text-black" value="AB+">
                          AB+
                        </option>
                        <option className="text-black" value="AB-">
                          AB-
                        </option>
                        <option className="text-black" value="O+">
                          O+
                        </option>
                        <option className="text-black" value="O-">
                          O-
                        </option>
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
                        className="px-4 py-2 w-full border-2 border-white rounded bg-transparent text-white"
                        defaultValue={users?.district}
                        required
                      >
                        {districts.map((district, i) => (
                          <option
                            className="text-black"
                            key={i}
                            value={district?.name}
                          >
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
                        className="px-4 py-2 w-full border-2 border-white rounded bg-transparent text-white"
                        defaultValue={users?.upazila}
                        required
                      >
                        {upazilas.map((upazila, i) => (
                          <option
                            className="text-black"
                            key={i}
                            value={upazila?.name}
                          >
                            {upazila?.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  {isEditable ? (
                    <div>
                      <button className="btn btn-outline text-white font-medium hover:btn-primary">
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
