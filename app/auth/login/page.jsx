"use client";

import React, { useState } from "react";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      // Redirect to the backend Google OAuth2 login route
      window.location.href = "http://localhost:8080/auth/google";
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Welcome back! Log in using your Google account.
        </p>

        {/* Illustration */}
        <div className="flex justify-center my-8">
          <img
            src="https://img.icons8.com/clouds/100/000000/google-logo.png"
            alt="Google"
            className="w-24"
          />
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className={`w-full py-3 rounded-lg flex items-center justify-center font-medium transition ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.283 10.356h-8.327v3.451h4.825a4.162 4.162 0 01-1.805 2.729v2.234h2.928c1.712-1.584 2.703-3.92 2.703-6.471 0-.582-.05-1.152-.139-1.717h-.185z"
                />
              </svg>
              Log in with Google
            </>
          )}
        </button>

        {/* Info Section */}
        <p className="text-sm text-gray-500 text-center mt-4">
          Don&apos;t have an account?{" "}
          <a href="/auth/signup" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
