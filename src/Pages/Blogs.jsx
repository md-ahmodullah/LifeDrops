import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import slider1 from "../assets/images/sliderImage/slider1.jpg";
import CustomHelmet from "../ReusableComponents/Helmet";
export default function Blogs() {
  const id = "b10a12gmsa36pscic70";
  return (
    <>
      <CustomHelmet title={"LifeDrops | Blogs"} />
      <section className="w-11/12 mx-auto py-8 min-h-screen font-poppins">
        <div>
          <div className="text-center space-y-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 font-bold">
              Every Drop Matters: Stories & Experiences
            </h1>
            <p className="text-base text-gray-500 w-full md:w-2/3 mx-auto px-3 md:px-0">
              Need blood for yourself or a loved one? Our platform connects you
              with available donors and blood drives in your area. Register as a
              recipient and receive the support you need quickly and
              efficiently.
            </p>
            <div className="w-full md:w-3/4 lg:w-1/3 mx-auto py-4">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
          <h2 className="text-lg font-bold">Recent Blogs Posts</h2>
          <div className="py-3 grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
            <div className="flex flex-col justify-center gap-1 px-2">
              <img src={slider1} alt="" className="rounded" />
              <div className="flex items-center gap-1 text-sm font-medium text-gray-500  pt-4">
                <p>Mr Author |</p>
                <p>20 January 2025</p>
              </div>
              <h1 className="text-lg font-semibold">
                Donating Blood is the way to serve humanity.
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
                amet ratione omnis suscipit aspernatur dolore eos corporis magni
                vero nihil ducimus blanditiis ipsa laborum rem! Qui beatae
                minima error voluptate.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-red-700 py-4">
                  <p className="px-2 border border-red-700 rounded-full">
                    blood
                  </p>
                  <p className="px-2 border border-red-700 rounded-full">
                    donation
                  </p>
                  <p className="px-2 border border-red-700 rounded-full">
                    campaign
                  </p>
                </div>
                <div className="text-sm text-red-700 pr-8">
                  <Link to={`/blogs/${id}`} className="flex items-center gap-1">
                    <GoArrowUpRight /> View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex item-center gap-2">
                <div>
                  <img src={slider1} alt="" className="rounded" />
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    <p>Mr Author |</p>
                    <p>20 January 2025</p>
                  </div>
                  <h1 className="text-lg font-semibold">
                    Donating Blood is the way to serve humanity.
                  </h1>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quo, amet ratione omnis suscipit aspernatur dolore eos
                    corporis.
                  </p>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-xs text-red-700 py-4">
                      <p className="px-2 border border-red-700 rounded-full">
                        blood
                      </p>
                      <p className="px-2 border border-red-700 rounded-full">
                        donation
                      </p>
                      <p className="px-2 border border-red-700 rounded-full">
                        campaign
                      </p>
                    </div>
                    <div className="text-sm text-red-700">
                      <Link
                        to="/blogs/b5jkskjadhas"
                        className="flex items-center gap-1"
                      >
                        <GoArrowUpRight /> View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex item-center gap-2">
                <div>
                  <img src={slider1} alt="" className="rounded" />
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    <p>Mr Author |</p>
                    <p>20 January 2025</p>
                  </div>
                  <h1 className="text-lg font-semibold">
                    Donating Blood is the way to serve humanity.
                  </h1>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quo, amet ratione omnis suscipit aspernatur dolore eos
                    corporis.
                  </p>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-xs text-red-700 py-4">
                      <p className="px-2 border border-red-700 rounded-full">
                        blood
                      </p>
                      <p className="px-2 border border-red-700 rounded-full">
                        donation
                      </p>
                      <p className="px-2 border border-red-700 rounded-full">
                        campaign
                      </p>
                    </div>
                    <div className="text-sm text-red-700">
                      <Link
                        to="/blogs/b5jkskjadhas"
                        className="flex items-center gap-1"
                      >
                        <GoArrowUpRight /> View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex item-center gap-2">
                <div>
                  <img src={slider1} alt="" className="rounded" />
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    <p>Mr Author |</p>
                    <p>20 January 2025</p>
                  </div>
                  <h1 className="text-lg font-semibold">
                    Donating Blood is the way to serve humanity.
                  </h1>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quo, amet ratione omnis suscipit aspernatur dolore eos
                    corporis.
                  </p>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5 text-xs text-red-700 py-4">
                      <p className="px-2 border border-red-700 rounded-full">
                        blood
                      </p>
                      <p className="px-2 border border-red-700 rounded-full">
                        donation
                      </p>
                      <p className="px-2 border border-red-700 rounded-full">
                        campaign
                      </p>
                    </div>
                    <div className="text-sm text-red-700">
                      <Link
                        to="/blogs/b5jkskjadhas"
                        className="flex items-center gap-1"
                      >
                        <GoArrowUpRight /> View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
