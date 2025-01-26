import { useEffect, useState } from "react";
export default function useDistricts() {
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    fetch("/districts.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data));
  }, []);
  return [districts];
}
