import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo4 from "../assets/logo/logo4.png";
import Loading from "../Components/Loading";
import usePendingRequest from "../Hooks/usePendingRequest";
import CustomHelmet from "../ReusableComponents/Helmet";
export default function DonationRequest() {
  const [pendingRequest] = usePendingRequest();
  const [currentPage, setCurrentPage] = useState(1);
  const doantionPerPage = 4;

  const totalPages = Math.ceil(pendingRequest.length / doantionPerPage);

  const paginatedDonation = pendingRequest.slice(
    (currentPage - 1) * doantionPerPage,
    currentPage * doantionPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const datee = new Date(date);
    return datee.toLocaleDateString("en-US", options);
  };

  if (pendingRequest.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <CustomHelmet title={"LifeDrops | Donation Request"} />
      <div>
        <div className="flex items-center gap-2 py-5 md:pt-6 px-6 justify-center">
          <div>
            <img src={logo4} alt="Blood Logo" className="w-8 h-11" />
          </div>
          <div>
            <h1 className="text-base lg:text-2xl text-gray-700 font-bold">
              All Pending Donation Requests({pendingRequest.length})
            </h1>
            <p className="text-xs text-red-500 font-medium w-11/12">
              Every Drop Counts. Donate Blood, Save Lives
            </p>
          </div>
        </div>
        <div className="w-11/12 mx-auto pb-12">
          {pendingRequest.length !== 0 ? (
            <>
              <div className="overflow-x-auto pt-6">
                <table className="table table-xs">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Location</th>
                      <th>Date</th>
                      <th>Group</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedDonation.map((pendig, i) => (
                      <tr key={pendig?._id}>
                        <th>{i + 1}</th>
                        <td>{pendig?.name}</td>
                        <td>{pendig?.address}</td>
                        <td>{formatDate(pendig?.date)}</td>
                        <td>{pendig?.blood}</td>
                        <td>{pendig?.status}</td>
                        <td className="flex items-center gap-2 pb-4">
                          <Link
                            to={`/details/${pendig._id}`}
                            className="flex items-center gap-1"
                          >
                            <FaEye
                              className="text-base text-green-700"
                              title="View"
                            />
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="min-h-[400px] flex flex-col items-center justify-center">
              <h1 className="text-xl font-semibold pb-3 pt-10 md:pt-0">
                Don't have any pending donation request
              </h1>
            </div>
          )}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="join flex items-center justify-center pb-3">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`join-item btn ${
                currentPage === index + 1 ? "bg-red-700 text-white" : ""
              } `}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
