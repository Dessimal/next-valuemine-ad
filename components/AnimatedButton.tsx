// components/AnimatedButton.tsx
"use client";

import { motion } from "framer-motion";

type AnimatedButtonProps = {
  onClick: () => void;
  label: string;
  className?: string;
};

export default function AnimatedButton({
  onClick,
  label,
  className = "",
}: AnimatedButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      initial={{ "--x": "100%", scale: 1 } as any}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className={`w-full px-6 py-8 rounded-md relative radial-gradient ${className}`}>
      <span className="text-neutral-100 tracking-wide font-bold h-full w-full block relative linear-mask">
        {label}
      </span>
      <span className="block absolute inset-0 rounded-md p-4 linear-overlay" />
    </motion.button>
  );
}
