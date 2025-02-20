import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo4 from "../assets/logo/logo4.png";
import useFundings from "../Hooks/useFundings";
import { useFund } from "../Provider/FundProvider";
import CustomHelmet from "../ReusableComponents/Helmet";
export default function Funding() {
  const [currentPage, setCurrentPage] = useState(1);
  const { amount, setAmount, setTotalFunding } = useFund();
  const [inputAmount, setInputAmount] = useState("");
  const navigate = useNavigate();
  const [fundings, refetch] = useFundings();
  //   const fundings = [
  //     {
  //       name: "Ahmod",
  //       amount: 100,
  //       date: "03/15/2025",
  //     },
  //     {
  //       name: "Foisal  Khan Bahadur Shah Ali dehlobi",
  //       amount: 50,
  //       date: "09/07/2025",
  //     },
  //     { name: "Jahid", amount: 200, date: "05/23/2025" },
  //     { name: "Ibne Fulan", amount: 500, date: "02/21/2025" },
  //   ];
  const fundingPerPage = 5;

  //   useEffect(() => {

  //   }, [fundings]);
  const totalFundings = fundings.reduce(
    (total, fund) => total + parseInt(fund.amount),
    0
  );
  setTotalFunding(totalFundings);
  const totalPages = Math.ceil(fundings.length / fundingPerPage);

  const paginatedFunding = fundings.slice(
    (currentPage - 1) * fundingPerPage,
    currentPage * fundingPerPage
  );
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const datee = new Date(date);
    return datee.toLocaleDateString("en-US", options);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleProceed = () => {
    if (!inputAmount || inputAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    setAmount(inputAmount);
    navigate("/giveFund");
  };
  return (
    <>
      <CustomHelmet title={"LifeDrops | Fundings"} />
      <div className="font-poppins">
        <div className="w-10/12 mx-auto flex items-center justify-between gap-2 py-5 md:pt-6 px-6">
          <div className="flex items-center gap-3">
            <div>
              <img src={logo4} alt="Blood Logo" className="w-8 h-11" />
            </div>
            <div>
              <h1 className="text-base lg:text-xl text-gray-700 font-bold">
                All Fundings({fundings.length})
              </h1>
              <p className="text-xs text-red-500 font-medium w-full">
                Every Drop Counts. Donate Blood, Save Lives
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              document.getElementById("donation-modal").showModal()
            }
            className="btn bg-red-700 text-white font-semibold outline-none hover:bg-blue-500"
          >
            Give Fund
          </button>

          <dialog id="donation-modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Enter Donation Amount</h3>
              <input
                type="number"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
                placeholder="Enter amount"
                className="input input-bordered w-full mt-2"
              />
              <button
                onClick={handleProceed}
                className="btn bg-red-700 text-white font-semibold outline-none hover:bg-blue-500 mt-4"
              >
                Proceed to Pay
              </button>
            </div>
          </dialog>
        </div>

        <div className="w-10/12 md:w-3/5 mx-auto pb-12">
          {fundings.length !== 0 ? (
            <>
              <div className="overflow-x-auto pt-6">
                <table className="table table-xs">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedFunding.map((pendig, i) => (
                      <tr key={pendig?._id}>
                        <th>{i + 1}</th>
                        <td>{pendig?.name}</td>
                        <td>${pendig?.amount}</td>
                        <td>{formatDate(pendig?.date)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="min-h-[400px] flex flex-col items-center justify-center">
              <h1 className="text-xl font-semibold pb-3 pt-10 md:pt-0">
                Don't have any funding.
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
