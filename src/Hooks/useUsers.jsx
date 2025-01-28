import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
export default function useUsers() {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  useEffect(() => {
    axios
      .get("https://life-drops-server-seven.vercel.app/allusers", {
        params: { email: email },
      })
      .then((res) => setUsers(res.data));
  }, []);
  return [users];
}
