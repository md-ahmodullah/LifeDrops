import { useContext, useState } from "react";
import { IoChevronBackOutline, IoWarning } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login2 from "../../assets/images/login2.png";
import register from "../../assets/images/register.png";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useDistricts from "../../Hooks/useDistricts";
import useUpazila from "../../Hooks/useUpazila";
import { AuthContext } from "../../Provider/AuthProvider";
import CustomHelmet from "../../ReusableComponents/Helmet";

const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function Register() {
  const [errMessage, setErrMessage] = useState("");
  const [districts] = useDistricts();
  const [upazilas] = useUpazila();
  const { user, setUser, createUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpass = form.confirmpass.value;
    const blood = form.blood.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const role = "donor";
    const status = "active";
    const photoFile = form.photo.files[0];
    const formData = new FormData();
    formData.append("image", photoFile);
    if (!photoFile) {
      setErrMessage("Please upload a photo.");
      return;
    }
    const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validation.test(password)) {
      setErrMessage("Must be at least 6 char including upper & lower case");
      return;
    }

    if (password !== confirmpass) {
      setErrMessage("Password didn't matched. Retype Password.");
      return;
    }

    fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const photoURL = data.data.display_url;
          const userInfo = {
            name,
            photoURL,
            email,
            blood,
            district,
            upazila,
            role,
            status,
          };

          createUser(email, password)
            .then((result) => {
              const user = result.user;
              const newUser = {
                displayName: name,
                photoURL: photoURL,
                email: email,
                password: password,
              };
              setUser(newUser);
              updateUserProfile({ displayName: name, photoURL: photoURL })
                .then((result) => {
                  const newUser = result.user;
                  setUser(newUser);
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message?.split("auth/")[1];
                  const displayError = errorMessage?.split(").")[0];
                  setErrMessage(displayError);
                });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message?.split("auth/")[1];
              const displayError = errorMessage?.split(").")[0];
              setErrMessage(displayError);
            });
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Register Successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        }
      })
      .catch((err) => console.error("Image Upload Error:", err));

    // const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });
  };

  return (
    <>
      <CustomHelmet title={"LifeDrops | Register"} />
      <div className="hero bg-base-300 min-h-screen font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center lg:text-left bg-red-700 md:min-h-screen flex flex-col items-center justify-center md:justify-start lg:justify-center pt-5 md:pt-0">
            <div className="w-10/12 mx-auto md:pt-24 lg:pt-0">
              <h1 className="text-xl lg:text-3xl font-bold text-gray-200 text-center">
                Join Our Community <br /> Make a Lasting Impact
              </h1>
              <p className="p-6 text-gray-300 text-center text-sm lg:text-base">
                Need blood for yourself or a loved one? Our platform connects
                you with available donors and blood drives in your area.
                Register as a recipient and receive the support you need quickly
                and efficiently.
              </p>
              <img src={register} alt="" />
              <img src={login2} alt="" className="hidden md:grid lg:hidden" />
            </div>
          </div>
          <div className="px-5 md:pr-5 md:px-0 lg:px-8 space-y-8 pb-10">
            <div className="space-y-2">
              <Link
                to="/"
                className="flex items-center gap-1 text-red-700 py-3"
              >
                <IoChevronBackOutline />
                Back Home
              </Link>
              <h1 className="text-xl lg:text-3xl font-bold text-center">
                Register An Account
              </h1>
              <p className="text-center text-red-600 font-medium text-sm lg:text-base">
                Every Drop Counts. Donate Blood, Save Lives
              </p>
            </div>
            <div className="border border-white shadow-md rounded-sm bg-transparent">
              <form
                onSubmit={handleSubmit}
                className="p-3 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4"
              >
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Photo URL
                    </span>
                  </label>
                  {/* <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
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
                    <span className="label-text text-red-700 font-semibold">
                      Blood Group
                    </span>
                  </label>
                  <select
                    name="blood"
                    className="px-4 py-2 w-full outline-none border-none"
                    required
                  >
                    <option value="">Select</option>
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
                      District
                    </span>
                  </label>
                  <select
                    name="district"
                    className="px-4 py-2 w-full outline-none border-none"
                    required
                  >
                    <option value="">Select</option>
                    {districts.map((district, i) => (
                      <option key={i}>{district?.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Upazila
                    </span>
                  </label>
                  <select
                    name="upazila"
                    className="px-4 py-2 w-full outline-none border-none"
                    required
                  >
                    <option value="">Select</option>
                    {upazilas.map((upazila, i) => (
                      <option key={i}>{upazila?.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-red-700 font-semibold">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="confirmpass"
                    placeholder="Confirm Password"
                    className="w-full outline-none rounded-sm border px-4 py-2 bg-white border-none text-black placeholder:text-gray-500 focus:border-red-200"
                    required
                  />
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
                    Register
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-center text-sm font-medium pb-4">
                <p className="pr-2 text-gray-600">Already have an account?</p>
                <Link to="/login" className="text-red-600 underline">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
