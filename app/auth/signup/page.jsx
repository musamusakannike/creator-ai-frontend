import React from "react";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Sign Up
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Get started with Creator AI. Sign up using your Google account linked
          to a YouTube channel.
        </p>

        {/* Illustration */}
        <div className="flex justify-center my-8">
          <img
            src="https://img.icons8.com/clouds/100/000000/google-logo.png"
            alt="Google"
            className="w-24"
          />
        </div>

        {/* Google Sign-Up Button */}
        <button className="w-full bg-red-500 text-white py-3 rounded-lg flex items-center justify-center font-medium hover:bg-red-600 transition">
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
          Sign up with Google
        </button>

        {/* Info Section */}
        <p className="text-sm text-gray-500 text-center mt-4">
          By signing up, you agree to our{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
