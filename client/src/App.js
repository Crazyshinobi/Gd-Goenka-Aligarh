<<<<<<< HEAD
import React from 'react'
import './App.css'
import 'animate.css';
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
=======
import React from "react";
import "./App.css";
import "animate.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import PrincipalMessage from "./pages/PrincipalMessage";
import ManagementPage from "./pages/ManagementPage";
import VisionAndMission from "./pages/VisionAndMission";
import { Dashboard } from "./admin/Dashboard";
import { AdminLogin } from "./admin/pages/auth/AdminLogin";
import { ForgotPassword } from "./admin/pages/auth/ForgotPassword";
import PrivateRoute from "./admin/components/PrivateRoute";
>>>>>>> 5ba8d78a554fc160ce0fff21724447f61c37982b

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
    </Routes>
  );
}

export default App;
