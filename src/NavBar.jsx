
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './index.css';

export default function NavBar() {
  const downResume = () => {
    const link = document.createElement("a");
    link.href = "/SonuResume.pdf";
    link.download = "Sonu_Maddheshiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-[9999] bg-gradient-to-b from-gray-900 to-black border-b-4 border-white backdrop-blur-xl shadow-lg">
      <div className="container flex justify-between items-center h-full px-4">
        <div>
          <h1 className="text-white font-bold ml-8">Sonu Maddheshiya...</h1>
        </div>

        <ul className="flex gap-6">
          <li>
            <NavLink to="/" className="text-white hover:text-gray-500">Home</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="text-white hover:text-gray-500">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/project" className="text-white hover:text-gray-500">Project</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="text-white hover:text-gray-500">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="text-white hover:text-gray-500">Contact</NavLink>
          </li>
        </ul>

        <button
          onClick={downResume}
          className="text-white text-[16px] px-3 py-1 rounded hover:text-gray-500 cursor-pointer mr-8"
        >
          Resume
        </button>
      </div>
    </nav>
  );
}
