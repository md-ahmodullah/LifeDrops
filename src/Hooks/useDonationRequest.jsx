import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
export default function useDonationRequest(status = "") {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const axiosSecure = useAxiosSecure();
  const { data: myDonations = [], refetch } = useQuery({
    queryKey: ["myDonations"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donationRequest", {
        params: { requesterEmail: userEmail, status: status },
      });
      return res.data;
    },
  });
  return [myDonations, refetch];
}
