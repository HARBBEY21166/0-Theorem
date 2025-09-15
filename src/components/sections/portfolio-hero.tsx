"use client";

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const headline = "Proof in Practice.";
const subheading = "A curated selection of work where strategic thinking meets elegant execution. Each project is a solved equation.";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: -50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};


export default function PortfolioHero() {
  const subheadlineControls = useAnimation();
  const headlineControls = useAnimation();

  useEffect(() => {
    headlineControls.start("visible").then(() => {
        subheadlineControls.start("visible");
    });
  }, [headlineControls, subheadlineControls]);

  return (
    <section id="portfolio-hero" className="py-24 sm:py-32 text-center">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden pb-2">
            <motion.h1
              className="text-5xl md:text-7xl font-headline font-bold"
              variants={sentence}
              initial="hidden"
              animate={headlineControls}
            >
              {headline.split("").map((char, index) => (
                <motion.span key={char + "-" + index} variants={letter} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.h1>
        </div>
        <div className="overflow-hidden">
            <motion.p 
              className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-foreground/80"
              initial={{opacity: 0, y: 20}}
              animate={subheadlineControls}
              variants={{
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
              }}
            >
                {subheading}
            </motion.p>
        </div>
      </div>
    </section>
  );
}