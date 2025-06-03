import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const NotFound = () => {
  const location = useLocation();
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.warn("404 Error:", location.pathname);
    const storedRole = sessionStorage.getItem("role");
    setRole(storedRole);
  }, [location.pathname]);

  const getRedirectPath = () => {
    if (role === "student") return "/dashboard";
    if (role === "teacher") return "/teacher";
    return "/";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="text-center max-w-xl p-8 rounded-lg shadow-xl bg-white relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-blue-950 to-blue-900"></div>

        <h1 className="text-8xl font-extrabold text-blue-950 mb-4 tracking-tight">404</h1>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto mb-6 rounded-full"></div>
        <h2 className="text-3xl font-bold text-blue-950 mb-4">Page Not Found</h2>
        <p className="text-gray-500 text-lg mb-8 leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => navigate(getRedirectPath())}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white text-lg font-semibold hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          <ArrowLeftIcon className="h-6 w-6" />
          กลับหน้าหลัก
        </button>
      </div>
    </div>
  );
};

export default NotFound;
