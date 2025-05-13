// Updated LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import AboutSection from "../components/common/AboutSection";
import ContactForm from "../components/common/ContactForm";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import HeroSection from "../components/common/HeroSection";
import ProgramsSection from "../components/common/ProgramsSection";
import StaffDirectory from "../components/common/StaffDirectory";

const LandingPage = () => {
  return (
   <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StaffDirectory />
        <ProgramsSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
