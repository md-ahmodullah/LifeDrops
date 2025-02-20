import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
export default function useFundings() {
  const axiosSecure = useAxiosSecure();
  const { data: fundings = [], refetch } = useQuery({
    queryKey: ["fundings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/fundings");
      return res.data;
    },
  });
  return [fundings, refetch];
}
