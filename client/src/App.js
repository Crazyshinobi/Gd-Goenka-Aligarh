import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrincipalMessage from "./pages/PrincipalMessage";
import ManagementPage from "./pages/ManagementPage";
import VisionAndMission from "./pages/VisionAndMission";
import FacultyAndCurriculum from "./pages/FacultyAndCurriculum";
import TeachingMethodology from "./pages/TeachingMethodology";
import IgnitingMindsPage from "./pages/IgnitingMindsPage";
import CompetitionAwards from "./pages/CompetitionAwards";
import BookSeller from "./pages/BookSeller";
import BeyondAcademics from "./pages/BeyondAcademics";
import ClassInfrastructure from "./pages/ClassInfrastructure";
import LabsAndLibrary from "./pages/LabsAndLibrary";
import Cafeteria from "./pages/Cafeteria";
import Activities from "./pages/Activities";
// Admin Imports 
import { Dashboard } from "./admin/Dashboard";
import { AdminLogin } from "./admin/pages/auth/AdminLogin";
import { ForgotPassword } from "./admin/pages/auth/ForgotPassword";
import { Error404 } from "./pages/Error404";
import { AddAdmin } from "./admin/pages/admins/AddAdmin";
import { ViewContact } from "./admin/pages/contact/ViewContact";
import { AddJob } from "./admin/pages/job/AddJob";
import { ViewJob } from "./admin/pages/job/ViewJob";
import PrivateRoute from "./admin/components/PrivateRoute";
import { ViewAddmission } from "./admin/pages/admission/ViewAddmission";
import { AddGallery } from "./admin/pages/gallery/AddGallery";
import { ViewGallery } from "./admin/pages/gallery/ViewGallery";
import { ViewJobApplication } from "./admin/pages/jobApplication/ViewJobApplication";
import { ViewContent } from "./admin/pages/content/ViewContent";
import { AddContent } from "./admin/pages/content/AddContent";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about/principal-message"} element={<PrincipalMessage/>}/>
      <Route path={"/about/Management"} element={<ManagementPage/>}/>
      <Route path={"/about/vision-and-mission"} element={<VisionAndMission/>}/>
      <Route path={"/academics/faculty-&-curriculum"} element={<FacultyAndCurriculum/>}/>
      <Route path={"/academics/teaching-methodology"} element={<TeachingMethodology/>}/>
      <Route path={"/academics/igniting-minds"} element={<IgnitingMindsPage/>}/>
      <Route path={"/academics/competition-&-awards"} element={<CompetitionAwards/>}/>
      <Route path={"/academics/authorised-book-seller"} element={<BookSeller/>}/>
      <Route path={"/beyond-academics"} element={<BeyondAcademics/>}/>
      <Route path={"/our-campus/class-infrastructure"} element={<ClassInfrastructure/>}/>
      <Route path={"/our-campus/labs-and-library"} element={<LabsAndLibrary/>}/>
      <Route path={"/our-campus/cafeteria"} element={<Cafeteria/>}/>
      <Route path={"/activities"} element={<Activities/>}/>

      {/* Admin Routes */}
      <Route path={"/admin"} element={<AdminLogin />} />
      <Route path={"/admin/forgot-password"} element={<ForgotPassword />} />

      {/* Admin Protected Routes */}
      {/* Dashboard */}
      <Route
        path={"/admin/dashboard"}
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      {/* Admin  */}
      <Route
        path={"/admin/add-admin"}
        element={
          <PrivateRoute>
            <AddAdmin />
          </PrivateRoute>
        }
      />
      {/* Contact */}
      <Route
        path={"/admin/view-contact"}
        element={
          <PrivateRoute>
            <ViewContact />
          </PrivateRoute>
        }
      />
      {/* Job  */}
      <Route
        path={"/admin/add-job"}
        element={
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        }
      />
      <Route
        path={"/admin/view-job"}
        element={
          <PrivateRoute>
            <ViewJob />
          </PrivateRoute>
        }
      />
      {/* Admission Applications  */}
      <Route
        path={"/admin/view-admission"}
        element={
          <PrivateRoute>
            <ViewAddmission />
          </PrivateRoute>
        }
      />
      {/* Gallery  */}
      <Route
        path={"/admin/add-gallery"}
        element={
          <PrivateRoute>
            <AddGallery />
          </PrivateRoute>
        }
      />
      <Route
        path={"/admin/view-gallery"}
        element={
          <PrivateRoute>
            <ViewGallery />
          </PrivateRoute>
        }
      />
      {/* Content  */}
      <Route
        path={"/admin/add-content"}
        element={
          <PrivateRoute>
            <AddContent />
          </PrivateRoute>
        }
      />
      <Route
        path={"/admin/view-content"}
        element={
          <PrivateRoute>
            <ViewContent />
          </PrivateRoute>
        }
      />

      {/* Job Applications  */}
      <Route
        path={"/admin/view-job-applications"}
        element={
          <PrivateRoute>
            <ViewJobApplication />
          </PrivateRoute>
        }
      />

      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
