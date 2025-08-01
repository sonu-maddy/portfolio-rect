
import React from "react";
import NavBar from "./NavBar";
import AnimateBody from "./AnimatBody.tsx";
import HeroSection from "./HeroSection.tsx";
import Footer from "./Footer.tsx";
import './index.css';

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
