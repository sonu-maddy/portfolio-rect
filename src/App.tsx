import React from "react";
import AnimateBody from "./AnimatBody.tsx";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.tsx";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About.tsx";
import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.tsx";
import Contact from "./pages/Contact.tsx";
import Project from "./pages/Project.tsx"


export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Project" element={<Project/>} />
    </Routes>
  );
}
