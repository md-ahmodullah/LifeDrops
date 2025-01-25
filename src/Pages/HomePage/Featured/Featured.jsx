import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

export default function Featured() {
  const [featureds, setFeatureds] = useState([]);
  useEffect(() => {
    fetch("/featured.json")
      .then((res) => res.json())
      .then((data) => setFeatureds(data));
  }, []);
  console.log(featureds);

  return (
    <section className="w-10/12 mx-auto my-5">
      <div className="space-y-4 py-16">
        <h1 className="text-3xl font-bold text-center">Featured Campaigns</h1>
        <p className="text-gray-600 text-center px-0 md:px-12 lg:px-32">
          Finding blood quickly can be critical in medical emergencies. Our
          platform connects you with available blood donors and drives in your
          area, ensuring you or a loved one receives the vital support needed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featureds.map((featured) => (
          <FeaturedCard key={featured.id} featured={featured} />
        ))}
      </div>
    </section>
  );
}
