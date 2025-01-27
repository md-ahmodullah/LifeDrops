import axios from "axios";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import searchImg from "../assets/images/login2.png";
import useDistricts from "../Hooks/useDistricts";
import useUpazila from "../Hooks/useUpazila";
export default function Search() {
  const [matched, setMatched] = useState([]);
  const [districts] = useDistricts();
  const [upazilas] = useUpazila();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const blood = form.blood.value;
    const district = form.district.value;
    const upazila = form.upazila.value;

    const formData = {
      blood,
      district,
      upazila,
    };
    console.log(formData);
    try {
      const result = await axios
        .get("http://localhost:5000/users", {
          params: { blood: blood, district: district, upazila: upazila },
        })
        .then((res) => setMatched(res.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(matched);
  return (
    <>
      <section className="bg-[url('https://i.ibb.co.com/Wn48j1L/searchbg.jpg')] bg-cover bg-center bg-no-repeat bg-red-900 bg-blend-multiply bg-opacity-90 mb-1 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-10/12 mx-auto">
          <div className="col-span-2">
            <Link
              to="/"
              className="w-28 flex items-center gap-1 text-white py-3"
            >
              <IoChevronBackOutline />
              Back Home
            </Link>
            <div>
              <div className="py-8">
                <h1 className="text-2xl md:text-3xl text-white font-bold text-center pb-6">
                  Finding Blood Made Easy, Connect with Donors
                </h1>
                <p className="text-sm md:text-base text-gray-100 text-center pb-6">
                  Blood donation is a selfless act that can make a profound
                  difference in the lives of others. By donating blood, you
                  become a lifeline for patients battling illnesses, undergoing
                  surgeries, or facing unexpected emergencies. Your generosity
                  can provide hope and healing to those in need.
                </p>
              </div>
              <div className="border border-red-300 rounded-md bg-red-200 backdrop-blur-md bg-opacity-10">
                <div className="py-6">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center gap-5 px-3"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <div>
                        <label className="label">
                          <span className="label-text text-gray-200 font-semibold">
                            Blood Group
                          </span>
                        </label>
                        <select
                          name="blood"
                          className="px-4 py-2 w-full outline-none border-none rounded"
                        >
                          <option value="">Select</option>
                          <option value={"A+"}>A+</option>
                          <option value={"A-"}>A-</option>
                          <option value={"B+"}>B+</option>
                          <option value={"B-"}>B-</option>
                          <option value={"AB+"}>AB+</option>
                          <option value={"AB-"}>AB-</option>
                          <option value={"O+"}>O+</option>
                          <option value={"O-"}>O-</option>
                        </select>
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-gray-200 font-semibold">
                            District
                          </span>
                        </label>
                        <select
                          name="district"
                          className="px-4 py-2 w-full outline-none border-none rounded"
                        >
                          <option value="">Select</option>
                          {districts.map((district, i) => (
                            <option key={i} value={district?.name}>
                              {district?.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="label">
                          <span className="label-text text-gray-200 font-semibold">
                            Upazila
                          </span>
                        </label>
                        <select
                          name="upazila"
                          className="px-4 py-2 w-full outline-none border-none rounded"
                        >
                          <option value="">Select</option>
                          {upazilas.map((upazila, i) => (
                            <option key={i} value={upazila?.nam}>
                              {upazila?.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <button className="btn bg-red-600 border-none text-white font-bold hover:bg-blue-500">
                        Search Donors
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={searchImg} alt="" />
          </div>
        </div>
        <div className="py-12">
          <h1>{matched.length}</h1>
        </div>
      </section>
    </>
  );
}
