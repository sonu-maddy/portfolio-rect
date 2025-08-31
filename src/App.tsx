import React from "react";
import AnimateBody from "./AnimatBody.tsx";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.tsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Skills from "./pages/Skills.tsx";
import Contact from "./pages/Contact.tsx";
import Project from "./pages/Project.tsx";
import "./index.css";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <AnimateBody />
                <HeroSection />
              </>
            }
          />

          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
