import {
  FaLinkedin,
  FaGithub,
  FaFileDownload,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

// Navigation items configuration - UPDATED FOR MULTI-PAGE
export const navigationItems = [
  { key: "about", href: "/about", icon: FaUser },
  { key: "skills", href: "/skills", icon: FaCode },
  { key: "experience", href: "/experience", icon: FaBriefcase },
  { key: "projects", href: "/projects", icon: FaProjectDiagram },
  { key: "contact", href: "/contact", icon: FaEnvelope },
];

// Social links configuration
export const socialLinksConfig = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/",
    icon: FaLinkedin,
  },
  {
    key: "github",
    href: "https://github.com/omerhd34",
    icon: FaGithub,
  },
  {
    key: "cv",
    href: {
      EN: "/pdf/cv-english.pdf#zoom=35",
      TR: "/pdf/cv.pdf#zoom=35",
    },
    icon: FaFileDownload,
  },
];

// Language configuration
export const languagesConfig = [
  {
    code: "TR",
    name: "Türkçe",
    countryCode: "TR",
  },
  {
    code: "EN",
    name: "English",
    countryCode: "US",
  },
];

// Helper function to get social links with translations
export const getSocialLinks = (language, translations) => {
  return socialLinksConfig.map((link) => ({
    name: translations[link.key],
    href:
      typeof link.href === "object"
        ? link.href[language] || link.href.TR
        : link.href,
    icon: link.icon,
  }));
};

// Helper function to get navigation items with translations
export const getNavigationItems = (translations) => {
  return navigationItems.map((item) => ({
    ...item,
    name: translations[item.key],
  }));
};
