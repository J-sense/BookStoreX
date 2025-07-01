import { useContext, useState } from "react";
import { FaBars, FaTimes, FaBookOpen, FaUser, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/Authprovider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  // Active link style
  const activeStyle = {
    color: "#374151", // gray-700
    borderBottom: "2px solid #374151",
    paddingBottom: "4px",
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink
              to="/"
              className="flex items-center space-x-2 text-2xl font-light text-gray-800 hover:text-gray-900 transition-colors"
            >
              <FaBookOpen className="text-gray-700" />
              <span className="font-semibold">BookStorX</span>
            </NavLink>
          </div>

          {/* Middle - Navigation Links */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex space-x-8">
              <NavLink
                to="/"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 text-md font-medium transition-colors"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/explore"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 text-md font-medium transition-colors"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Explore
              </NavLink>
              <NavLink
                to="/categories"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 text-md font-medium transition-colors"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Categories
              </NavLink>
              <NavLink
                to="/authors"
                className="text-gray-600 hover:text-gray-800 px-3 py-2 text-md font-medium transition-colors"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Authors
              </NavLink>
            </div>
          </div>

          {/* Right side - Search and Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaSearch className="h-5 w-5" />
            </button>

            {user ? (
              <div className="flex items-center space-x-4">
                <NavLink
                  to="/dashboard"
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 px-3 py-2 text-md font-medium transition-colors"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 text-gray-600">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <FaUser className="h-4 w-4" />
                    )}
                  </div>
                  <span>Dashboard</span>
                </NavLink>
                <button
                  onClick={handleLogOut}
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 text-md font-medium transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 text-md font-medium transition-colors"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-md font-medium shadow-sm hover:shadow-md transition-all"
                >
                  Get Started
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-50 focus:outline-none transition-colors"
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

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="md:hidden py-3 px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books, authors..."
                className="w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg border-t border-gray-100">
          <NavLink
            to="/"
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={toggleMenu}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/explore"
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={toggleMenu}
          >
            Explore
          </NavLink>
          <NavLink
            to="/categories"
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={toggleMenu}
          >
            Categories
          </NavLink>
          <NavLink
            to="/authors"
            className="block px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={toggleMenu}
          >
            Authors
          </NavLink>
          <div className="pt-2 space-y-2">
            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="flex items-center space-x-3  w-full px-4 py-3 rounded-lg text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={toggleMenu}
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 text-gray-600">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <FaUser className="h-4 w-4" />
                    )}
                  </div>
                  <span>Dashboard</span>
                </NavLink>
                <button
                  onClick={() => {
                    handleLogOut();
                    toggleMenu();
                  }}
                  className="block w-full px-4 py-3 text-left rounded-lg text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="block w-full px-4 py-3 text-center rounded-lg text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  onClick={toggleMenu}
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="block w-full px-4 py-3 text-center rounded-full text-lg font-medium text-white bg-gray-800 hover:bg-gray-700 shadow-sm transition-colors"
                  onClick={toggleMenu}
                >
                  Get Started
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
