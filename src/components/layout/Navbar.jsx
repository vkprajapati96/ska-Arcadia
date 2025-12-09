import React, { useState } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import logo from "../../image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md fixed top-0 left-0 bg-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-20">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-14 object-contain" />

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 text-[17px] font-medium">
          <li>
            <Link to="/" className="hover:text-blue-700">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-700">
              About Us
            </a>
          </li>
          <li>
            <a href="#amenities" className="hover:text-blue-700">
              Amenities
            </a>
          </li>
          <li>
            <a href="#price" className="hover:text-blue-700">
              Price
            </a>
          </li>
          <li>
            <a href="#floors" className="hover:text-blue-700">
              Floors Plan
            </a>
          </li>
          
          <li>
            <a href="#contact" className="hover:text-blue-700">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Call Button (Desktop) */}
        <a
          href="tel:+918368604905"
          className="hidden lg:flex items-center gap-2 bg-blue-900 text-white py-3 px-5 rounded-md font-semibold"
        >
          <FiPhone size={20} /> +91-836 860 4905
        </a>

        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX size={32} /> : <FiMenu size={32} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col gap-4 text-center text-lg font-medium">
            <li onClick={() => setOpen(!open)}>
              <Link to="/" className="block py-2">
                Home
              </Link>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#about" className="block py-2">
                About Us
              </a>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#amenities" className="block py-2">
                Amenities
              </a>
            </li>
                        <li onClick={() => setOpen(!open)}>
              <a href="#price" className="block py-2">
                Price
              </a>
            </li>

            <li onClick={() => setOpen(!open)}>
              <a href="#floors" className="block py-2">
                Floors Plan
              </a>
            </li>
            <li onClick={() => setOpen(!open)}>
              <a href="#contact" className="block py-2">
                Contact Us
              </a>
            </li>

            <a onClick={() => setOpen(!open)}
              href="tel:+918368604905"
              className="flex justify-center items-center gap-2 bg-blue-900 text-white py-3 mx-10 rounded-md mt-4"
            >
              <FiPhone size={20} /> +91-836 860 4905
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
