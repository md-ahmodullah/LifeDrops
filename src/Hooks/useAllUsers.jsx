import axios from "axios";
import { useEffect, useState } from "react";
export default function useAllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://life-drops-server-seven.vercel.app/users")
      .then((res) => setUsers(res.data));
  }, []);
  return [users];
}
