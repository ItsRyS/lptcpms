import React from "react";
import { Outlet } from "react-router-dom";
import NavTeacher from "@/components/teacher/navTeacher";

const LayoutTeacher = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavTeacher />

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutTeacher;
