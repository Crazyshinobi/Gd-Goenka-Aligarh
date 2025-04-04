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
import Activities from "./pages/Activities";
import ImageGallery from "./pages/ImageGallery";
import ContactForm from "./pages/ContactForm";
import MandatoryDisclosure from "./pages/MandatoryDisclosure";
import GoenkanPursuits from "./pages/GoenkanPursuits";
import FeeStructure from "./pages/FeeStructure";
import AdmissionForm from "./pages/AdmissionForm";
import CurrentOpening from "./pages/CurrentOpening";
import JobApplicationForm from "./pages/JobApplicationForm";
import RecognisationCet from "./pages/Recognisation-Cet-Nur-to-8";
// Admin Imports
import { Dashboard } from "./admin/Dashboard";
import { AdminLogin } from "./admin/pages/auth/AdminLogin";
import { ForgotPassword } from "./admin/pages/auth/ForgotPassword";
import { Error404 } from "./pages/Error404";
import { ViewContact } from "./admin/pages/contact/ViewContact";
import { AddJob } from "./admin/pages/job/AddJob";
import { ViewJob } from "./admin/pages/job/ViewJob";
import PrivateRoute from "./admin/components/PrivateRoute";
import { ViewAddmission } from "./admin/pages/admission/ViewAddmission";
import { ViewAdmissionApplication } from "./admin/pages/admissionApplication/ViewAdmissionApplication";
import { AddGallery } from "./admin/pages/gallery/AddGallery";
import { ViewGallery } from "./admin/pages/gallery/ViewGallery";
import { AddFaculty } from "./admin/pages/faculty/AddFaculty";
import { ViewFaculty } from "./admin/pages/faculty/ViewFaculty";
import { ViewJobApplication } from "./admin/pages/jobApplication/ViewJobApplication";
import { ViewContent } from "./admin/pages/content/ViewContent";
import { AddContent } from "./admin/pages/content/AddContent";
import { ViewAdmissionApplicationQuery } from "./admin/pages/admissionApplicationQuery/ViewAdmissionApplicationQuery";

// User Import
import AdmissionSubmission from "./pages/AdmissionSubmission";
import UserPrivateRoute from "./user/components/UserPrivateRoute";
import { ViewUser } from "./admin/pages/user/ViewUser";
import { AddUser } from "./admin/pages/user/AddUser";
import { UserDashboard } from "./user/UserDashboard";
import { UserForgotPassword } from "./user/auth/UserForgetPassword";
import { FormProvider } from "./user/forms/FormContext";
import QueryForm from "./user/forms/QueryForm";
import PaymentFailure from "./user/payment/PaymentFailure";
import PaymentSuccess from "./user/payment/PaymentSuccess";
import { MultiStepForm } from "./user/route/MultStepForm";
import PaymentSummary from "./user/payment/PaymentSummary";
import { ViewPaymentTransaction } from "./admin/pages/paymentTransaction/ViewPaymentTransaction";


import { StudentDataPdf } from "./user/submittedData/StudentDataPdf";
import {PaymentReceipt} from "./user/payment/PaymentReceipt";
import FacultyPage from "./pages/FacultyPage";
import AgeCriteria from "./pages/AgeCriteria";

