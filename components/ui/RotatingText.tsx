"use client";

import { AnimatePresence, motion, type Transition } from "motion/react";
import type { HTMLAttributes } from "react";
import { useEffect, useState } from "react";
import "./RotatingText.css";

type StaggerFrom = "first" | "last";
type TextAnimation = { y?: string | number; opacity?: number };

type RotatingTextProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  texts: string[];
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: StaggerFrom;
  mainClassName?: string;
  splitLevelClassName?: string;
  initial?: TextAnimation;
  animate?: TextAnimation;
  exit?: TextAnimation;
  transition?: Transition;
};

export default function RotatingText({
  texts,
  rotationInterval = 2500,
  staggerDuration = 0.025,
  staggerFrom = "first",
  mainClassName = "",
  splitLevelClassName = "",
  initial = { y: "-120%" },
  animate = { y: "0%" },
  exit = { y: "100%" },
  transition = { type: "spring", damping: 30, stiffness: 400 },
  className = "",
  ...rest
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const currentText = texts[index] ?? "";

  useEffect(() => {
    if (texts.length < 2) return;

    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % texts.length);
    }, rotationInterval);

    return () => window.clearInterval(timer);
  }, [rotationInterval, texts.length]);

  const characters = Array.from(currentText);

  return (
    <span className={`rotating-text ${className}`.trim()} aria-live="polite" {...rest}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${currentText}-${index}`}
          className={`rotating-text__word ${mainClassName}`.trim()}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        >
          {characters.map((character, characterIndex) => {
            const distance = staggerFrom === "last" ? characters.length - characterIndex - 1 : characterIndex;

            return (
              <span key={`${character}-${characterIndex}`} className={`rotating-text__character ${splitLevelClassName}`.trim()}>
                <motion.span
                  className="rotating-text__character-inner"
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={{ ...transition, delay: distance * staggerDuration }}
                >
                  {character === " " ? "\u00a0" : character}
                </motion.span>
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
