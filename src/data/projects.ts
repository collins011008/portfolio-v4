import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Many Games",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "MindAI",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: ["/images/projects/1.png"],
    description:
      "MindAI's main goal is to democratize access to decentralized artificial intelligence, ensuring maximum privacy and security. Your data will never be collected or given to third parties, eliminating the issues of tracking and monetization of personal information.",
    sourceCodeHref: "https://github.com/tycoon011008/jsontree",
    liveWebsiteHref: "https://docs.mindaiproject.com/utility/mindai-web-app",
  },
  {
    name: "CoreBridge",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/2.png",
      "/images/projects/3.png",
      "/images/projects/4.png",
      "/images/projects/5.png",
      "/images/projects/6.png",
    ],
    description:
      "CoreBridge provides a B2B platform that helps businesses launch their own customizable eCommerce store.",
    sourceCodeHref: "https://github.com/tycoon011008/kanban",
    liveWebsiteHref: "https://www.corebridge.net/",
  },
  {
    name: "TOPASS NFT",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/7.png",
      "/images/projects/8.png",
      "/images/projects/9.png",
    ],
    description:
      "TOPASS tokens provide a unique safeguard against the possibility of counterfeit goods with single-package accuracy.",
    sourceCodeHref: "https://github.com/tycoon011008/ManyGames",
    liveWebsiteHref: "https://rsoft.pl/en/topass.html",
  },
  {
    name: "TORQ App",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/10.png",
      "/images/projects/11.png",
      "/images/projects/12.png",
    ],
    description:
      "Utilizing Flutter for mobile development and Laravel for the back end, I ensured seamless performance across iOS and Android platforms.",
    sourceCodeHref: "https://github.com/tycoon011008/ManyGames",
    liveWebsiteHref: "http://torqapp.io",
  },
];
