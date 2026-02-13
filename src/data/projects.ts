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
    sourceCodeHref: "https://github.com/collins011008/jsontree",
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
    sourceCodeHref: "https://github.com/collins011008/kanban",
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
    sourceCodeHref: "https://github.com/collins011008/ManyGames",
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
    sourceCodeHref: "https://github.com/collins011008/ManyGames",
    liveWebsiteHref: "http://torqapp.io",
  },
  {
    name: "Real Dudes Inc",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/13.png",
      "/images/projects/14.png",
      "/images/projects/15.png",
      "/images/projects/16.png",
      "/images/projects/17.png",
    ],
    description:
      "The client wanted to continue working on the development of the project, which the previous developer had left.",
    sourceCodeHref: "https://github.com/collins011008/ManyGames",
    liveWebsiteHref: "https://www.realdudesinc.com/",
  },
  {
    name: "TAM Autohof",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/18.png",
      "/images/projects/19.png",
      "/images/projects/20.png",
      "/images/projects/21.png",
    ],
    description:
      "TAM Autohof is a network of petrol stations in the Czech Republic and Slovakia. The site is built on PHP and Symfony; WordPress handles the CMS functionality and administration interface.",
    sourceCodeHref: "https://github.com/collins011008/ManyGames",
    liveWebsiteHref: "https://autohof.sk/en",
  },
  {
    name: "ISIT",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/22.png",
      "/images/projects/23.png",
      "/images/projects/24.png",
    ],
    description:
      "ISIT is a multilingual school in Paris for international careers. I worked as a full-stack developer doing the front end in Twig/Sass and the back end in WordPress with Symphony.",
    sourceCodeHref: "https://github.com/collins011008/ManyGames",
    liveWebsiteHref: "https://www.isit-paris.fr/",
  },
  {
    name: "CDS Vic",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/25.png",
      "/images/projects/26.png",
      "/images/projects/27.png",
      "/images/projects/28.png",
    ],
    description:
      "I contributed to developing a React/Next.js/Strapi-based website for Container Exchange Services.",
    sourceCodeHref: "https://github.com/collins011008/ManyGames",
    liveWebsiteHref: "https://cdsvic.org.au/",
  },
];
