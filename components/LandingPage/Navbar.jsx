"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Creator AI
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#dashboard"
              className="text-gray-600 hover:text-indigo-600"
            >
              Dashboard
            </a>
            <a
              href="#analytics"
              className="text-gray-600 hover:text-indigo-600"
            >
              Analytics
            </a>
            <a
              href="#video-editor"
              className="text-gray-600 hover:text-indigo-600"
            >
              Video Editor
            </a>
            <a
              href="#idea-generator"
              className="text-gray-600 hover:text-indigo-600"
            >
              Idea Generator
            </a>
            <a
              href="#ai-assistant"
              className="text-gray-600 hover:text-indigo-600"
            >
              AI Assistant
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <button className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50">
              Login
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <a
              href="#dashboard"
              className="block px-3 py-2 text-gray-600 rounded hover:bg-gray-100 hover:text-indigo-600"
            >
              Dashboard
            </a>
            <a
              href="#analytics"
              className="block px-3 py-2 text-gray-600 rounded hover:bg-gray-100 hover:text-indigo-600"
            >
              Analytics
            </a>
            <a
              href="#video-editor"
              className="block px-3 py-2 text-gray-600 rounded hover:bg-gray-100 hover:text-indigo-600"
            >
              Video Editor
            </a>
            <a
              href="#idea-generator"
              className="block px-3 py-2 text-gray-600 rounded hover:bg-gray-100 hover:text-indigo-600"
            >
              Idea Generator
            </a>
            <a
              href="#ai-assistant"
              className="block px-3 py-2 text-gray-600 rounded hover:bg-gray-100 hover:text-indigo-600"
            >
              AI Assistant
            </a>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex items-center px-5">
              <button className="w-full px-4 py-2 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-50">
                Login
              </button>
            </div>
            <div className="mt-3 px-5">
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
