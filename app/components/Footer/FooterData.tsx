import { IconType } from "react-icons";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaFileDownload,
} from "react-icons/fa";

export interface QuickLink {
  key: string;
  href: string;
}

export interface SocialLink {
  key: string;
  href: string;
  icon: IconType;
  color: string;
}

export interface Language {
  code: string;
  name: string;
  countryCode: string;
}

export const quickLinksConfig: QuickLink[] = [
  { key: "about", href: "/" },
  { key: "skills", href: "/skills" },
  { key: "experience", href: "/experience" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "/contact" },
];

export const socialLinksConfig: SocialLink[] = [
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/",
    icon: FaLinkedin,
    color: "hover:text-blue-400",
  },
  {
    key: "github",
    href: "https://github.com/omerhd34",
    icon: FaGithub,
    color: "hover:text-gray-300",
  },
  {
    key: "youtube",
    href: "https://www.youtube.com/@%C3%96mer_Halis_Demir",
    icon: FaYoutube,
    color: "hover:text-red-400",
  },
];

export const cvConfig = {
  key: "cv",
  href: {
    EN: "/pdf/cv-english.pdf",
    TR: "/pdf/cv.pdf",
  },
  icon: FaFileDownload,
  color: "hover:text-[#b5c99a]",
};

export const languagesConfig: Language[] = [
  {
    code: "TR",
    name: "TR",
    countryCode: "TR",
  },
  {
    code: "EN",
    name: "EN",
    countryCode: "US",
  },
];

export const contactConfig = {
  email: "omerhd34@outlook.com",
  tel: "+90 507 849 29 03",
  country: "TR",
};

export const getQuickLinks = (translations: Record<string, string>) => {
  return quickLinksConfig.map((link) => ({
    name: translations[link.key] || link.key,
    href: link.href,
  }));
};

export const getSocialLinks = (translations: Record<string, string>) => {
  return socialLinksConfig.map((link) => ({
    name: translations[link.key] || link.key,
    href: link.href,
    icon: link.icon,
    color: link.color,
  }));
};

export const getCvLink = (
  language: string,
  translations: Record<string, string>
) => {
  return {
    name: translations[cvConfig.key] || cvConfig.key,
    href:
      (cvConfig.href as Record<string, string>)[language] || cvConfig.href.TR,
    icon: cvConfig.icon,
    color: cvConfig.color,
  };
};

export const getBrandDescription = (language: string) => {
  const roles =
    language === "TR"
      ? [
          "Full-stack Geliştirici",
          "Frontend Geliştirici",
          "Backend Geliştirici",
          "DevOps Mühendisi",
          "Elektrik Elektronik Mühendisi",
        ]
      : [
          "Full-stack Developer",
          "Frontend Developer",
          "Backend Developer",
          "DevOps Engineer",
          "Electric Electronic Engineer",
        ];

  return (
    <div className="space-y-2 sm:space-y-3">
      {roles.map((role, index) => (
        <div key={index} className="relative">
          <span className="relative pb-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-px hover:after:bg-[#718355] transition-all duration-300">
            - {role}
          </span>
        </div>
      ))}
    </div>
  );
};
