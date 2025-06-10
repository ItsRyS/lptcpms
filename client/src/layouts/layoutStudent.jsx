import React from "react";
import { Outlet } from "react-router-dom";
import NavStudent from "@/components/student/NavStudent";

const LayoutStudent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavStudent />
      <main className="flex-grow p-6 bg-gray-100 pt-20 pl-0 sm:pt-0 sm:pl-64">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutStudent;
