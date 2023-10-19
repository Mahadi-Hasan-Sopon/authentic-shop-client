import { AiFillHeart } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import Logo from "/logo-svg.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-7xl lg:mx-auto p-6">
      <div className="footer-main grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-6 sm:justify-between justify-center">
        <div className="left md:col-span-2">
          <img className="bg-white h-16 rounded-md p-1" src={Logo} alt="" />
          <p className="text-base font-normal dark:text-slate-300 py-5">
            Everything you desire, We serve. Think or worried about authentic
            products ? that is why we are.
            <span className="text-lg font-bold dark:text-slate-200 text-slate-500 ms-3">
              Authentic Shop
            </span>
          </p>
          <div className="flex gap-6 items-center py-3">
            <TfiHeadphoneAlt className="text-5xl text-orange-400 font-bold" />
            <div className="number">
              <p className="text-base text-slate-500">
                Got Questions ? Call us 24/7!
              </p>
              <h3 className="text-2xl font-medium dark:text-slate-200 text-slate-400">
                +880 1641 819 262
              </h3>
            </div>
          </div>
          <div className="socials flex flex-wrap justify-center md:justify-between gap-4 items-center text-3xl py-3 pe-6">
            <FaFacebook className="cursor-pointer hover:text-blue-400" />
            <FaTwitter className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-red-400" />
            <FaWhatsapp className="cursor-pointer hover:text-green-600" />
            <FaLinkedin className="cursor-pointer hover:text-blue-500" />
            <FaYoutube className="cursor-pointer hover:text-red-500" />
          </div>
        </div>
        <div className="left-center">
          <h3 className="text-2xl font-bold dark:text-slate-200 text-slate-600">
            Quick Links
          </h3>
          <ul className="space-y-2 mt-6">
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              FAQ
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Find store location
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Privacy Policy
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Refund Policy
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Terms of Service
            </li>
          </ul>
        </div>
        <div className="right-center">
          <h3 className="text-2xl font-bold dark:text-slate-200 text-slate-600">
            Company
          </h3>
          <ul className="space-y-2 mt-6">
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Wishlist
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              My account
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Product compare
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Cart
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              About us
            </li>
          </ul>
        </div>
        <div className="right">
          <h3 className="text-2xl font-bold dark:text-slate-200 text-slate-600">
            My Account
          </h3>
          <ul className="space-y-2 mt-6">
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Track Orders
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Shipping
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Order history
            </li>
            <li className="text-base font-normal dark:text-slate-400 text-slate-500 list-disc">
              Returns
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom sm:flex justify-between items-center pt-6">
        <div className="flex flex-wrap gap-2 my-2">
          <p className="text-base dark:text-slate-400 text-slate-500 flex items-center gap-1">
            Copyright © 2023, Made with <AiFillHeart />
          </p>
          <p className="text-base dark:text-slate-400 text-slate-500 flex items-center gap-1">
            by Mahadi Hasan.
          </p>
        </div>
        <img src="https://i.ibb.co/CWsHRLk/patment-icon1.png" alt="" />
      </div>
    </div>
  );
}

export default Footer;
