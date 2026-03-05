import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

export default function LandingHero() {
  const { t } = useTranslation("common");
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Only run client-side code after hydration
  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate progress only on client side
  let progress = 0;
  if (isClient && ref.current) {
    progress = Math.min(1, scrollY / ref.current.clientHeight);
  }

  return (
    <motion.section
      animate={isClient ? { transform: `translateY(${progress * 20}vh)` } : {}}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                {t("hero.name")}
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                {t("hero.title")}
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                {t("hero.description", { years: "7+" })}
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
