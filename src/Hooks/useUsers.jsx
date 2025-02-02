import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
export default function useUsers() {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allusers", {
        params: { email: email },
      });
      return res.data;
    },
  });
  // useEffect(() => {
  //   axios
  //     .get("https://life-drops-server-seven.vercel.app/allusers", {
  //       params: { email: email },
  //     })
  //     .then((res) => setUsers(res.data));
  // }, []);
  return [users, refetch];
}
