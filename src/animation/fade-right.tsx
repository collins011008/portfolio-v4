import { ReactNode, useEffect, useState } from "react";

import { motion } from "framer-motion";

export interface FadeRightProps {
  children: ReactNode;
  duration: number;
  delay?: number;
  className?: string;
  whileInView?: boolean;
}

export default function FadeRight({
  children,
  duration,
  delay,
  className,
  whileInView = false,
}: FadeRightProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animation = {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      ease: "easeInOut",
      delay,
    },
  };

  // Use initial state only after mounting to prevent hydration mismatch
  const initial = isMounted ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView ? animation : undefined}
      animate={!whileInView ? animation : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
