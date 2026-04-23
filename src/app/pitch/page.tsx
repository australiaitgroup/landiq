"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, BookOpen, Handshake, Layers, ScrollText } from "lucide-react";
import { slides } from "./slides";
import { Navigation } from "./components/Navigation";
import { useSlideNavigation } from "./hooks/useSlideNavigation";

// Fixed design resolution — never changes, like a real PPT
const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

const slideVariants = {
  enter: (direction: "forward" | "backward") => ({
    x: direction === "forward" ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: "forward" | "backward") => ({
    x: direction === "forward" ? "-50%" : "50%",
    opacity: 0,
  }),
};

export default function PitchPage() {
  const { currentSlide, direction, totalSlides, next, prev, goTo } =
    useSlideNavigation({ totalSlides: slides.length });

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / DESIGN_WIDTH;
      const scaleY = window.innerHeight / DESIGN_HEIGHT;
      setScale(Math.min(scaleX, scaleY));
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-black relative cursor-pointer select-none flex items-center justify-center"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest("button") || target.closest("a")) return;

        const x = e.clientX;
        if (x > window.innerWidth * 0.3) next();
        else prev();
      }}
    >
      {/* Fixed-size slide container, scaled to fit viewport */}
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="relative overflow-hidden shrink-0"
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Navigation inside the fixed container */}
        <Navigation
          currentSlide={currentSlide}
          totalSlides={totalSlides}
          onGoTo={goTo}
        />

        {/* Slide counter + PDF shortcuts */}
        <div className="absolute bottom-8 left-8 z-50 flex items-center gap-4 font-sans text-xs text-white/30">
          <span>
            {currentSlide + 1} / {totalSlides}
          </span>
          <a
            href="/landiq/invest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors"
            title="Open Investor page"
          >
            <FileText className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Invest</span>
          </a>
          <a
            href="/landiq/brochure"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors"
            title="Open Brochure page"
          >
            <BookOpen className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Brochure</span>
          </a>
          <a
            href="/landiq/proposal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors"
            title="Open Client Proposal"
          >
            <Handshake className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Proposal</span>
          </a>
          <a
            href="/landiq/tech-solution"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors"
            title="Open Technical Solution Package"
          >
            <Layers className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Tech Solution</span>
          </a>
          <a
            href="/landiq/sow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/40 hover:text-white transition-colors"
            title="Open Statement of Works"
          >
            <ScrollText className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>SoW</span>
          </a>
        </div>
      </div>
    </div>
  );
}
