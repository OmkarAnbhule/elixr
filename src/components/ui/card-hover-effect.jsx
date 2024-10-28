import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link || ""}
          key={idx}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <motion.img
              loading="lazy"
              src={item.url}
              className="w-64 h-52 bg-slate-400 rounded-3xl"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }} // Scale the image on hover
            />
            <CardTitle isHovered={hoveredIndex === idx}>{item.title}</CardTitle>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div className={cn("rounded-2xl h-full w-full overflow-hidden relative z-20", className)}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children, isHovered }) => {
  return (
    <motion.h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-4 absolute z-20 bottom-5 left-1/2 -translate-x-1/2",
        className
      )}
      initial={{ opacity: 0, y: 20 }} // Initially hidden and moved down
      animate={{
        opacity: isHovered ? 1 : 0, // Show title when hovered
        y: isHovered ? 0 : 20, // Move title into position when hovered
        transition: { duration: 0.3 }, // Smooth transition
      }}
    >
      {children}
    </motion.h4>
  );
};
