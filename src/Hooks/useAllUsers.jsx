import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
export default function useAllUsers() {
  // const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return [users];
}
// useEffect(() => {
//   axios
//     .get("https://life-drops-server-seven.vercel.app/users")
//     .then((res) => setUsers(res.data));
// }, []);
