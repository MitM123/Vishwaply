"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    icon?: React.ReactNode;
    description: React.ReactNode | string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Custom intersection observer effect
  React.useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCard(index);
            }
          });
        },
        {
          rootMargin: "-40% 0px -40% 0px", // Trigger when item is in the middle 20% of viewport
          threshold: 0,
        }
      );
      
      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [content]);

  return (
    <motion.div
      className="relative w-full max-w-7xl mx-auto px-4 lg:px-10 flex justify-center items-start gap-10 lg:gap-20 py-20"
    >
      {/* Text Content Column */}
      <div className="w-full lg:w-1/2 relative z-10">
        {content.map((item, index) => (
          <div 
            key={item.title + index} 
            ref={(el) => { cardRefs.current[index] = el; }}
            className="min-h-screen flex flex-col justify-center py-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              {item.icon && (
                <div className="text-slate-900 transition-colors duration-500">
                  {item.icon}
                </div>
              )}
              <h2
                className={cn(
                  "text-3xl lg:text-4xl font-bold transition-colors duration-500",
                  activeCard === index ? "text-slate-900" : "text-slate-300"
                )}
              >
                {item.title}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4"
            >
              {item.description}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Sticky Image Column */}
      <div className="hidden lg:block w-1/2 h-screen sticky top-32 flex items-center justify-center py-10">
        <div
          className={cn(
            "relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white",
            contentClassName
          )}
        >
          {content.map((item, index) => (
            <motion.div
              key={item.title + index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};