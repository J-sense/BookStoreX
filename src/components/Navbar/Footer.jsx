import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaBookOpen,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <NavLink to="/" className="flex items-center space-x-2">
              <FaBookOpen className="text-indigo-400 text-2xl" />
              <span className="text-2xl font-bold text-indigo-400">
                Book Vibe
              </span>
            </NavLink>
            <p className="text-gray-400">
              Your gateway to endless stories. Discover, read, and share your
              literary journey with us.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/explore"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Explore Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/categories"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/authors"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Popular Authors
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faq"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shipping"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Shipping Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/returns"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Returns & Refunds
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to get updates on new releases and special offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Book Vibe. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <NavLink
              to="/privacy"
              className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/terms"
              className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
            >
              Terms of Service
            </NavLink>
            <NavLink
              to="/cookies"
              className="text-gray-400 hover:text-indigo-400 text-sm transition-colors"
            >
              Cookie Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
