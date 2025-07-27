import * as motion from "motion/react-client";
import type { Variants } from "motion/react";

export default function HeroSection() {
  return (
    <div style={heroContainer}>
      <h1 style={heading}>Welcome to My Portfolio</h1>
      <p style={subheading}>Explore creative and logic-powered UI ideas</p>

      <div style={cardsWrapper}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            i={index}
            emoji={card.emoji}
            hueA={card.hueA}
            hueB={card.hueB}
          />
        ))}
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

function Card({ emoji, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.6, once: true }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const cardsData = [
  { emoji: "💡", hueA: 340, hueB: 10 },
  { emoji: "🎨", hueA: 240, hueB: 300 },
  { emoji: "⚙️", hueA: 190, hueB: 220 },
  { emoji: "🔥", hueA: 30, hueB: 60 },
];

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

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  width: 300,
  height: 430,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 140,
  width: 260,
  height: 400,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "gray",
  boxShadow:
    "0 2px 5px hsl(0deg 0% 0% / 0.15), 0 8px 20px hsl(0deg 0% 0% / 0.1)",
  transformOrigin: "10% 60%",
};


