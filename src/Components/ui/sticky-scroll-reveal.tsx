"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode | string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Updated background colors to match your theme
  const backgroundColors = [
    "rgb(248, 250, 252)", // slate-50
    "rgb(239, 246, 255)", // blue-50
    "rgb(238, 242, 255)", // indigo-50
    "rgb(241, 245, 249)", // slate-100
    "rgb(224, 242, 254)", // blue-100
    "rgb(224, 231, 255)", // indigo-100
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(248, 250, 252), rgb(239, 246, 255), rgb(238, 242, 255))",
    "linear-gradient(to bottom right, rgb(239, 246, 255), rgb(238, 242, 255), rgb(248, 250, 252))",
    "linear-gradient(to bottom right, rgb(238, 242, 255), rgb(224, 231, 255), rgb(239, 246, 255))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      className="relative flex h-[35rem] lg:h-[40rem] justify-center lg:space-x-16 overflow-y-auto rounded-[2.5rem] p-6 lg:p-12 bg-[#FAF9F6] scrollbar-hide"
      ref={ref}
    >
      <div className="relative flex items-start px-4 w-full lg:w-auto">
        <div className="max-w-3xl w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-24 lg:my-32">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl lg:text-4xl font-bold text-gray-900"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-10"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-10 hidden h-[30rem] w-[500px] overflow-hidden rounded-lg bg-white shadow-2xl lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};