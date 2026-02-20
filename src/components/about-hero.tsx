import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import heroProfileImg from "@/public/images/hero.png";
import DuotoneImage from "./duotone-image";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <DuotoneImage
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:px-16"
              alt="hero image"
              lightColor="#E0FFFF"
              darkColor="#004D4D"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Ryan Jin
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              I’m a Full Stack and Blockchain Engineer with over 7 years of
              experience building scalable web, mobile, and DApps. I’ve worked
              in both product companies and as a freelance senior developer,
              delivering solutions across fintech, blockchain, and AI-driven
              platforms. Recently, as a self-employed developer, I built
              Telegram bots with crypto swap and AI chat functionality,
              developed AI-powered web platforms from scratch, and integrated
              smart contracts using Web3 and Ethers.js, including crypto-based
              payment systems. Overall, I specialize in building full-stack
              systems end-to-end, optimizing performance, and delivering secure
              blockchain-integrated solutions.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing my expertise in Reactjs, Nextjs, Javascript, Typescript
              and web development.
            </p>
          </FadeUp>
        </AnimatePresence>
      </div>
    </div>
  );
}
