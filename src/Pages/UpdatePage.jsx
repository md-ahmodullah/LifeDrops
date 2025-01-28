import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoWarning } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useDistricts from "../Hooks/useDistricts";
import useUpazila from "../Hooks/useUpazila";
import { AuthContext } from "../Provider/AuthProvider";
import createDonation from "../assets/images/create.png";
import createDonation2 from "../assets/images/create2.png";
export default function UpdatePage() {
  const [updateRequest, setUpdateRequest] = useState([]);
  const [errMessage, setErrMessage] = useState("");
  const [date, setDate] = useState(updateRequest.date || "");
  const [time, setTime] = useState(updateRequest.time || "");
  useEffect(() => {
    if (updateRequest) {
      const formattedDate = updateRequest.date
        ? new Date(updateRequest.date).toISOString().split("T")[0]
        : "";
      const formattedTime = updateRequest.time
        ? new Date(`1970-01-01T${updateRequest.time}`).toLocaleTimeString(
            "en-GB",
            {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }
          )
        : "";

      setDate(formattedDate);
      setTime(formattedTime);
    }
  }, [updateRequest]);
  const [districts] = useDistricts();
  const [upazilas] = useUpazila();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/donationRequest/${id}`)
      .then((res) => setUpdateRequest(res.data));
  }, []);

  const handleUpdate = (e) => {
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

    const updatedRequest = {
      name,
      blood,
      district,
      upazila,
      hospital,
      address,
      date,
      time,
      message,
    };

    fetch(`http://localhost:5000/donationRequest/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your request has been updated!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/dashboard");
      });
  };

  return (
    <>
      <div className="bg-base-300 font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-0 pb-8">
          <div className="px-5 md:pr-5 lg:px-8 space-y-5 lg:col-span-2 order-2 lg:order-1">
            <div className="space-y-1 lg:pt-5">
              <h1 className="text-xl lg:text-2xl font-bold text-center">
                Update Donation Request
              </h1>
              <p className="text-center text-red-600 font-medium text-xs lg:text-sm">
                Every Drop Counts. Donate Blood, Save Lives
              </p>
            </div>
            <div className="border border-white shadow-md rounded-sm bg-base-200">
              <form
                onSubmit={handleUpdate}
                className="p-3 lg:p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
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
                    defaultValue={updateRequest.name}
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
                  {updateRequest?.blood && (
                    <select
                      name="blood"
                      defaultValue={updateRequest.blood}
                      className="px-4 py-2 w-full outline-none border-none"
                      required
                    >
                      <option value="">Select</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
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
                    <span className="label-text text-red-700 font-semibold">
                      Recipient District
                    </span>
                  </label>
                  {updateRequest?.district && (
                    <select
                      name="district"
                      defaultValue={updateRequest.district}
                      className="px-4 py-2 w-full outline-none border-none"
                      required
                    >
                      <option value="">Select</option>
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
                    <span className="label-text text-red-700 font-semibold">
                      Recipient Upazila
                    </span>
                  </label>
                  {updateRequest?.upazila && (
                    <select
                      name="upazila"
                      defaultValue={updateRequest.upazila}
                      className="px-4 py-2 w-full outline-none border-none"
                      required
                    >
                      <option value="">Select</option>
                      {upazilas.map((upazila, i) => (
                        <option key={i} value={upazila?.name}>
                          {upazila?.name}
                        </option>
                      ))}
                    </select>
                  )}
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
                    defaultValue={updateRequest.hospital}
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
                    defaultValue={updateRequest.address}
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
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
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
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-gray-600 placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Request Message
                    </span>
                  </label>
                  <textarea
                    className="w-full h-24 outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    placeholder="Why do you need blood? Write something..."
                    name="message"
                    defaultValue={updateRequest.message}
                    required
                  ></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <div>
                    {errMessage && (
                      <span className="text-xs text-red-500 flex items-center gap-1 pb-3 font-medium">
                        <IoWarning className="text-2xl" /> {errMessage}
                      </span>
                    )}
                  </div>
                  <button className="w-full btn bg-red-600 text-white font-bold hover:bg-blue-600">
                    Update Request
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="py-2 flex items-center justify-center lg:flex-col order-1 lg:order-2">
            <img src={createDonation2} alt="" className="w-1/4 lg:w-2/3" />
            <img src={createDonation} alt="" className="w-1/4 lg:w-2/3" />
          </div>
        </div>
      </div>
    </>
  );
}
