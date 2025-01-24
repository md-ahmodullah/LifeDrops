import { Link } from "react-router-dom";
export default function BannerButton({ link, btnVariant, text }) {
  return (
    <Link to={link} className={`${btnVariant} text-white font-bold`}>
      {text}
    </Link>
  );
}
