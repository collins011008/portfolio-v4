import { ReactNode, useEffect, useState } from "react";

import { motion } from "framer-motion";

export interface FadeUpProps {
  children: ReactNode;
  duration: number;
  delay?: number;
  whileInView?: boolean;
}

export default function FadeUp({
  children,
  duration,
  delay,
  whileInView = false,
}: FadeUpProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const animation = {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeInOut",
      delay,
    },
  };

  // Use initial state only after mounting to prevent hydration mismatch
  const initial = isMounted ? { y: 200, opacity: 0 } : { y: 0, opacity: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView ? animation : {}}
      animate={!whileInView ? animation : {}}
    >
      {children}
    </motion.div>
  );
}
