import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentApplicationAccessControl from "./StudentApplicationAccessControl";
import PersonalDetails from "./PersonalDetails";
import GeneralInformation from "./GeneralInformation";
import EducationalBackground from "./EducationalBackground";
import HealthInformation from "./HealthInformation";
import ParentInformation from "./ParentInformation";
import OtherRelatives from "./OtherRelatives";

const StudentApplicationRoutes = () => {
  return (
    <Routes>
    <Route path={"/student-application/general-information"} element={<StudentApplicationAccessControl><GeneralInformation /></StudentApplicationAccessControl>} />
      <Route path={"/student-application/personal-details"} element={<StudentApplicationAccessControl><PersonalDetails /></StudentApplicationAccessControl>} />
      <Route path={"/student-application/health-information"} element={<StudentApplicationAccessControl><HealthInformation /></StudentApplicationAccessControl>} />
      <Route path={"/student-application/educational-background"} element={<StudentApplicationAccessControl><EducationalBackground /></StudentApplicationAccessControl>} />
      <Route path={"/student-application/parent-information"} element={<StudentApplicationAccessControl><ParentInformation /></StudentApplicationAccessControl>} />
      <Route path={"/student-application/other-relatives"} element={<StudentApplicationAccessControl><OtherRelatives /></StudentApplicationAccessControl>} />

    </Routes>
  );
};

export default StudentApplicationRoutes;
