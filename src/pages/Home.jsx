
import React from "react";
import NavBar from "../NavBar.jsx";
import AnimateBody from "../AnimatBody.tsx";
import HeroSection from "../HeroSection.tsx";
import Footer from "../Footer.tsx";
import './index.css';

export default function Home() {
  return (
    <>
      <NavBar />
      <AnimateBody />
       <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Skills" element={<Skills/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Project" element={<Project/>} />
          </Routes>
      <HeroSection />
      <Footer />
    </>
  );
}
