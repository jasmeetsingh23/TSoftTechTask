import { Link } from "react-router-dom";
import logo from "../assets/l.png"; // Adjust the path for your main logo
import searchIcon from "../assets/f.png"; // Adjust the path for your search icon

export default function Header() {
  return (
    <div className="flex justify-center">
      <header className="w-[1440px] h-[85px] bg-[#21243d] text-white p-4 flex items-center justify-between">
        {/* Left Side Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Main Logo"
            className="h-12 transition duration-300 ease-in-out transform hover:scale-105" // Add hover effect
          />
        </div>

        {/* Centered Navigation Links */}
        <nav className="flex space-x-8 mx-auto">
          <Link
            to="/"
            className="text-[25px] text-white font-normal font-montserrat hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="text-[25px] text-white font-normal font-montserrat hover:text-gray-300"
          >
            Product
          </Link>
          <Link
            to="/promo"
            className="text-[25px] text-white font-normal font-montserrat hover:text-gray-300"
          >
            Promo
          </Link>
          <Link
            to="/about"
            className="text-[25px] text-white font-normal font-montserrat hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-[25px] text-white font-normal font-montserrat hover:text-gray-300"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side Search Icon */}
        <div className="flex items-center">
          <img
            src={searchIcon}
            alt="Search"
            className="h-10 w-10 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110" // Add hover effect
          />
        </div>
      </header>
    </div>
  );
}
