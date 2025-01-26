import { Link } from "react-router-dom";
export default function BtnLink({ redirectLink, action }) {
  return (
    <Link
      className="btn bg-red-600 border-none text-white font-bold hover:bg-blue-500"
      to={redirectLink}
    >
      {action}
    </Link>
  );
}
