import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import CustomHelmet from "../ReusableComponents/Helmet";

export default function UpdateProfile() {
  const { updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const blood = e.target.blood.value;
    const district = e.target.district.value;
    const upazila = e.target.upazila.value;
    updateUserProfile({
      displayName: name,
      photoURL: photoURL,
      blood: blood,
      district: district,
      upazila: upazila,
    })
      .then((result) => {
        navigate("/dashboard/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.split("auth/")[1];
        const displayError = errorMessage.split(").")[0];
        setErrMessage(displayError);
      });
  };
  return (
    <>
      <CustomHelmet title={"Update Profile"} />
      <div className="my-6 py-5 lg:py-16">
        <div className="card bg-base-100 w-4/5 md:w-1/2 lg:w-1/3 mx-auto shrink-0 shadow-2xl">
          <div className="text-center px-5 py-5">
            <h1 className="text-xl font-bold text-deepTeal">Update Profile</h1>
          </div>
          <div className="px-7 py-3">
            <form onSubmit={handleUpdateProfile} className="space-y-3">
              <div className="form-control pb-5">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    name="name"
                    className="grow"
                    placeholder="Name"
                    required
                  />
                </label>
              </div>
              <div className="form-control pb-5">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    name="photo"
                    className="grow"
                    placeholder="Photo URL"
                    required
                  />
                </label>
              </div>

              <div className="flex w-full flex-col border-opacity-50 form-control mt-2 pb-5">
                <button className="btn bg-lightCoral font-medium text-faWhite">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
