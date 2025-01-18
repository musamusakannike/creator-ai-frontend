"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: "Overview Dashboard", href: "/dashboard" },
  { name: "Ideas", href: "/ideas" },
  { name: "Video Generation", href: "/video-generation" },
  { name: "Optimize Videos", href: "/optimize-videos" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg h-full flex flex-col">
      <div className="p-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">Dashboard</div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={`block px-4 py-2 rounded-lg transition-colors text-sm font-medium
                    ${pathname === link.href
                      ? "bg-indigo-500 text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 hover:text-indigo-800 dark:hover:text-white"}`}
                >
                  {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
