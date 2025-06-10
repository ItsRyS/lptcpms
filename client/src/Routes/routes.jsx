import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { lazy, Suspense } from "react"; 
import RouteTracker from "@/services/RouteTracker";
import LoadingSpinner from "@/components/common/LoadingSpinner";
// Layouts
import LayoutStudent from "@/layouts/LayoutStudent";
import LayoutTeacher from "@/layouts/LayoutTeacher";

// Protected Wrapper
import ProtectedRoute from "@/services/ProtectedRoute";

// Public Pages
const LandingPage = lazy(() => import("@/pages/LandingPage"));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const ForceChangePage = lazy(() => import("@/pages/auth/ForceChangePage"));
const NotFound = lazy(() => import("@/components/common/NotFound"));

// Student Pages
const DashboardStudent = lazy(() => import("@/pages/student/DashboardStudent"));
const ProfilePage = lazy(() => import("@/pages/student/ProfilePage"));
const OldProject = lazy(() => import("@/pages/student/OldProject"));
const RequestProject = lazy(() => import("@/pages/student/RequestProject"));
const SentDoc = lazy(() => import("@/pages/student/SentDoc"));
const TeacherInfo = lazy(() => import("@/pages/student/TeacherInfo"));
const DocumentPage = lazy(() => import("@/pages/student/DocumentPage"));

// Teacher Pages
const DashboardTeacher = lazy(() => import("@/pages/teacher/DashboardTeacher"));
const ApproveProjectRequests = lazy(() =>
  import("@/pages/teacher/ApproveProjectRequests")
);
const ReviewProjectDocuments = lazy(() =>
  import("@/pages/teacher/ReviewProjectDocuments")
);
const ApproveCompletedProjects = lazy(() =>
  import("@/pages/teacher/ApproveCompletedProjects")
);
const AddInstructorInfo = lazy(() =>
  import("@/pages/teacher/AddInstructorInfo")
);
const UploadSampleDocuments = lazy(() =>
  import("@/pages/teacher/UploadSampleDocuments")
);
const ManageUsers = lazy(() => import("@/pages/teacher/ManageUsers"));
const UploadPastProjects = lazy(() =>
  import("@/pages/teacher/UploadPastProjects")
);
const AddProjectCategory = lazy(() =>
  import("@/pages/teacher/AddProjectCategory")
);

const AppRoutes = () => {
  return (
    <Router>
      <RouteTracker />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth/force-change" element={<ForceChangePage />} />

          {/* Student Routes */}
          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRole="student">
                <LayoutStudent />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardStudent />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="old-project" element={<OldProject />} />
            <Route path="request-project" element={<RequestProject />} />
            <Route path="sent-doc" element={<SentDoc />} />
            <Route path="teacherinfo" element={<TeacherInfo />} />
            <Route path="document" element={<DocumentPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Teacher Routes */}
          <Route
            path="/teacher"
            element={
              <ProtectedRoute allowedRole="teacher">
                <LayoutTeacher />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardTeacher />} />
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

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;