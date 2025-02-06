import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://life-drops-server-seven.vercel.app",
  baseURL: "http://localhost:5000",
});

export default function useAxiosPublic() {
  return axiosPublic;
}
