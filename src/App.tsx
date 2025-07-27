import React from "react";
import AnimateBody from "./AnimatBody.tsx";
import NavBar from "./NavBar";
import "tailwindcss";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.tsx";

export default function App() {
  return (
    <>
      < NavBar/>
      <AnimateBody />
      <HeroSection />
      <Footer />
    </>
  );
}
