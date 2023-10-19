import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

function MainLayout() {
  return (
    <div className="relative dark:bg-base-100 bg-slate-100">
      <div className="nav dark:bg-base-200 bg-slate-200 text-slate-900 z-50 fixed top-0 w-full">
        <Navbar />
      </div>
      <div className="outlet relative pt-[100px]">
        <Outlet />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
