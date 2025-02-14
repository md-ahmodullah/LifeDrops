import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
export default function useVolunteer() {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isVolunteer, isPending: isVolunteerLoading } = useQuery({
    queryKey: [user?.email, "isVolunteer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`users/volunteer/${user?.email}`);
      return res.data?.volunteer;
    },
  });
  return [isVolunteer, isVolunteerLoading];
}
