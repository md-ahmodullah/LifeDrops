import { useContext, useState } from "react";
import { IoChevronBackOutline, IoWarning } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useDistricts from "../../Hooks/useDistricts";
import useUpazila from "../../Hooks/useUpazila";
import { AuthContext } from "../../Provider/AuthProvider";
export default function CreateDonation() {
  const [districts] = useDistricts();
  const [upazilas] = useUpazila();
  const { user } = useContext(AuthContext);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const blood = form.blood.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const hospital = form.hospital.value;
    const address = form.address.value;
    const inputDate = form.date.value;
    const date = new Date(inputDate);
    const time = form.time.value;
    const message = form.message.value;
    const status = "pending";

    const request = {
      name,
      blood,
      district,
      upazila,
      hospital,
      address,
      date,
      time,
      message,
      status,
    };
    console.log(request);
  };

  return (
    <>
      <div className="bg-base-300 font-poppins">
        <div className="">
          <div className="px-5 md:pr-5 lg:px-8 space-y-5">
            <div className="space-y-2">
              <Link
                to="/"
                className="flex items-center gap-1 text-red-700 py-3"
              >
                <IoChevronBackOutline />
                Back Home
              </Link>
              <h1 className="text-xl lg:text-3xl font-bold text-center">
                Create Donation Request
              </h1>
              <p className="text-center text-red-600 font-medium text-sm lg:text-base">
                Every Drop Counts. Donate Blood, Save Lives
              </p>
            </div>
            <div className="border border-white shadow-md rounded-sm bg-base-200">
              <form
                onSubmit={handleSubmit}
                className="p-3 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4"
              >
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Requester Name
                    </span>
                  </label>
                  <input
                    type="text"
                    value={user?.displayName}
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Requester Email
                    </span>
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Recipient Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Recipient Name"
                    name="name"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Blood Group
                    </span>
                  </label>
                  <select
                    name="blood"
                    className="px-4 py-2 w-full outline-none border-none"
                  >
                    <option disabled selected>
                      Select
                    </option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Recipient District
                    </span>
                  </label>
                  <select
                    name="district"
                    className="px-4 py-2 w-full outline-none border-none"
                  >
                    <option disabled selected>
                      Select
                    </option>
                    {districts.map((district, i) => (
                      <option key={i}>{district?.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Recipient Upazila
                    </span>
                  </label>
                  <select
                    name="upazila"
                    className="px-4 py-2 w-full outline-none border-none"
                  >
                    <option disabled selected>
                      Select
                    </option>
                    {upazilas.map((upazila, i) => (
                      <option key={i}>{upazila?.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Hospital Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Hospital Name"
                    name="hospital"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Full Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ibne Fulan Rd, Dhaka"
                    name="address"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Donation Date
                    </span>
                  </label>
                  <input
                    type="date"
                    placeholder="e.g. dd/mm/yyyy"
                    name="date"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-gray-600 placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Donation Time
                    </span>
                  </label>
                  <input
                    type="time"
                    placeholder="Time"
                    name="time"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-gray-600 placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Request Message
                    </span>
                  </label>
                  <textarea
                    className="w-full h-24 outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    placeholder="Why do you need blood? Write something..."
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="lg:col-span-2">
                  <div>
                    {errMessage && (
                      <span className="text-xs text-red-500 flex items-center gap-1 pb-3 font-medium">
                        <IoWarning className="text-2xl" /> {errMessage}
                      </span>
                    )}
                  </div>
                  <button className="w-full btn bg-red-600 text-white font-bold hover:bg-blue-600">
                    Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
