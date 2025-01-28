import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
export default function useAllDonationRequest() {
  const [allDonations, setAllDonations] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const userEmail = user?.email;

    axios
      .get("https://life-drops-server-seven.vercel.app/donationRequest")
      .then((res) => setAllDonations(res.data));
  }, []);
  return [allDonations];
}
