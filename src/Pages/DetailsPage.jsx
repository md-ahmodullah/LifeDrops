import axios from "axios";
import Lottie from "lottie-react";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import avatar from "../assets/images/avatar.png";
import BackButton from "../Components/Reusable/BackButton";
import { AuthContext } from "../Provider/AuthProvider";
import CustomHelmet from "../ReusableComponents/Helmet";
import deep from "/public/deep.json";
export default function DetailsPage() {
  const [details, setDetails] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location?.state?.from?.pathname || "/dashboard";
  useEffect(() => {
    axios
      .get(`https://life-drops-server-seven.vercel.app/donationRequest/${id}`)
      .then((res) => setDetails(res.data));
  }, []);
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const datee = new Date(date);
    return datee.toLocaleDateString("en-US", options);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const status = "inprogress";
    const modified = { status };
    console.log(modified);
    axios
      .patch(
        `https://life-drops-server-seven.vercel.app/donationRequest/${id}`,
        modified
      )
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your request is inprogress!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(redirect, { replace: true });
      });
    document.getElementById("my_modal_5").close();
  };
  return (
    <>
      <CustomHelmet title={"LifeDrops | Request Details"} />
      <section className="bg-[url('https://i.ibb.co.com/Wn48j1L/searchbg.jpg')] bg-cover bg-center bg-no-repeat bg-red-900 bg-blend-multiply bg-opacity-90 mb-1 py-6 md:py-6">
        <div className="w-11/12 mx-auto">
          <BackButton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0 lg:gap-10 w-11/12 mx-auto items-center">
          <div className="lg:col-span-4 w-full lg:w-3/4 mx-auto">
            <div>
              <div className="p-2 w-11/12 mx-auto">
                <div className="bg-red-200 backdrop-blur-md bg-opacity-10 rounded-md min-h-80 border border-red-200">
                  <div className="flex flex-col items-center gap-1 pt-3">
                    <div className="py-2">
                      <img
                        src={details.photoURL || avatar}
                        alt=""
                        className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                      />
                    </div>
                    <p className="text-xs font-normal text-gray-200">
                      Requester
                    </p>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-200 uppercase">
                      {details?.requesterName}
                    </h1>
                  </div>
                  <div className="px-5">
                    <div className="flex items-center justify-between pb-1 pt-2">
                      <h1 className="text-base md:text-lg font-medium text-gray-200">
                        Donation Details
                      </h1>
                    </div>
                    <hr />
                  </div>
                  <div className="px-5 pt-2 pb-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <span className="label-text text-white font-semibold">
                          Reciepent Name : {details.name}
                        </span>
                      </div>
                      <div>
                        <span className="label-text text-white font-semibold">
                          Reciepent Address : {details.address}
                        </span>
                      </div>
                      <div>
                        <span className="label-text text-white font-semibold">
                          Hospital : {details.hospital}
                        </span>
                      </div>
                      <div>
                        <span className="label-text text-white font-semibold">
                          Blood Group : {details.blood}
                        </span>
                      </div>
                      <div>
                        <span className="label-text text-white font-semibold">
                          District : {details.district}
                        </span>
                      </div>
                      <div>
                        <span className="label-text text-white font-semibold">
                          Upazila : {details.upazila}
                        </span>
                      </div>
                      <div>
                        <span className="label-text text-white font-semibold">
                          Time : {details.time}
                        </span>
                      </div>
                      <div>
                        <span className="label-text text-white font-semibold">
                          Date : {formatDate(details.date)}
                        </span>
                      </div>
                      <div>
                        <span className="label-text text-white font-semibold">
                          Status : {details.status}
                        </span>
                      </div>
                      <div>
                        <span className="label-text text-white font-semibold">
                          Message : {details.message}
                        </span>
                      </div>
                      <div className="py-3 md:col-span-2">
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_5").showModal()
                          }
                          className="btn bg-red-600 text-white font-semibold border-none hover:bg-blue-600 w-full"
                        >
                          Donate Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-12 lg:col-span-2 md:w-4/5 lg:w-full mx-auto">
            <Lottie animationData={deep} loop={true} />
          </div>
        </div>
      </section>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-red-200 backdrop-blur-md bg-opacity-10 rounded-md min-h-32 border border-gray-400">
          <div className="bg-red-200 backdrop-blur-md bg-opacity-10 rounded-md min-h-32 border border-gray-400 p-4">
            <div>
              <label className="label">
                <span className="label-text text-gray-300 font-semibold">
                  Donor Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={user?.displayName}
                className="w-full outline-none rounded border px-4 py-2 bg-red-200 border-none text-gray-800 placeholder:text-gray-500 focus:border-red-200"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-gray-300 font-semibold">
                  Donor Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={user?.email}
                className="w-full outline-none rounded border px-4 py-2 bg-red-200 border-none text-gray-800 placeholder:text-gray-500 focus:border-red-200"
                required
              />
            </div>
          </div>
          <div className="modal-action">
            <form onSubmit={handleConfirm} method="dialog">
              <button className="btn bg-red-600 text-white border-none hover:bg-blue-600">
                Confirm
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
