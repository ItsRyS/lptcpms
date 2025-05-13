import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-600 mb-6">404</h1>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-6"></div>
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-black mb-8">
          The page you are looking for doesn't exist or has been moved. Please
          go back to the homepage.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 text-white text-lg font-medium hover:bg-orange-500 transition-all"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
