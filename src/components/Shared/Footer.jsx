import { Link } from "react-router";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#11152D] font-serif text-white">
      {/* Main footer grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 md:p-10">
        {/* Logo + Address */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link className="text-2xl md:text-3xl lg:text-4xl mb-2" to="/">
            Swift
          </Link>
          <p className="flex items-center gap-x-2 text-sm md:text-base text-center md:text-left">
            <FaLocationDot size={22} className="text-blue-400" />
            <span>Halishahar, A-block, Chattogram</span>
          </p>
          <p className="flex items-center gap-x-2 text-sm md:text-base text-center md:text-left font-inter mt-1">
            <FaPhone size={22} className="text-blue-400" />
            <span>+1 800-123-4567</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl">QUICK LINKS</h1>
          <ul className="space-y-2 mt-3 text-base md:text-lg text-center md:text-left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Site Information */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl">SITE INFORMATION</h1>
          <ul className="space-y-2 mt-3 text-base md:text-lg text-center md:text-left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Follow */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl mb-3">FOLLOW</h1>
          <div className="flex gap-6 md:gap-4 items-center justify-center md:justify-start flex-wrap">
            <FaFacebook className="text-blue-500" size={24} />
            <FaInstagram className="text-red-500" size={24} />
            <FaXTwitter color="white" size={24} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <p className="border-t border-gray-300"></p>

      {/* Copyright */}
      <div className="text-center p-4 md:p-8 text-xs sm:text-sm md:text-base">
        ©️<span className="font-inter">2025,</span> All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
