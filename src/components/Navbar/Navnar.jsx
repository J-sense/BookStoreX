import { useState } from "react";
import { FaBars, FaTimes, FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Active link style
  const activeStyle = {
    color: "#4f46e5", // Indigo-600
    borderBottom: "2px solid #4f46e5",
    paddingBottom: "4px",
  };

  return (
    <nav className="bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Text Logo with Icon */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <FaBookOpen className="text-indigo-500" />
              <span>Book Vibe</span>
            </NavLink>
          </div>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex space-x-10">
              <NavLink
                to="/"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-md font-medium transition-colors"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/explore"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-md font-medium transition-colors"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Explore
              </NavLink>
              <NavLink
                to="/categories"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-md font-medium transition-colors"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Categories
              </NavLink>
              <NavLink
                to="/authors"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-md font-medium transition-colors"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Authors
              </NavLink>
            </div>
          </div>

          {/* Right side - Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/login"
              className="text-gray-600 hover:text-indigo-600 px-4 py-2 text-md font-medium transition-colors"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-md font-medium shadow-sm hover:shadow-md transition-all"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-4 space-y-2 bg-white shadow-lg">
          <NavLink
            to="/"
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={toggleMenu}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={toggleMenu}
          >
            Explore
          </NavLink>
          <NavLink
            to="/categories"
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={toggleMenu}
          >
            Categories
          </NavLink>
          <NavLink
            to="/authors"
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={toggleMenu}
          >
            Authors
          </NavLink>
          <div className="pt-2 space-y-2">
            <NavLink
              to="/login"
              className="block w-full px-4 py-3 text-center rounded-lg text-lg font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={toggleMenu}
            >
              Sign In
            </NavLink>
            <NavLink
              to="/signup"
              className="block w-full px-4 py-3 text-center rounded-full text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-colors"
              onClick={toggleMenu}
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
