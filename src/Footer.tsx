import React from "react";

export default function Footer() {
  return (
    <footer className="w-full h-1 mt-12 text-gray-400">
      <div className="w-full h-1 bg-gray-700 items-center" />

      
      <div className="flex flex-col border-t-4 md:flex-row items-center justify-between text-center md:text-left w-full px-4 py-6">
        <div className="flex gap-6 justify-between items-center text-sm mt-4 md:mt-0 flex-wrap">
          <p className="text-sm text-gray-400 items-center">
            © 2025{" "}
            <span className="text-white font-semibold text-xs">Sonu Maddheshiya</span>. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}

