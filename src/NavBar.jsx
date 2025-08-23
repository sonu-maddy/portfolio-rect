
import PopUp from './PopUp';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './index.css';

export default function NavBar() {
  const [showPopUp, setShowPopUp] = useState(false);

  const handlePopUp = () => setShowPopUp(true);
  const closePopUp = () => setShowPopUp(false);

  const downResume = () => {
    const link = document.createElement("a");
    link.href = "/SonuResume.pdf";
    link.download = "Sonu_Maddheshiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="nav-sec fixed top-5 left-0 right-0 h-16 z-50 shadow-lg bg-black/70 backdrop-blur-xl">
        <div className="container flex justify-between items-center h-full px-4">

          <div>
            <h1 onClick={handlePopUp} className="cursor-pointer name">Let's Connect</h1>
          </div>

          <div className="nav-items">
            <ul className="flex gap-6">
              <li><NavLink to="/home" className={({ isActive }) =>
                isActive ? "text-amber-700 font-bold" : "text-white hover:text-amber-700"}>Home</NavLink></li>
              <li><NavLink to="/skills" className="text-white hover:text-amber-700">Skills</NavLink></li>
              <li><NavLink to="/project" className="text-white hover:text-amber-700">Project</NavLink></li>
              <li><NavLink to="/about" className="text-white hover:text-amber-700">About </NavLink></li>
              <li><NavLink to="/contact" className="text-white hover:text-amber-700">Contact</NavLink></li>
            </ul>
          </div>

          <div className="resume flex justify-end items-center">
            <button
              onClick={downResume}
              className="text-white text-[16px] px-3 py-1 rounded hover:text-amber-800 cursor-pointer">
              Resume
            </button>
          </div>
        </div>
      </div>

      {showPopUp && <PopUp onClose={closePopUp} />}
    </>
  );
}
