import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  const { t } = useTranslation("common");

  // Get translated experience items with fallback to original data
  const experienceItems = t("experience.items", { returnObjects: true }) as Array<{
    title: string;
    organisation: string;
    date: string;
    location: string;
    description: string;
  }> | string;

  // Ensure experienceItems is an array before mapping
  const translatedExperience = Array.isArray(experienceItems)
    ? experienceItems.map((item) => ({
        title: item.title,
        organisation: {
          name: item.organisation,
          href: "#",
        },
        date: item.date,
        location: item.location,
        description: item.description,
      }))
    : EXPERIENCE;

  return (
    <>
      <NextSeo
        title="About Ryan Jin | Software Developer"
        description="Learn more about Ryan Jin, a dedicated Software Developer with 2 years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Ryan Jin - Software Developer",
          description:
            "Dive into the story of Ryan Jin, a Software Developer. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Ryan Jin - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Software Developer portfolio, Software Developer, React Developer, Frontend Developer, Web Developer, JavaScript, HTML, CSS, Professional Journey, Skills, Passion for Web Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title={t("experience.title")} details={translatedExperience} />
      <ExperienceShowcaseList title={t("experience.educationTitle")} details={EDUCATION} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};
