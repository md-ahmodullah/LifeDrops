import { useContext, useState } from "react";
import useDistricts from "../../Hooks/useDistricts";
import useUpazila from "../../Hooks/useUpazila";
import { AuthContext } from "../../Provider/AuthProvider";
import avatar from "../../assets/images/avatar.png";
export default function Profile() {
  const { user } = useContext(AuthContext);
  const [districts] = useDistricts();
  const [upazilas] = useUpazila();
  const [isEditable, setIsEditable] = useState(false);
  const handleEdit = () => {
    setIsEditable(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditable(false);
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const blood = form.blood.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const updateInfo = { name, photoURL, email, blood, district, upazila };
    console.log(updateInfo);
  };

  return (
    <>
      <section className="bg-base-300 flex justify-center items-start min-h-screen py-4 lg:pt-12">
        <div className="rounded-md border-2 border-red-400 p-2 w-11/12 md:w-4/5 lg:w-3/5 mx-auto bg-red-200">
          <div className="bg-gradient-to-t from-red-900 to-red-700 rounded-md min-h-80">
            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="pb-2">
                <img
                  src={user?.photoURL || avatar}
                  alt=""
                  className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                />
              </div>
              <p className="text-xs font-normal text-gray-200">{user?.email}</p>
              <h1 className="text-xl md:text-2xl font-bold text-gray-200 uppercase">
                {user?.displayName}
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
            {/* <div className="px-5 pt-2 pb-8">
              <p className="text-base font-normal text-gray-200">
                <span className="font-medium text-gray-300">Blood Group: </span>{" "}
                {user?.displayName}
              </p>
              <p className="text-base font-normal text-gray-200">
                <span className="font-medium text-gray-300">Districts: </span>{" "}
                {user?.displayName}
              </p>
              <p className="text-base font-normal text-gray-200">
                <span className="font-medium text-gray-300">Upazila: </span>{" "}
                {user?.email}
              </p>
            </div> */}
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
                      defaultValue="Md Ahmodullah"
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
                      value="mdahmodullah@gmail.com"
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
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      defaultValue="hfhfhfh"
                      className="w-full outline-none rounded border px-4 py-2 bg-gray-200 border-none text-black placeholder:text-gray-500 focus:border-red-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Blood Group
                      </span>
                    </label>
                    <select
                      name="blood"
                      className="px-4 py-2 w-full outline-none border-none rounded bg-gray-200"
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
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        District
                      </span>
                    </label>
                    <select
                      name="district"
                      className="px-4 py-2 w-full outline-none border-none rounded bg-gray-200"
                      required
                    >
                      <option value="">{"will set"}</option>
                      {districts.map((district, i) => (
                        <option key={i} value={district?.name}>
                          {district?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-white font-semibold">
                        Upazila
                      </span>
                    </label>
                    <select
                      name="upazila"
                      className="px-4 py-2 w-full outline-none border-none rounded bg-gray-200"
                      required
                    >
                      <option value="">{"will set"}</option>
                      {upazilas.map((upazila, i) => (
                        <option key={i} value={upazila?.name}>
                          {upazila?.name}
                        </option>
                      ))}
                    </select>
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
