import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
export default function useDonationRequest({ status = "" }) {
  const [myDonations, setMyDonations] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const userEmail = user?.email;
    if (userEmail) {
      axios
        .get("http://localhost:5000/donationRequest", {
          params: { requesterEmail: userEmail, status: status },
        })
        .then((res) => setMyDonations(res.data));
    }
  }, [user]);
  return [myDonations];
}
