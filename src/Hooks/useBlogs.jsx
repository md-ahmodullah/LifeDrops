import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function useBlogs(status = "All") {
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get(
        `https://life-drops-server-seven.vercel.app/blogs?status=${status}`
      );
      return res.data;
    },
  });
  return [blogs, refetch];
}
