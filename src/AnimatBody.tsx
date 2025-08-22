import "./style.css";

import './index.css';
import React, { useRef,useState } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "framer-motion";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 1 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // animate from visible to out
  });

  const opacity = useTransform(scrollYProgress, [0.5, 0, 1, 1], [0, 0.2, 0, 1]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.9, 1, 1, 0.8]
  );

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <motion.div
      ref={containerRef}
      className="parallax"
      style={{ opacity, scale }}
    >
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  return (
    <>
      <div className="absolute mt-36 w-full  items-center px-4 text-center animate-fade-in z-30">
        <h1 className="text-3xl md:text-6xl font-bold text-amber-100 bg-black/40 px-6 py-4 rounded-xl opacity-60 ">
          &quot; &#123; Build Thinking - Grow Together &#125; &quot;
        </h1>
        <p className="mt-3 text-lg md:text-xl text-stone-300 font-light animate-slide-up">
          Developer. Dreamer. Doer.
        </p>
      </div>

      <section>
        <ParallaxText baseVelocity={-5}>learner & creative things</ParallaxText>
        <ParallaxText baseVelocity={5}>logic and UI</ParallaxText>
      </section>
    </>
  );
}
