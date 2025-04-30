import React, { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [userType, setUserType] = useState("student");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full">
        {/* Left side */}
        <div className="flex-1 p-8 lg:p-12">
          <h1 className="text-3xl font-bold text-blue-600 mb-8">
            Lampang Tech College
          </h1>

          <ul className="space-y-6">
            <li className="flex items-start space-x-3">
              <div className="text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15H6v-2.414l8.293-8.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Get started quickly
                </h3>
                <p className="text-gray-600 text-sm">
                  Integrate with developer-friendly APIs or choose low-code.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <div className="text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15H6v-2.414l8.293-8.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Support any business model
                </h3>
                <p className="text-gray-600 text-sm">
                  Host code privately or scale easily.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <div className="text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15H6v-2.414l8.293-8.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Join millions of businesses
                </h3>
                <p className="text-gray-600 text-sm">
                  Trusted by startups and enterprises worldwide.
                </p>
              </div>
            </li>
          </ul>

          
        </div>

        {/* Right side */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Welcome
            </h2>

            {/* User Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Login as:
              </label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {userType === "student"
                    ? "Student ID"
                    : "National ID Card Number"}
                </label>
                <input
                  type="text"
                  placeholder={
                    userType === "student"
                      ? "Enter your Student ID"
                      : "Enter your National ID"
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-700">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <a href="#" className="text-blue-600 text-sm hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition"
              >
                Sign in
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              อยากกลับไปหน้าแรกหรอ?{" "}
              <Link to="/" className="text-blue-600 hover:underline">
                กดดิ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
