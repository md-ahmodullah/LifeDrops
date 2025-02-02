import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { RiFundsFill } from "react-icons/ri";
import useAllDonationRequest from "../../Hooks/useAllDonationRequest";
import useAllUsers from "../../Hooks/useAllUsers";
import { AuthContext } from "../../Provider/AuthProvider";
import logo4 from "../../assets/logo/logo4.png";
export default function AdminHome() {
  const [myDonations, setMyDonations] = useState([]);
  const { user } = useContext(AuthContext);
  const [users] = useAllUsers();
  const [allDonations] = useAllDonationRequest();

  useEffect(() => {
    const userEmail = user?.email;
    if (userEmail) {
      axios
        .get("https://life-drops-server-seven.vercel.app/donationRequest", {
          params: { requesterEmail: userEmail },
        })
        .then((res) => setMyDonations(res.data));
    }
  }, [user]);

  return (
    <>
      <section className="w-11/12 mx-auto py-5 md:py-8 font-poppins">
        <div className="">
          <h1 className="text-xl md:text-3xl font-bold text-center text-red-700 uppercase">
            Welcome, {user?.displayName}!
          </h1>
          <div className="flex items-center gap-2 pt-5 md:pt-8 px-2">
            <div>
              <img src={logo4} alt="Blood Logo" className="w-8 h-11" />
            </div>
            <div>
              <h1 className="text-base lg:text-2xl text-gray-700 font-bold">
                Site Overview
              </h1>
              <p className="text-xs text-red-500 font-medium w-11/12">
                Administration Panel
              </p>
            </div>
          </div>
        </div>
        <div className="py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="stat bg-base-200 rounded m-4 shadow-md">
              <div className="stat-figure text-primary">
                <FaUsers className="text-5xl" />
              </div>
              <div className="stat-title">Total Donors</div>
              <div className="stat-value text-blue-600">{users.length}</div>
              <div className="stat-desc">
                {users.length}% more than last month
              </div>
            </div>
            <div className="stat bg-base-200 rounded m-4 shadow-md">
              <div className="stat-figure text-red-600">
                <BiSolidDonateBlood className="text-5xl" />
              </div>
              <div className="stat-title">Total Donation Requests</div>
              <div className="stat-value text-red-600">
                {allDonations.length}
              </div>
              <div className="stat-desc">
                {allDonations.length}% more than last month
              </div>
            </div>
            <div className="stat bg-base-200 rounded m-4 shadow-md">
              <div className="stat-figure text-yellow-500">
                <div className="avatar online">
                  <div className="w-16 rounded-full">
                    <RiFundsFill className="text-5xl" />
                  </div>
                </div>
              </div>
              <div className="stat-value">Funding</div>
              <div className="stat-title">81% Done</div>
              <div className="stat-desc text-secondary">Will Add Soon</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
