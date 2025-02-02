import axios from "axios";
const axiosSecure = axios.create({
  baseURL: "https://life-drops-server-seven.vercel.app",
});
export default function useAxiosSecure() {
  return axiosSecure;
}
