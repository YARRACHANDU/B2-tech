import React from "react";
import Hero from "../../components/Recruitment/Hero";
import InfographicStats from "../../components/Recruitment/InfographicsStats";
import ProcessFlow from "../../components/Recruitment/ProcessFlow";
import SplitShowcase from "../../components/Recruitment/SplitShowcase";
import TestimonialSlider from "../../components/Recruitment/TestimonialSlider";
import CTASection from "../../components/Recruitment/CTASection";
import Nav from "../../components/nav"
import Footer from "../../components/Footer";

const RecruitmentPage = () => {
  return (
    <div>
      <div>
        <Nav/>
      </div>
     <Hero/>
     <InfographicStats/>
     <ProcessFlow/>
     <SplitShowcase/>
     <TestimonialSlider/>
     <CTASection/>
     <Footer/>
    </div>
  );
};

export default RecruitmentPage;
