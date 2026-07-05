import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import DashboardPage from "../pages/dashboard/DashboardPage";

import AssignmentsPage from "../pages/assignments/AssignmentsPage";
import NotesPage from "../pages/notes/NotesPage";
import ResourcesPage from "../pages/resources/ResourcesPage";
import DeadlinesPage from "../pages/deadlines/DeadlinesPage";
import InternshipsPage from "../pages/internships/InternshipsPage";
import ProfilePage from "../pages/profile/ProfilePage";

import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/assignments"
          element={
            <ProtectedRoute>
              <AssignmentsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <NotesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              <ResourcesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/deadlines"
          element={
            <ProtectedRoute>
              <DeadlinesPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/internships"
          element={
            <ProtectedRoute>
              <InternshipsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}