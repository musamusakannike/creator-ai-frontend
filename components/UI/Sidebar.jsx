"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Overview Dashboard", href: "/dashboard" },
  { name: "Ideas", href: "/ideas" },
  { name: "Video Generation", href: "/video-generation" },
  { name: "Optimize Videos", href: "/optimize-videos" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-500 text-white rounded-lg shadow-lg"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-white dark:bg-gray-800 shadow-lg h-full flex flex-col z-40 w-64 md:translate-x-0 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Dashboard
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
                    pathname === link.href
                      ? "bg-indigo-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 hover:text-indigo-800 dark:hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)} // Close sidebar after clicking a link
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
