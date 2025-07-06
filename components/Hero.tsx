"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const highlights = [
  "Greater Purpose in Your Life Direction",
  "Greater Peace in Your Heart",
  "Greater Peace in Your Relationship",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setPrev(current);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prevIdx) => (prevIdx + 1) % highlights.length);
        setAnimating(false);
        setPrev(null);
      }, 400);
    }, 2200);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen w-full text-center pt-0 pb-8 px-2 md:px-4 overflow-hidden"
      style={{ marginTop: 0 }}
    >
      <Image
        src="/hero.webp"
        alt="Background"
        fill
        priority
        className="object-cover object-center absolute inset-0 w-full h-full z-0"
      />
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />
      <div className="relative z-20 max-w-2xl mx-auto flex flex-col items-center">
        <p className="text-xs md:text-sm font-medium mb-1 md:mb-2 text-white">
          Christian Counseling Services in Richmond & Central Virginia
        </p>
        <h1 className="text-xl md:text-3xl font-extrabold mb-2 md:mb-4 text-white drop-shadow-lg">
          Professional Counseling for Christian Healing and Growth
        </h1>
        <p className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2 drop-shadow">
          Begin your journey today towards spiritual growth, deeper
          relationships, and lasting inner peace.
        </p>
        <p className="text-sm md:text-lg font-bold text-white mb-2 md:mb-4 drop-shadow">
          I want to work with you for...
        </p>
        <div
          className="flex items-center justify-center gap-2 mb-4 md:mb-6 min-h-[32px] md:min-h-[40px] h-10 md:h-12 relative w-full"
          style={{ height: "2.5em" }}
        >
          {/* Previous highlight animating out */}
          {prev !== null && animating && (
            <span
              key={`prev-${prev}`}
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-base md:text-xl font-bold text-yellow-400 transition-all duration-400 ease-in-out opacity-0 -translate-y-8"
              style={{ pointerEvents: "none" }}
            >
              <Star className="w-6 h-6 text-yellow-400" />
              {highlights[prev]}
            </span>
          )}
          {/* Current highlight animating in */}
          <span
            key={`current-${current}`}
            className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-base md:text-xl font-bold text-yellow-400 transition-all duration-400 ease-in-out
              ${
                animating
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }
            `}
            style={{ pointerEvents: "auto" }}
          >
            <Star className="w-6 h-6 text-yellow-400" />
            {highlights[current]}
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <div className="flex gap-2 md:gap-4 flex-wrap text-xs md:text-sm text-white font-medium mb-1 md:mb-2 whitespace-nowrap overflow-x-auto scrollbar-hide w-full justify-center">
            <span className="flex items-center gap-1">⭐ Top Rated</span>
            <span>• 40+ Years Experience</span>
            <span>• Testimonials</span>
            <span>• Media Mentions</span>
          </div>
          <Button
            size="lg"
            className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 shadow-lg cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setTimeout(() => {
                const el = document.getElementById("contact");
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }, 10);
            }}
          >
            Start Healing Today
          </Button>
        </div>
      </div>
    </section>
  );
}
