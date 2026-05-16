"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface SlideData {
  quote: string;
  author: string;
  title: string;
  company: string;
  src: string;
}

export const Carousel = ({ slides }: { slides: SlideData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(slideNext, 5000);
    return () => clearInterval(interval);
  }, [slideNext]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const current = slides[currentIndex]!;

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div className="relative min-h-[400px] flex items-center justify-center px-4">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <div className="flex-shrink-0">
                <img
                  src={current.src}
                  alt={current.author}
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-2 border-red-500/30"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-red-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-white/90 font-normal leading-relaxed mb-6">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-white text-base">
                    {current.author}
                  </p>
                  <p className="text-sm text-white/50">
                    {current.title}, {current.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={slidePrev}
          className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/30 transition-colors"
          aria-label="Previous testimonial"
        >
          <IconArrowLeft className="h-5 w-5 text-white/70" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-red-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={slideNext}
          className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/10 hover:border-red-500/30 transition-colors"
          aria-label="Next testimonial"
        >
          <IconArrowRight className="h-5 w-5 text-white/70" />
        </button>
      </div>
    </div>
  );
};
