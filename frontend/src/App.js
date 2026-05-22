import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// COMPONENTS
import Navbar from "./components/Navbar";

import ProtectedRoute from "./components/ProtectedRoute";

import AdminRoute from "./components/AdminRoute";


// PAGES
import Jobs from "./pages/Jobs";

import Register from "./pages/Register";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import SavedJobs from "./pages/SavedJobs";

import AddJob from "./pages/AddJob";

import ResumeUpload from "./pages/ResumeUpload";


function App() {

  return (

    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar />


      {/* ROUTES */}
      <Routes>


        {/* HOME */}
        <Route
          path="/"
          element={<Jobs />}
        />


        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />


        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />


        {/* SAVED JOBS */}
        <Route
          path="/saved-jobs"
          element={<SavedJobs />}
        />


        {/* DASHBOARD */}
        <Route

          path="/dashboard"

          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />


        {/* ADMIN ONLY */}
        <Route

          path="/add-job"

          element={

            <AdminRoute>

              <AddJob />

            </AdminRoute>
          }
        />


        {/* RESUME UPLOAD */}
        <Route

          path="/upload-resume"

          element={

            <ProtectedRoute>

              <ResumeUpload />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;