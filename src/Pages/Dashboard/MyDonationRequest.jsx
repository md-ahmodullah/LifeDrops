export default function MyDonationRequest() {
  return (
    <>
      <h1>MyDonationRequest</h1>
      <div className="flex items-end justify-end">
        <div>
          <select
            className="select select-bordered w-full max-w-xs"
            // onChange={handleDifficultyChange}
          >
            <option>All</option>
            <option>Pending</option>
            <option>Inprogress</option>
            <option>Done</option>
            <option>Canceled</option>
          </select>
        </div>
      </div>
    </>
  );
}
