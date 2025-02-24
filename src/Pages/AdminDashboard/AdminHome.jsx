import { useContext } from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { RiFundsFill } from "react-icons/ri";
import logo4 from "../../assets/logo/logo4.png";
import Loading from "../../Components/Loading";
import useAdmin from "../../Hooks/useAdmin";
import useAllDonationRequest from "../../Hooks/useAllDonationRequest";
import useAllUsersOnly from "../../Hooks/useAllUsersOnly";
import useFundings from "../../Hooks/useFundings";
import { AuthContext } from "../../Provider/AuthProvider";
import CustomHelmet from "../../ReusableComponents/Helmet";
export default function AdminHome() {
  const [allUsersOnly] = useAllUsersOnly();
  const [allDonations] = useAllDonationRequest();
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);
  const [fundings] = useFundings();
  const totalFunding = fundings.reduce(
    (total, fund) => total + parseInt(fund.amount),
    0
  );
  if (totalFunding === 0) {
    return <Loading />;
  }

  return (
    <>
      <CustomHelmet title={"Dashboard | Home"} />
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
                {isAdmin ? "Administration" : "Volunteer"} Panel
              </p>
            </div>
          </div>
        </div>
        <div className="py-6 pr-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="stat bg-base-200 rounded m-4 shadow-md">
              <div className="stat-figure text-primary">
                <FaUsers className="text-5xl" />
              </div>
              <div className="stat-title">Total Donors</div>
              <div className="stat-value text-blue-600">
                {allUsersOnly.length}
              </div>
              <div className="stat-desc">
                {allUsersOnly.length}% more than last month
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
              <div className="stat-title">Fundings</div>
              <div className="stat-value text-yellow-500">$ {totalFunding}</div>
              <div className="stat-desc">61% Done</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