function App() {
  return (
    <FormProvider>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/about/principal-message"}
          element={<PrincipalMessage />}
        />
        <Route path={"/about/Management"} element={<ManagementPage />} />
        <Route
          path={"/about/vision-and-mission"}
          element={<VisionAndMission />}
        />
        <Route
          path={"/about/mandatory-disclosure"}
          element={<MandatoryDisclosure />}
        />
        <Route
          path={"/academics/faculty-&-curriculum"}
          element={<FacultyAndCurriculum />}
        />
        <Route
          path={"/academics/teaching-methodology"}
          element={<TeachingMethodology />}
        />
        <Route
          path={"/academics/igniting-minds"}
          element={<IgnitingMindsPage />}
        />
        <Route
          path={"/academics/competition-&-awards"}
          element={<CompetitionAwards />}
        />
        <Route
          path={"/academics/authorised-book-seller"}
          element={<BookSeller />}
        />
        <Route path={"/beyond-academics"} element={<BeyondAcademics />} />
        <Route
          path={"/our-campus/class-infrastructure"}
          element={<ClassInfrastructure />}
        />
        <Route
          path={"/our-campus/labs-and-library"}
          element={<LabsAndLibrary />}
        />
        <Route path={"/activities"} element={<Activities />} />
        <Route path={"/gallery"} element={<ImageGallery />} />
        <Route path={"/contact-us"} element={<ContactForm />} />
        <Route path={"/our-faculty"} element={<FacultyPage />} />
        <Route
          path={"/academics/goenkan-pursuits"}
          element={<GoenkanPursuits />}
        />
        <Route path={"/career/current-openings"} element={<CurrentOpening />} />
        <Route
          path={"/job-application-form"}
          element={<JobApplicationForm />}
        />
        <Route
          path={"/fee-payment/fees-structure"}
          element={<FeeStructure />}
        />

<Route
          path={"/admission/age-criteria"}
          element={<AgeCriteria />}
        />

        <Route
          path={"/admission/application-form"}
          element={<AdmissionForm />}
        />
        <Route
          path="/admission/application-form/login"
          element={<AdmissionForm />}
        />
        <Route
          path={"/admission/application-submission"}
          element={<AdmissionSubmission />}
        />
        

        <Route
          path={"/user/forgot-password"}
          element={<UserForgotPassword />}
        />

        {/* User Protected Routes */}

        <Route
          path={"/user/dashboard"}
          element={
            <UserPrivateRoute>
              <UserDashboard />
            </UserPrivateRoute>
          }
        />
       

        {/* Query Form */}
        <Route
          path={"/user/admission-query"}
          element={<UserPrivateRoute>{<QueryForm />}</UserPrivateRoute>}
        />

        {/* Payment summary */}
        <Route
          path={"/user/payment-summary"}
          element={<UserPrivateRoute>{<PaymentSummary/>}</UserPrivateRoute>}
        /> 
        <Route path="/user/steps"   element={<UserPrivateRoute>{<MultiStepForm/>}</UserPrivateRoute>}/>
        <Route path={"/payment-success"} element={<PaymentSuccess />} />
        <Route path={"/payment-failure"} element={<PaymentFailure />} />
        
        
        <Route path={"/student-data"} element={<StudentDataPdf />} />
        <Route path={"/payment-receipt"} element={<PaymentReceipt />} />


        <Route
          path={"/about/mandatory-disclosure/RecognisationCet"}
          element={<RecognisationCet />}
        />

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
          path={"/admin/add-user"}
          element={
            <PrivateRoute>
              <AddUser />
            </PrivateRoute>
          }
        />
        <Route
          path={"/admin/view-user"}
          element={
            <PrivateRoute>
              <ViewUser />
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
        {/* Admission Enquiry */}
        <Route
          path={"/admin/view-admission"}
          element={
            <PrivateRoute>
              <ViewAddmission />
            </PrivateRoute>
          }
        />
        {/* Admission Application */}
        <Route
          path={"/admin/view-admission-application"}
          element={
            <PrivateRoute>
              <ViewAdmissionApplication />
            </PrivateRoute>
          }
        />
        {/* Admission Application Query */}
        <Route
          path={"/admin/view-admission-application-query"}
          element={
            <PrivateRoute>
              <ViewAdmissionApplicationQuery />
            </PrivateRoute>
          }
        />
        {/* Admission Application Payment Transaction */}
        <Route
          path={"/admin/view-payment-transaction"}
          element={
            <PrivateRoute>
              <ViewPaymentTransaction />
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
        {/* Faculty  */}
        <Route
          path={"/admin/add-faculty"}
          element={
            <PrivateRoute>
              <AddFaculty />
            </PrivateRoute>
          }
        />
        <Route
          path={"/admin/view-faculty"}
          element={
            <PrivateRoute>
              <ViewFaculty />
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
    </FormProvider>
  );
}

export default App;
