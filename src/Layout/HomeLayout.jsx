import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

export default function HomeLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-340px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
