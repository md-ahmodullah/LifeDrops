import axios from "axios";
import { useEffect, useState } from "react";
export default function useAllUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setUsers(res.data));
  }, []);
  return [users];
}
