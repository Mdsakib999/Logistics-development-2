import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#11152D] font-serif text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-12">
        {/* Logo + Address */}
        <div className="flex flex-col items-center gap-3">
          <NavLink
            to="/"
            className="text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            Swift
          </NavLink>
          <p className="flex items-center gap-2 text-sm md:text-base text-center md:text-left">
            <FaLocationDot size={20} className="text-blue-400" />
            <span>Halishahar, A-block, Chattogram</span>
          </p>
          <p className="flex items-center gap-2 text-sm md:text-base text-center md:text-left">
            <FaPhone size={20} className="text-blue-400" />
            <span>+1 800-123-4567</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            QUICK LINKS
          </h1>
          <ul className="space-y-2 text-base md:text-lg text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:underline hover:text-blue-400 transition ${
                    isActive ? "text-blue-400 font-bold underline" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:underline hover:text-blue-400 transition ${
                    isActive ? "text-blue-400 font-bold underline" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `hover:underline hover:text-blue-400 transition ${
                    isActive ? "text-blue-400 font-bold underline" : ""
                  }`
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:underline hover:text-blue-400 transition ${
                    isActive ? "text-blue-400 font-bold underline" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Site Info */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
            SITE INFORMATION
          </h1>
          <ul className="space-y-2 text-base md:text-lg text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:underline hover:text-blue-400 transition ${
                    isActive ? "text-blue-400 font-bold underline" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:underline hover:text-blue-400 transition ${
                    isActive ? "text-blue-400 font-bold underline" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `hover:underline hover:text-blue-400 transition ${
                    isActive ? "text-blue-400 font-bold underline" : ""
                  }`
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:underline hover:text-blue-400 transition ${
                    isActive ? "text-blue-400 font-bold underline" : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">
            FOLLOW
          </h1>
          <div className="flex gap-5 flex-wrap justify-center">
            <FaFacebook
              className="text-blue-500 hover:scale-110 transition-transform duration-300"
              size={24}
            />
            <FaInstagram
              className="text-red-500 hover:scale-110 transition-transform duration-300"
              size={24}
            />
            <FaXTwitter
              className="text-white hover:scale-110 transition-transform duration-300"
              size={24}
            />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600"></div>

      <div className="text-center p-4 text-xs sm:text-sm md:text-base">
        ©️ <span className="font-inter">2025</span>, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
