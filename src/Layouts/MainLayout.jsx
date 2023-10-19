import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

function MainLayout() {
  return (
    <div className="relative">
      <div className="nav bg-base-200 relative z-50">
        <Navbar />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
