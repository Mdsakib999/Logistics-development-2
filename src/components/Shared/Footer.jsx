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
import logoWhite from "../../assets/bernhardlogistikLogoWhite.png";

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info with Enhanced Design */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <img src={logoWhite} className="max-w-[220px]" alt="" />
              </div>
              <p className="text-gray-300 text-sm lg:text-base mb-6">
                Spedition Bernhard GmbH Ihr zuverlässiger Logistikpartner für
                schnelle, zuverlässige und sichere Lieferlösungen weltweit.
                <div className="mt-2 flex items-center justify-center lg:justify-start gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </p>
            </div>
          </div>

          {/* Quick Links with Enhanced Styling */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                SCHNELLE LINKS
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: "Startseite", path: "/" },
                { name: "Über uns", path: "/about" },
                { name: "Dienstleistungen", path: "/service" },
                { name: "Kontakt", path: "/contact" },
                {
                  name: "Impressum & Datenschutz",
                  path: "/impressumDatenschutz",
                },
              ].map((link, index) => (
                <li key={index} className="">
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
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                Unsere Dienstleistungen
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: "Schnelllieferung", icon: FaShippingFast },
                { name: "Fracht- & Transportlösungen", icon: FaTruck },
                { name: "Weltweiter Versand", icon: FaGlobe },
                { name: "Rund-um-die-Uhr Unterstützung", icon: FaClock },
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-3 group">
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
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              <h3 className="text-xl lg:text-2xl font-bold text-white">
                FOLGE UNS
              </h3>
            </div>
            <div className="space-y-4 w-full">
              <div className="flex items-center justify-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FaLocationDot size={18} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm lg:text-base">
                  Boschstr. 4, 67304 Eisenberg, Deutschland
                </span>
              </div>

              <div className="flex items-center justify-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FaPhone size={18} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm lg:text-base">
                  <a href="tel:+4915679702744" className="">
                    +49 15679702744
                  </a>
                </span>
              </div>

              <div className="flex items-center justify-start gap-3 group">
                <div className="p-2 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <FaEnvelope size={18} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-sm lg:text-base">
                  <a href="mailto:transport@bernhardlogistik.de" className="">
                    transport@bernhardlogistik.de
                  </a>
                </span>
              </div>
            </div>

            {/* Social icon */}
            {/* <div className="flex gap-4 mb-6">
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
                  className={`p-3  mt-2 rounded-full bg-gray-800/50 ${bg} ${color} transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer group`}
                >
                  <Icon
                    size={24}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Divider with Animation */}
        <div className="relative my-2">
          <div className="border-t border-gray-600/50"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-[#11152D] px-4">
              <FaTruck className="text-blue-400/50" size={20} />
            </div>
          </div>
        </div>

        {/* Copyright with Enhanced Design */}
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <p className="text-gray-400 text-sm lg:text-base">
              ©️{" "}
              <span className="font-semibold text-white">
                2025 Spedition Bernhard GmbH
              </span>
              , Alle Rechte vorbehalten
            </p>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
