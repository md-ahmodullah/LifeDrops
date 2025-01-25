import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
export default function FeaturedCard({ featured }) {
  const { date, title, description, time, location, photo } = featured;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={title} className="h-[200px] object-cover" />
      </figure>
      <div className="card-body">
        <div className="bg-red-600 w-28 px-2 py-1.5 rounded-tl-md rounded-br-md">
          <div className="flex gap-1 items-center text-white">
            <FaCalendarAlt className="text-xs" />
            <p className="font-bold text-xs">{date}</p>
          </div>
        </div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{description}</p>

        <div className="flex gap-1 items-center text-gray-600">
          <FaClock />
          <p className="font-semibold">{time}</p>
        </div>
        <div className="flex gap-1 items-center text-gray-600">
          <IoLocationSharp />
          <p className="font-semibold">{location}</p>
        </div>
      </div>
    </div>
  );
}
