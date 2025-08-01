
import React from "react";
import NavBar from "./NavBar";
import AnimateBody from "./AnimatBody.tsx";
import HeroSection from "./HeroSection.jsx";
import Footer from "./Footer.tsx";

export default function Home() {
  return (
    <>
      <NavBar />
      <AnimateBody />
      <HeroSection />
      <Footer />
    </>
  );
}
