import { useContext, useState } from "react";
import { IoChevronBackOutline, IoWarning } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from "../../assets/images/login.png";
import { AuthContext } from "../../Provider/AuthProvider";
import CustomHelmet from "../../ReusableComponents/Helmet";
export default function Login() {
  const { loginUser, user, setUser } = useContext(AuthContext);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validation.test(password)) {
      setErrMessage("Must be at least 6 char including upper & lower case");
      return;
    }

    loginUser(email, password)
      .then((result) => {
        const newUser = result.user;
        setUser(newUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(redirect, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error?.message?.split("auth/")[1];
        const displayError = errorMessage?.split(").")[0];
        setErrMessage(displayError);
      });
  };

  return (
    <>
      <CustomHelmet title={"LifeDrops | Login"} />
      <div className="hero bg-base-300 min-h-screen font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 items-center ">
          <div className="text-center lg:text-left bg-red-700 md:min-h-screen flex flex-col items-center justify-center pt-5 md:pt-0">
            <div className="w-10/12 mx-auto">
              <h1 className="text-xl lg:text-3xl font-bold text-gray-200 text-center">
                Finding Blood Made Easy <br /> Connect with Donors
              </h1>
              <p className="p-3 lg:p-6 text-sm lg:text-base text-gray-300 text-center">
                Become part of a compassionate community dedicated to saving
                lives. Connect with other donors, learn about blood types and
                their importance, and stay informed about upcoming blood drives.
                Together, we can ensure a steady supply of blood for those in
                need.
              </p>
              <img src={login} alt="" />
            </div>
          </div>
          <div className="px-5 md:pr-5 lg:px-8 space-y-8">
            <Link to="/" className="flex items-center gap-1 text-red-700">
              <IoChevronBackOutline />
              Back Home
            </Link>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-center">
                Login Your Account
              </h1>
              <p className="text-center text-red-600 font-medium text-sm lg:text-base">
                Every Drop Counts. Donate Blood, Save Lives
              </p>
            </div>
            <div className="border border-white shadow-md rounded-sm bg-transparent w-full lg:w-3/4 mx-auto">
              <form onSubmit={handleSubmit} className="p-2 lg:p-6">
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
                <div className="md:col-span-2 pt-6">
                  {errMessage && (
                    <span className="text-base text-red-500 flex items-center gap-1 pb-3">
                      <IoWarning className="text-xl" /> {errMessage}
                    </span>
                  )}
                  <button className="w-full btn bg-red-600 text-white font-bold hover:bg-blue-600">
                    Login
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-center text-sm font-medium pb-4">
                <p className="pr-2 text-gray-600">Don't have an account?</p>
                <Link to="/register" className="text-red-600 underline">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
