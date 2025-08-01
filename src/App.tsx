import React from "react";
import AnimateBody from "./AnimatBody.tsx";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.tsx";
import { Routes, Route } from 'react-router-dom';
// import About  from "./about section/About.jsx";
import Home from "./Home.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}
