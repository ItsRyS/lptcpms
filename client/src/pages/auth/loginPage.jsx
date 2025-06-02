import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          role: userType,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("userId", data.userId);
      sessionStorage.setItem("role", data.role);

      if (data.isFirstLogin) {
        window.location.href = "/auth/force-change";
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl w-full">
        {/* Left side */}
        <div className="flex-1 p-8 lg:p-12 bg-gradient-to-r from-blue-950 to-blue-900 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-8 text-center lg:text-left">
            Lampang Tech College
          </h1>

          <ul className="space-y-6 text-left">
            <li className="flex items-start space-x-3">
              <div className="text-orange-500">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Get started quickly</h3>
                <p className="text-gray-100 text-sm">
                  Integrate with developer-friendly APIs or choose low-code.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <div className="text-orange-500">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Support any business model
                </h3>
                <p className="text-gray-100 text-sm">
                  Host code privately or scale easily.
                </p>
              </div>
            </li>

            <li className="flex items-start space-x-3">
              <div className="text-orange-500">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Join millions of businesses
                </h3>
                <p className="text-gray-100 text-sm">
                  Trusted by startups and enterprises worldwide.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="flex-1 bg-white flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
              Welcome Back!
            </h2>

            {/* User Type Selection */}
            <div className="mb-6">
              <label
                htmlFor="userType"
                className="block text-sm font-medium text-gray-700 mb-2 text-left"
              >
                Login as:
              </label>
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-base"
              >
                <option value="student">Student-Inw</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1 text-left"
                >
                  {userType === "student" ? "Student ID" : "Email"}
                </label>
                <input
                  id="username"
                  type={userType === "teacher" ? "email" : "text"}
                  placeholder={
                    userType === "student"
                      ? "Enter your Student ID"
                      : "Enter your Email"
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-base"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1 text-left"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none text-base"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-700">
                  <input type="checkbox" className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-blue-600 text-sm hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300 ease-in-out shadow-md"
              >
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              อยากกลับไปหน้าแรกหรอ?{" "}
              <Link to="/" className="text-blue-600 hover:underline font-medium">
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