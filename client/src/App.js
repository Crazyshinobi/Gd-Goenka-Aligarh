import React from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import PrincipalMessage from './pages/PrincipalMessage';
import ManagementPage from './pages/ManagementPage';
import VisionAndMission from './pages/VisionAndMission';
import FacultyAndCurriculum from './pages/FacultyAndCurriculum';
import TeachingMethodology from './pages/TeachingMethodology';
import IgnitingMindsPage from './pages/IgnitingMindsPage';
import CompetitionAwards from './pages/CompetitionAwards';
import BookSeller from './pages/BookSeller';
import { Dashboard } from "./admin/Dashboard";
import { AdminLogin } from "./admin/pages/auth/AdminLogin";
import { ForgotPassword } from "./admin/pages/auth/ForgotPassword";
import { Error404 } from "./pages/Error404";
import { AddAdmin } from "./admin/pages/admins/AddAdmin";
import { ViewContact } from "./admin/pages/contact/ViewContact";
import PrivateRoute from "./admin/components/PrivateRoute";
import BeyondAcademics from './pages/BeyondAcademics';
import ClassInfrastructure from './pages/ClassInfrastructure';
import LabsAndLibrary from './pages/LabsAndLibrary';
import Cafeteria from './pages/Cafeteria';
import Activities from './pages/Activities';
import ImageGallery from './pages/ImageGallery';
import ContactForm from './pages/ContactForm';
import MandatoryDisclosure from './pages/MandatoryDisclosure';
import GoenkanPursuits from './pages/GoenkanPursuits';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about/principal-message"} element={<PrincipalMessage/>}/>
      <Route path={"/about/Management"} element={<ManagementPage/>}/>
      <Route path={"/about/vision-and-mission"} element={<VisionAndMission/>}/>
      <Route path={"/about/mandatory-disclosure"} element={<MandatoryDisclosure/>}/>
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
      <Route path={"/gallery"} element={<ImageGallery/>}/>
      <Route path={"/contact-us"} element={<ContactForm/>}/>
      <Route path={"/goenkan-pursuits"} element={<GoenkanPursuits/>}/>



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

      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default App;