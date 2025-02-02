import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
export default function useAllDonationRequest() {
  const axiosSecure = useAxiosSecure();
  const { data: pendingDonation = [] } = useQuery({
    queryKey: ["pendingDonation"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donationRequest", {
        params: { status: "pending" },
      });
      return res.data;
    },
  });
  return [pendingDonation];
}
