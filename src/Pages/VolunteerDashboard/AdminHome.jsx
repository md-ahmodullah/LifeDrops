import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { RiFundsFill } from "react-icons/ri";
import useAllDonationRequest from "../../Hooks/useAllDonationRequest";
import useAllUsers from "../../Hooks/useAllUsers";
import { AuthContext } from "../../Provider/AuthProvider";
export default function VolHome() {
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
    <div className="w-10/12 mx-auto py-12">
      <div className="stats shadow grid grid-cols-1 lg:grid-cols-3 gap-8 p-5">
        <div className="stat">
          <div className="stat-figure text-primary">
            <FaUsers className="text-5xl" />
          </div>
          <div className="stat-title">Total Donors</div>
          <div className="stat-value text-blue-600">{users.length}</div>
          <div className="stat-desc">{users.length}% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-red-600">
            <BiSolidDonateBlood className="text-5xl" />
          </div>
          <div className="stat-title">Total Donation Requests</div>
          <div className="stat-value text-red-600">{allDonations.length}</div>
          <div className="stat-desc">
            {allDonations.length}% more than last month
          </div>
        </div>

        <div className="stat">
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
  );
}
