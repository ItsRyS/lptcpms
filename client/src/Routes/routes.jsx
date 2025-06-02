import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import LayoutStudent from "../layouts/layoutStudent";
import LayoutTeacher from "../layouts/layoutTeacher";

// Pages
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/auth/loginPage";
import ForceChangePage from "../pages/auth/forceChangePage";
// Student Pages
import HomeStudent from "../pages/student/home";
import ProfilePage from "../pages/student/profilePage";
import OldProject from "../pages/student/oldProject";
import RequestProject from "../pages/student/requestProject";
import SentDoc from "../pages/student/sentDoc";
import TeacherInfo from "../pages/student/teacherInfo";
import DocumentPage from "../pages/student/documentPage";

// Teacher Pages
import HomeTeacher from "../pages/teacher/home";
import ApproveProjectRequests from "../pages/teacher/ApproveProjectRequests";
import ReviewProjectDocuments from "../pages/teacher/ReviewProjectDocuments";
import ApproveCompletedProjects from "../pages/teacher/ApproveCompletedProjects";
import AddInstructorInfo from "../pages/teacher/AddInstructorInfo";
import UploadSampleDocuments from "../pages/teacher/UploadSampleDocuments";
import ManageUsers from "../pages/teacher/ManageUsers";
import UploadPastProjects from "../pages/teacher/UploadPastProjects";
import AddProjectCategory from "../pages/teacher/AddProjectCategory";
import NotFound from "../components/common/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/force-change" element={<ForceChangePage />} />

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
          <Route path="approve-requests" element={<ApproveProjectRequests />} />
          <Route path="review-documents" element={<ReviewProjectDocuments />} />
          <Route
            path="approve-completed"
            element={<ApproveCompletedProjects />}
          />
          <Route path="addinstructorinfo" element={<AddInstructorInfo />} />
          <Route
            path="upload-sample-docs"
            element={<UploadSampleDocuments />}
          />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="upload-past-projects" element={<UploadPastProjects />} />
          <Route path="*" element={<div>Page Not Found</div>} />
          <Route path="add-project-category" element={<AddProjectCategory />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
