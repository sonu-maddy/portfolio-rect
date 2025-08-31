import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import React from "react";


export default function HeroSection() {
  return (
    <div className="hero-section bg-gradient-to-b from-gray-900 to-black" style={heroContainer}>
      
      <div>
        <div>
          <h1 style={heading}>Welcome to My Working Set-Up</h1>
          <p style={subheading}>
            Explore creative and logic-powered Development
          </p>
        </div>

      </div>
    </div>
  );
}

const heroContainer: React.CSSProperties = {
  width: "100%",
  padding: "100px 20px",
  textAlign: "center",
  
  color: "#fff",
   marginTop: "120px",
  
};

const heading: React.CSSProperties = {
  fontSize: "48px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const subheading: React.CSSProperties = {
  fontSize: "20px",
  color: "#ccc",
  marginBottom: "60px",
};


