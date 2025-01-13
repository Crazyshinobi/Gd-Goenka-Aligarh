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
    <StudentApplicationAccessControl>
      <Routes>
        <Route path="/general-information" element={<GeneralInformation />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/health-information" element={<HealthInformation />} />
        <Route path="/educational-background" element={<EducationalBackground />} />
        <Route path="/parent-information" element={<ParentInformation />} />
        <Route path="/other-relatives" element={<OtherRelatives />} />
        {/* Fallback route for invalid paths */}
        <Route path="*" element={<GeneralInformation />} />
      </Routes>
    </StudentApplicationAccessControl>
  );
};

export default StudentApplicationRoutes;