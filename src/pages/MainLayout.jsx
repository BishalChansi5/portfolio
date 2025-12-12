import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import MainBody from "./MainBody";
import Footer from "./Footer";

const MainLayout = () => {
  const mainBodyRef = useRef(null);
  const handleNavigation = (section) => {
    if (section === "home") {
      mainBodyRef.current?.scrollToHome();
    }
    if (section === "projects") {
      mainBodyRef.current?.scrollToProjects();
    }
    if (section === "about") {
      mainBodyRef.current?.scrollToAbout();
    }
    if (section === "contact") {
      mainBodyRef.current?.scrollToContact();
    }
    if (section === "experience") {
      mainBodyRef.current?.scrollToExperience();
    }
  };
  return (
    <>
      <Navbar onNavigate={handleNavigation} />
      <main className="container mx-auto px-6">
        <MainBody ref={mainBodyRef} />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
