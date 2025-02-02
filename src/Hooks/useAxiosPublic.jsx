import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://life-drops-server-seven.vercel.app",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
