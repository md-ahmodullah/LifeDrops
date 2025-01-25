import { Link } from "react-router-dom";
import logo4 from "../assets/logo/logo4.png";
export default function Footer() {
  return (
    <footer className="bg-red-950 text-gray-300 font-poppins">
      <div className="footer p-10">
        <aside>
          <div className="flex items-center gap-2">
            <img src={logo4} alt="Blood Logo" className="w-7 h-9" />
            <Link className="text-2xl md:text-3xl font-bold text-red-500">
              <span className="text-blue-500">Life</span>Drops
            </Link>
          </div>
          <p>Reliable Blood Donation since 1992</p>
        </aside>
        <nav>
          <h6 className="footer-title">Programs</h6>
          <a className="link link-hover">Donation</a>
          <a className="link link-hover">Volunteer</a>
          <a className="link link-hover">Awareness</a>
          <a className="link link-hover">Campaigns</a>
        </nav>
        <nav>
          <h6 className="footer-title">LifeDrops</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Terms & Conditions</a>
        </nav>
      </div>
      <div className="footer footer-center p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            LifeDrops
          </p>
        </aside>
      </div>
    </footer>
  );
}
