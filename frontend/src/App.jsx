import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
{
  /* About page*/
}
import Companyphilosophy from "./pages/About/AboutUs";
import Corevalues from "./pages/About/OurValues";
import Founder from "./pages/About/Team";
import Growth from "./pages/About/FoundersVision";
{
  /* services page*/
}
import Recruitmentservice from "./pages/services/Recruitmentservices";
import Resumeservices from "./pages/services/Resumeservices";
import SoftwareTraining from "./pages/services/softwaretrainingprograms";
import Ui from "./pages/services/Uiuxdesign";
import Whatssets from "./pages/services/whatssets";
{
  /* backend coming routes*/
}
import Sendotp from "./backend/pages/sendotp";
import VerifyOtp from "./backend/pages/verifyotp";
import Dashboard from "./backend/pages/dashboard";
import ProtectedRoute from "./backend/protected/protectedroute";
import Scroll from "./scroll"

function App() {
  return (
    <div>
      <BrowserRouter>
         <Scroll>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Expertise" element={<Expertise />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/companyPhilosophy" element={<Companyphilosophy />} />
          <Route path="/coreValues" element={<Corevalues />} />
          <Route path="/foundersVision" element={<Founder />} />
          <Route path="/growthJourney" element={<Growth />} />
          <Route path="/recruitmentService" element={<Recruitmentservice />} />
          <Route path="/resumeServices" element={<Resumeservices />} />
          <Route path="/softwareTraining" element={<SoftwareTraining />} />
          <Route path="/uiUxDesignThinking" element={<Ui />} />
          <Route path="/whatSetsUsApart" element={<Whatssets />} />

          {/* */}
          <Route path="/sendotp" element={<Sendotp />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        </Scroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
