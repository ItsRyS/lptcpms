import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layouts
import LayoutStudent from "@/layouts/layoutStudent";
import LayoutTeacher from "@/layouts/layoutTeacher";

// Pages
import LoginPage from "@/pages/auth/loginPage";
import ForceChangePage from "@/pages/auth/forceChangePage";

// Student Pages
import HomeStudent from "@/pages/student/dashboardStudent";
import ProfilePage from "@/pages/student/profilePage";
import OldProject from "@/pages/student/oldProject";
import RequestProject from "@/pages/student/requestProject";
import SentDoc from "@/pages/student/sentDoc";
import TeacherInfo from "@/pages/student/teacherInfo";
import DocumentPage from "@/pages/student/documentPage";

// Teacher Pages
import HomeTeacher from "@/pages/teacher/DashboardTeacher";
import ApproveProjectRequests from "@/pages/teacher/ApproveProjectRequests";
import ReviewProjectDocuments from "@/pages/teacher/ReviewProjectDocuments";
import ApproveCompletedProjects from "@/pages/teacher/ApproveCompletedProjects";
import AddInstructorInfo from "@/pages/teacher/AddInstructorInfo";
import UploadSampleDocuments from "@/pages/teacher/UploadSampleDocuments";
import ManageUsers from "@/pages/teacher/ManageUsers";
import UploadPastProjects from "@/pages/teacher/UploadPastProjects";
import AddProjectCategory from "@/pages/teacher/AddProjectCategory";
import NotFound from "@/components/common/NotFound";

const RedirectByRole = () => {
  const role = sessionStorage.getItem("role");
  if (role === "student") return <Navigate to="/student/dashboard" replace />;
  if (role === "teacher") return <Navigate to="/teacher" replace />;
  return <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<RedirectByRole />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/force-change" element={<ForceChangePage />} />

        {/* Student Routes */}
        <Route path="/student" element={<LayoutStudent />}>
          <Route path="dashboard" element={<HomeStudent />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="old-project" element={<OldProject />} />
          <Route path="request-project" element={<RequestProject />} />
          <Route path="sent-doc" element={<SentDoc />} />
          <Route path="teacherinfo" element={<TeacherInfo />} />
          <Route path="document" element={<DocumentPage />} />
          <Route path="*" element={<NotFound />} />
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
          <Route path="add-project-category" element={<AddProjectCategory />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Global Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
