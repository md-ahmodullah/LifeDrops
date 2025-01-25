import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa";
export default function ContactUs() {
  return (
    <>
      <div className="bg-[url('https://i.ibb.co.com/GM6bLMz/slider10.jpg')] h-[550px] bg-cover bg-center bg-no-repeat bg-red-950 bg-blend-multiply bg-opacity-70 my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 p-12">
        <div>
          <div className="flex gap-2 items-center text-white">
            <FaEnvelope className="text-red-400" />
            <p className="">support@lifedrops.com</p>
          </div>
          <div className="flex gap-2 items-center text-white">
            <FaLocationArrow className="text-red-400" />
            <p>Rajshahi-6000, Bangladesh</p>
          </div>
          <div className="flex gap-2 items-center text-white">
            <BsFillTelephoneFill className="text-red-400" />
            <p className="">Office: (+880) 0823 560 433</p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
