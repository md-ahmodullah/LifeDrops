import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = ({ color = "text-gray-200" }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`w-36 flex items-center gap-1 ${color}`}
    >
      <IoChevronBackOutline className="w-4 h-4" /> Back
    </button>
  );
};

export default BackButton;
