import { Link, useLocation } from "react-router";
import { useState } from "react";
import Button from "./Button";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Service" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between text-white md:px-4 md:py-3">
        <Link className="text-2xl md:text-3xl lg:text-4xl font-serif" to="/">
          Swift
        </Link>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <RxCross2 /> : <FaBars size={22} />}
          </button>
        </div>
        {/* Desktop links */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-x-8 md:text-lg lg:text-xl font-serif">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1 rounded transition-colors duration-200 ${
                isActive(link.to)
                  ? "border-b-2 hover:border-b-4 duration-300 rounded-b-lg text-blue-300 font-bold"
                  : "hover:bg-white hover:text-blue-400 hover:rounded-full p-2"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">
          <Link className="font-serif" to="/contact">
            <Button buttonText={"Contact"}></Button>
          </Link>
        </div>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-blue-500 bg-opacity-95 flex flex-col items-center justify-center gap-y-8 text-white text-2xl font-serif transition-all duration-300 z-50">
          {/* Close icon at top-right */}
          <button
            aria-label="Close menu"
            className="cursor-pointer absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white text-3xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
          >
            <RxCross2 />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-6 py-2 rounded transition-colors duration-200 ${
                isActive(link.to)
                  ? "border-b-2 hover:border-2 hover:border-white duration-300 rounded-b-lg text-blue-100 font-bold"
                  : "hover:bg-white hover:text-blue-400 hover:rounded-full p-2"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-6"
            onClick={() => setMenuOpen(false)}
          >
            <Button buttonText={"Contact"}></Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
