"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-indigo-600 dark:text-indigo-400">
          404
        </h1>
        <p className="mt-4 text-lg">
          The page you are looking for does not exist.
        </p>
        <div className="flex gap-x-2 justify-center items-center">
          <button
            onClick={() => router.back()}
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
