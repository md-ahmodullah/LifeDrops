import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
export default function useUsers() {
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  useEffect(() => {
    axios
      .get("http://localhost:5000/allusers", {
        params: { email: email },
      })
      .then((res) => setUsers(res.data));
  }, []);
  return [users];
}
