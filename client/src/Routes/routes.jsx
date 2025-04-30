import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import LayoutStudent from "../layouts/layoutStudent";
import LayoutTeacher from "../layouts/layoutTeacher";

// Pages
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/auth/loginPage";
import HomeStudent from "../pages/student/home";
import HomeTeacher from "../pages/teacher/home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Student Routes */}
        <Route path="/student" element={<LayoutStudent />}>
          <Route index element={<HomeStudent />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<LayoutTeacher />}>
          <Route index element={<HomeTeacher />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>

        {/* Global fallback */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
