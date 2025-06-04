import React from "react";
import { Outlet } from "react-router-dom";
import NavStudent from "@/components/student/NavStudent";

const LayoutStudent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavStudent />

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutStudent;
