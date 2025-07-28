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
    <nav className="relative z-50 bg-transparent">
      <div className="px-4 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <Link
          className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold hover:text-blue-300 transition-colors duration-200"
          to="/"
        >
          Swift
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-serif text-lg transition-all duration-200 ${
                isActive(link.to)
                  ? "text-blue-300 font-semibold"
                  : "text-white hover:text-blue-300"
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 rounded-full"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button buttonText="Contact" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="cursor-pointer lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross2 size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#161c3d] backdrop-blur-sm transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#11152D] backdrop-blur-md shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link
              className="cursor-pointer text-2xl font-serif font-bold text-white hover:text-blue-300 transition-colors duration-200"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Swift
            </Link>
            <button
              aria-label="Close menu"
              className="cursor-pointer p-2 rounded-md hover:bg-white/10 transition-colors duration-200 focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              <RxCross2 size={24} className="text-white" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col p-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-3 rounded-lg font-serif text-lg transition-all duration-200 ${
                  isActive(link.to)
                    ? "text-blue-300 font-semibold bg-white/5"
                    : "text-white hover:text-blue-300 hover:bg-white/5"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-blue-300 rounded-r-full"></span>
                )}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <Button buttonText="Contact" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
