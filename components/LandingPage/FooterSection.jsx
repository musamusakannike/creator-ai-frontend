import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand and Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-white">Creator AI</h2>
            <p className="mt-4 text-gray-400">
              Elevate your YouTube presence with AI-powered tools to analyze, create, and grow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  AI Assistant
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Video Editor
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500 transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
            <p className="mt-4 text-gray-400">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <form className="mt-6 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Socials and Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-indigo-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 mt-4 md:mt-0">
            © 2025 Creator AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
