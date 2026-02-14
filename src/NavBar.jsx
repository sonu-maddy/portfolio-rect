import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-black hover:text-gray-500";

  // ✅ Resume download handler
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "Sonu Resume Java";
    link.download = "Sonu_Maddheshiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-[9999] bg-white/70 backdrop-blur shadow-sm">

      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">

        {/* Logo */}
        <h1 className="font-bold text-black">
          Sonu Maddheshiya
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-6">
          <li>
            <NavLink to="/" className={navStyle}>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navStyle}>About</NavLink>
          </li>

          <li>
            <NavLink to="/project" className={navStyle}>Projects</NavLink>
          </li>
        </ul>

        {/* Resume Download */}
        <button
          onClick={downloadResume}
          className="hidden md:block text-black hover:text-gray-500 font-medium"
        >
          Download Resume
        </button>

      </div>
    </nav>
  );
}
