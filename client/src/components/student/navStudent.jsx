import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  DocumentTextIcon,
  UserCircleIcon,
  DocumentArrowUpIcon,
  PaperAirplaneIcon,
  ArchiveBoxIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { logout } from "@/utils/Logout";

const NavStudent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    {
      path: "/student",
      label: "Dashboard",
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      path: "/student/document",
      label: "เอกสารตัวอย่าง",
      icon: <DocumentTextIcon className="w-5 h-5" />,
    },
    {
      path: "/student/profile",
      label: "Profile",
      icon: <UserCircleIcon className="w-5 h-5" />,
    },
    {
      path: "/student/request-project",
      label: "Request Project",
      icon: <DocumentArrowUpIcon className="w-5 h-5" />,
    },
    {
      path: "/student/sent-doc",
      label: "Sent Document",
      icon: <PaperAirplaneIcon className="w-5 h-5" />,
    },
    {
      path: "/student/old-project",
      label: "Old Projects",
      icon: <ArchiveBoxIcon className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <button
        onClick={handleToggleSidebar}
        type="button"
        className="fixed top-4 left-4 z-50 p-2 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isSidebarOpen && (
        <div
          onClick={handleCloseSidebar}
          className="fixed inset-0 bg-black opacity-45 z-40 sm:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-white shadow-xl transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="h-full flex flex-col px-4 py-6 overflow-y-auto">
          <Link to="/" className="flex items-center mb-8">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt="Logo"
            />
            <span className="text-xl font-bold text-blue-900">LPTC-PMS</span>
          </Link>

          <ul className="space-y-2 text-sm font-medium flex-grow">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleCloseSidebar}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition ${
                    isActive(item.path)
                      ? "bg-blue-100 text-orange-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 mt-6 px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
          >
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            ออกจากระบบ
          </button>
          
        </div>
      </aside>
    </>
  );
};

export default NavStudent;
