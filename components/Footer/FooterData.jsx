import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export const quickLinksConfig = [
 { key: "home", href: "/home" },
 { key: "about", href: "/about" },
 { key: "skills", href: "/skills" },
 { key: "experience", href: "/experience" },
 { key: "projects", href: "/projects" },
 { key: "contact", href: "/contact" },
];

export const socialLinksConfig = [
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

export const languagesConfig = [
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

export const getQuickLinks = (translations) => {
 return quickLinksConfig.map((link) => ({
  name: translations[link.key] || link.key,
  href: link.href,
 }));
};

export const getSocialLinks = (translations) => {
 return socialLinksConfig.map((link) => ({
  name: translations[link.key] || link.key,
  href: link.href,
  icon: link.icon,
  color: link.color,
 }));
};

export const getCvLink = (language, translations) => {
 return {
  name: translations[cvConfig.key] || cvConfig.key,
  href: cvConfig.href[language] || cvConfig.href.TR,
  icon: cvConfig.icon,
  color: cvConfig.color,
 };
};

export const getBrandDescription = (language) => {
 const roles =
  language === "TR"
   ? [
    "Full-stack Geliştirici",
    "Frontend Geliştirici",
    "Backend Geliştirici",
    "Elektrik Elektronik Mühendisi",
   ]
   : [
    "Full-stack Developer",
    "Frontend Developer",
    "Backend Developer",
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