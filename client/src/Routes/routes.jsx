import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import LayoutStudent from "../layouts/layoutStudent";
import LayoutTeacher from "../layouts/layoutTeacher";

// Pages
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/auth/loginPage";
import HomeStudent from "../pages/student/home";
import ProfilePage from "../pages/student/profilePage";
import OldProject from "../pages/student/oldProject";
import RequestProject from "../pages/student/requestProject";
import SentDoc from "../pages/student/sentDoc";
import TeacherInfo from "../pages/student/teacherInfo";
import DocumentPage from "../pages/student/documentPage";
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
          <Route path="profile" element={<ProfilePage />} />
          <Route path="oldproject" element={<OldProject />} />
          <Route path="request" element={<RequestProject />} />
          <Route path="sentdoc" element={<SentDoc />} />
          <Route path="teacherinfo" element={<TeacherInfo />} />
          <Route path="document" element={<DocumentPage />} />
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
