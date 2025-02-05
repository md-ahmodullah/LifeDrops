import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export default function useBlogs() {
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/blogs");
      return res.data;
    },
  });
  return [blogs, refetch];
}
