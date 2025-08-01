

import logo from './assets/html_7456922.png';
import PopUp from './PopUp';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {

  const [showPopUp, setShowPopUp] = useState(false);

  const handlePopUp = () => {
    setShowPopUp(true);
  };
  const closePopUp = () => {
    setShowPopUp(false);
  };

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
     <div className="fixed top-0 left-0 right-0 border-spacing-y-20 h-16 z-10 shadow-lg">
      <div className="container  flex justify-items-center items-center h-full">

        <div className=' text-amber-900 text-[20px] font-bold'>
          {/* <img src={logo} alt="Logo" className="flex stroke-gray-600" /> */}

          <h1 onClick={handlePopUp} className='cursor-pointer'>S</h1>
        </div>


        <div className="nav-items">
          <ul className="flex gap-6">
            <li className="text-white hover:text-amber-700 cursor-pointer">Home</li>
            <li><Link to="/about" className="text-white hover:text-amber-700">About</Link></li>
            <li className="text-white  hover:text-amber-700 cursor-pointer">Skills</li>
            <li className="text-white  hover:text-amber-700 cursor-pointer">Projects</li>
            <li className="text-white  hover:text-amber-700 stroke-amber-600 cursor-pointer">Contact</li>
          </ul>
        </div>


        <div className="resume flex justify-end items-center">
          <button
            onClick={downResume}
            className="text-white max-w-70 text-[20px] px-2 py-2 rounded hover:text-amber-800 hover:bg-blend-screen  cursor-pointer">
            Resume
          </button>
        </div>
      </div>


    </div>

      {showPopUp && <PopUp onClose={closePopUp} />}

    </>

  );
}
