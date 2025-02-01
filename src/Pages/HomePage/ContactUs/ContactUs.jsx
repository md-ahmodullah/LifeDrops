import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa";
export default function ContactUs() {
  return (
    <>
      <div className="bg-[url('https://i.ibb.co.com/GM6bLMz/slider10.jpg')] bg-fixed bg-cover bg-center bg-no-repeat bg-red-950 bg-blend-multiply bg-opacity-70 py-16 mt-24 mb-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-8  items-center w-10/12 mx-auto">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl text-white font-bold pb-6">
              Find Us On
            </h1>
            <div className="flex gap-2 items-center text-white">
              <FaEnvelope className="text-gray-300" />
              <p className="">support@lifedrops.com</p>
            </div>
            <div className="flex gap-2 items-center text-white">
              <FaLocationArrow className="text-gray-300" />
              <p>Rajshahi-6000, Bangladesh</p>
            </div>
            <div className="flex gap-2 items-center text-white">
              <BsFillTelephoneFill className="text-gray-300" />
              <p className="">Office: (+880) 0823 560 433</p>
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-5 text-gray-200">
                <a className="border border-red-500 rounded-md bg-red-800 backdrop-blur-md bg-opacity-30 p-2 shadow-md shadow-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a className="border border-red-500 rounded-md bg-red-800 backdrop-blur-md bg-opacity-30 p-2 shadow-md shadow-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a className="border border-red-500 rounded-md bg-red-800 backdrop-blur-md bg-opacity-30 p-2 shadow-md shadow-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl text-white font-bold text-center pb-6">
              Contact With Us
            </h1>
            <div className="border border-red-200 rounded-md bg-red-200 backdrop-blur-md bg-opacity-10">
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">
                    <span className="label-text text-gray-200 font-bold">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    className="w-full outline-none border px-4 py-2 rounded-lg bg-transparent border-gray-200 text-white placeholder:text-gray-200 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-gray-200 font-bold">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="w-full outline-none border px-4 py-2 rounded-lg bg-transparent border-gray-200 text-white placeholder:text-gray-200 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-gray-200 font-bold">
                      Your Address
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="adress"
                    className="w-full outline-none border px-4 py-2 rounded-lg bg-transparent border-gray-200 text-white placeholder:text-gray-200 focus:border-red-200"
                    required
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text text-gray-200 font-bold">
                      Your Blood Group
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="blood group"
                    className="w-full outline-none border px-4 py-2 rounded-lg bg-transparent border-gray-200 text-white placeholder:text-gray-200 focus:border-red-200"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="label">
                    <span className="label-text text-gray-200 font-bold">
                      Your Message
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered bg-transparent border-gray-200 text-white placeholder:text-gray-200 focus:border-red-200 w-full"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full btn bg-red-600 border-none text-white font-bold hover:bg-blue-500">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
