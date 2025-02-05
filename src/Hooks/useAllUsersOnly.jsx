import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
export default function useAllUsersOnly() {
  const axiosSecure = useAxiosSecure();
  const { data: allUsersOnly = [], refetch } = useQuery({
    queryKey: ["allUsersOnly"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return [allUsersOnly, refetch];
}
