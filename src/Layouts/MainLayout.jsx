import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

function MainLayout() {
  return (
    <div className="max-w-7xl xl:mx-auto">
      <div className="nav">
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
