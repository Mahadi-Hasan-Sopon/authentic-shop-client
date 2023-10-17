import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

function Navbar() {
  const user = null;

  return (
    <div className="py-2 z-50 rounded max-w-7xl xl:mx-auto">
      <div className="navbar mx-auto">
        <div className="navbar-start">
          <Link
            to="/"
            className="hidden sm:block text-2xl font-bold text-white"
          >
            Authentic Shop
          </Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-1 py-6 shadow bg-[#202020] space-y-4 w-[300px]"
            >
              <NavbarLinks LiClass={"px-8 md:px-12 block w-full"} />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-10 menu-horizontal px-1">
            <NavbarLinks />
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex items-center gap-2.5">
            <div className="tooltip group mr-0.5 z-50">
              {user?.photoURL ? (
                <img
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full cursor-pointer"
                  src={user.photoURL}
                  alt="User image"
                />
              ) : (
                <>
                  <RxAvatar className="w-12 h-12 md:w-14 md:h-14 rounded-full cursor-pointer text-base-200 p-0.5" />
                </>
              )}
              {user?.email && (
                <div className="tooltip-text absolute bg-black text-white py-2 px-4 rounded-md text-sm whitespace-nowrap opacity-0 transition-opacity duration-200 -top-2/3 left-1/2 transform -translate-x-1/2 group-hover:opacity-50">
                  {user?.email}
                </div>
              )}
            </div>
            {user ? (
              <button
                // onClick={() => handleLogOutUser()}
                className="text-lg md:text-xl py-2 px-8 md:px-10 text-white bg-gradient-to-r from-slate-700 to-slate-600 rounded"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to={"/login"}
                className="text-lg md:text-xl py-2 px-8 md:px-10 text-white bg-gradient-to-r from-slate-700 to-slate-600 rounded"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const NavbarLinks = ({ LiClass }) => {
  const navLinks = (
    <>
      <li className={`${LiClass ? LiClass : ""}`}>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "text-amber-500 font-bold"
              : isActive
              ? "text-slate-100 text-lg font-bold"
              : "font-medium text-slate-200 block"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className={`${LiClass ? LiClass : ""}`}>
        <NavLink
          to="/products/new"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-amber-500 font-bold"
              : isActive
              ? "text-slate-100 text-lg font-bold"
              : "font-medium text-slate-200"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className={`${LiClass ? LiClass : ""}`}>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "text-amber-500 font-bold"
              : isActive
              ? "text-slate-100 text-lg font-bold"
              : "font-medium text-slate-200"
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return navLinks;
};

NavbarLinks.propTypes = {
  LiClass: PropTypes.string,
};
