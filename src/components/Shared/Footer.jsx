/* eslint-disable no-unused-vars */
import { NavLink } from "react-router";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
  FaTruck,
  FaGlobe,
  FaClock,
  FaEnvelope,
} from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#11152D] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 animate-pulse">
          <FaTruck size={120} className="text-blue-400" />
        </div>
        <div className="absolute top-20 right-20 animate-pulse delay-1000">
          <FaShippingFast size={100} className="text-blue-400" />
        </div>
        <div className="absolute bottom-20 left-1/3 animate-pulse delay-2000">
          <FaGlobe size={80} className="text-blue-400" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info with Enhanced Design */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-full">
                  <FaTruck className="text-blue-400" size={24} />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Swift
                </h2>
              </div>
              <p className="text-gray-300 text-sm lg:text-base mb-6">
                Your trusted logistics partner for fast, reliable, and secure
                delivery solutions worldwide.
              </p>
            </div>

            <div className="space-y-4 w-full">
              <div className="flex items-center justify-center lg:justify-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FaLocationDot size={18} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm lg:text-base">
                  Halishahar, A-block, Chattogram
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FaPhone size={18} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm lg:text-base">
                  +1 800-123-4567
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FaEnvelope size={18} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm lg:text-base">
                  info@swiftlogistics.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links with Enhanced Styling */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                QUICK LINKS
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Service", path: "/service" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index} className="text-center">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 inline-block relative group text-base lg:text-lg ${
                        isActive ? "text-blue-400 font-bold" : ""
                      }`
                    }
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                OUR SERVICES
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: "Express Delivery", icon: FaShippingFast },
                { name: "Freight Services", icon: FaTruck },
                { name: "Global Shipping", icon: FaGlobe },
                { name: "24/7 Support", icon: FaClock },
              ].map((service, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center gap-3 group"
                >
                  <service.icon
                    className="text-blue-400 group-hover:scale-110 transition-transform"
                    size={16}
                  />
                  <span className="text-gray-300 hover:text-blue-400 transition-colors text-base lg:text-lg">
                    {service.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media with Enhanced Design */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                FOLLOW US
              </h3>
            </div>

            <div className="flex gap-4 mb-6">
              {[
                {
                  Icon: FaFacebook,
                  color: "hover:text-blue-500",
                  bg: "hover:bg-blue-500/20",
                },
                {
                  Icon: FaInstagram,
                  color: "hover:text-pink-500",
                  bg: "hover:bg-pink-500/20",
                },
                {
                  Icon: FaXTwitter,
                  color: "hover:text-white",
                  bg: "hover:bg-gray-500/20",
                },
              ].map(({ Icon, color, bg }, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-full bg-gray-800/50 ${bg} ${color} transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer group`}
                >
                  <Icon
                    size={24}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm mb-2">
                Stay connected for updates
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                </div>
                <span className="text-xs text-gray-400">Always in motion</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Animation */}
        <div className="relative my-8">
          <div className="border-t border-gray-600/50"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-[#11152D] px-4">
              <FaTruck className="text-blue-400/50" size={20} />
            </div>
          </div>
        </div>

        {/* Copyright with Enhanced Design */}
        <div className="text-center py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <p className="text-gray-400 text-sm lg:text-base">
                ©️{" "}
                <span className="font-semibold text-white">
                  2025 Swift Logistics
                </span>
                , All Rights Reserved
              </p>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="hover:text-blue-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-600">•</span>
              <span className="hover:text-blue-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
