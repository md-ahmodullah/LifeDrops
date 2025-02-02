import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
export default function usePendingRequest() {
  const axiosSecure = useAxiosSecure();
  const { data: pendingRequest = [] } = useQuery({
    queryKey: ["pendingRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/donationRequest", {
        params: { status: "pending" },
      });
      return res.data;
    },
  });
  return [pendingRequest];
}
