import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function HeroSection() {
  return (
    <div style={heroContainer}>
      <h1 style={heading}>Welcome to My Working Set-Up</h1>
      <p style={subheading}>Explore creative and logic-powered Development</p>

      <div style={cardsWrapper}>
        
      </div>
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

const heroContainer: React.CSSProperties = {
  width: "100%",
  padding: "100px 20px",
  textAlign: "center",
  background: "linear-gradient(to bottom, #0f0f0f, #1c1c1c)",
  color: "#fff",
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

const cardsWrapper: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "40px",
};








