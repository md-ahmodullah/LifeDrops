import { useContext, useState } from "react";
import { IoChevronBackOutline, IoWarning } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import register from "../../assets/images/register.png";
import useDistricts from "../../Hooks/useDistricts";
import useUpazila from "../../Hooks/useUpazila";
import { AuthContext } from "../../Provider/AuthProvider";
export default function Register() {
  const [districts] = useDistricts();
  const [upazilas] = useUpazila();
  const { user, setUser, createUser, updateUserProfile } =
    useContext(AuthContext);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpass = form.confirmpass.value;
    const blood = form.blood.value;
    const district = form.district.value;
    const upazila = form.upazila.value;

    const info = {
      name,
      photoURL,
      email,
      password,
      confirmpass,
      blood,
      district,
      upazila,
    };
    console.log(info);

    const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validation.test(password)) {
      setErrMessage("Must be at least 6 char including upper & lower case");
      return;
    }

    if (password !== confirmpass) {
      setErrMessage("Password didn't matched. Retype Password.");
      return;
    }

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
        Swal.fire("Register Successfully!");
        navigate("/");
        updateUserProfile({ displayName: name, photoURL: photoURL })
          .then((result) => {
            const newUser = result.user;
            setUser(newUser);
            navigate("/");
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
  };

  return (
    <>
      <div className="hero bg-base-300 min-h-screen font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left bg-red-700 min-h-screen flex flex-col items-center justify-center">
            <div className="w-10/12 mx-auto">
              <h1 className="text-3xl font-bold text-gray-200 text-center">
                Join Our Community <br /> Make a Lasting Impact
              </h1>
              <p className="p-6 text-gray-300 text-center">
                Need blood for yourself or a loved one? Our platform connects
                you with available donors and blood drives in your area.
                Register as a recipient and receive the support you need quickly
                and efficiently.
              </p>
              <img src={register} alt="" />
            </div>
          </div>
          <div className="px-8 space-y-8">
            <Link to="/" className="flex items-center gap-1 text-red-700">
              <IoChevronBackOutline />
              Back Home
            </Link>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-center">
                Register An Account
              </h1>
              <p className="text-center text-red-600 font-medium">
                Every Drop Counts. Donate Blood, Save Lives
              </p>
            </div>
            <div className="border border-white shadow-md rounded-sm bg-transparent">
              <form
                onSubmit={handleSubmit}
                className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
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
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
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
                      District
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
                      Upazila
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
                <div className="md:col-span-2">
                  <div>
                    {errMessage && (
                      <span className="text-xs text-red-500 flex items-center gap-1 pb-3 font-medium">
                        <IoWarning className="text-2xl" /> {errMessage}
                      </span>
                    )}
                  </div>
                  <button className="w-full btn bg-red-600 text-white font-bold">
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
