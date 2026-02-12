import NavBar from "./NavBar";
import Footer from "./Footer";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

export default function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <NavBar />

      {/* Main Content Area */}
      <main className="pt-16 pb-24 min-h-screen">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>

      </main>

      {/* Fixed Footer */}
      <Footer />
    </>
  );
}
