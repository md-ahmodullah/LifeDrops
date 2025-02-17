import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
export default function useAllDonationRequest() {
  const axiosSecure = useAxiosSecure();
  const { data: allDonations = [], refetch } = useQuery({
    queryKey: ["allDonations"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donationRequest");
      return res.data;
    },
  });
  return [allDonations, refetch];
}
