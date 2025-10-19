"use client";
import { useLanguage } from "../../app/context/LanguageContext";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import FooterBrand from "./FooterBrand";
import QuickLinksSection from "./QuickLinksSection";
import SocialMediaSection from "./SocialMediaSection";
import ContactInfoSection from "./ContactInfoSection";
import LanguageSelector from "./LanguageSelector";
import FooterBottom from "./FooterBottom";

const iconMap = {
 FaLinkedin,
 FaGithub,
 FaFileDownload,
};

const languagesConfig = [
 { code: "TR", name: "TR", countryCode: "TR" },
 { code: "EN", name: "EN", countryCode: "US" },
];

const getQuickLinks = (t) => [
 { name: t('footer.home'), href: '/' },
 { name: t('footer.about'), href: '/about' },
 { name: t('footer.skills'), href: '/skills' },
 { name: t('footer.experience'), href: '/experience' },
 { name: t('footer.projects'), href: '/projects' },
 { name: t('footer.contact'), href: '/contact' },
];

const getBrandDescription = (language) => {
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
     <span className="relative pb-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-px hover:after:bg-[#2e7d32] transition-all duration-300">
      - {role}
     </span>
    </div>
   ))}
  </div>
 );
};

const getSocialLinks = (t, language) => [
 {
  name: t('footer.linkedin'),
  href: 'https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/',
  icon: iconMap.FaLinkedin,
  color: 'hover:text-blue-400'
 },
 {
  name: t('footer.github'),
  href: 'https://github.com/omerhd34',
  icon: iconMap.FaGithub,
  color: 'hover:text-gray-300'
 },
 {
  name: t('footer.cv'),
  href: language === 'EN' ? '/pdf/cv-english.pdf#zoom=35' : '/pdf/cv.pdf#zoom=35',
  icon: iconMap.FaFileDownload,
  color: 'hover:text-[#b5c99a]'
 }
];

export default function Footer({ language = "TR", onLanguageChange }) {
 const { t, loading: langLoading } = useLanguage();

 if (langLoading) {
  return null;
 }

 const quickLinks = getQuickLinks(t);
 const socialLinks = getSocialLinks(t);
 const brandDescription = getBrandDescription(language);

 const languageSelector = (
  <LanguageSelector
   language={language}
   onLanguageChange={onLanguageChange}
   languagesConfig={languagesConfig}
  />
 );

 return (
  <footer className="relative z-40 backdrop-blur-md mt-[171px]">
   <div className="container mx-auto px-4 pb-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
    <nav className="bg-[#0d2821] px-6 py-8 rounded-2xl shadow-2xl">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <FooterBrand brandDescription={brandDescription} />
      <QuickLinksSection title={t('footer.quickLinks')} quickLinks={quickLinks} />
      <SocialMediaSection
       title={t('footer.socialMedia')}
       socialLinks={socialLinks}
      />
      <ContactInfoSection
       title={t('footer.contactInfo')}
       location={t('footer.location')}
       tel="+90 507 849 29 03"
       email="omerhd16@outlook.com"
      />
     </div>

     <div className="border-t border-[#66bb6a]/30 mt-12 pt-8">
      <FooterBottom
       languageSelector={languageSelector}
       madeWithLove={t('footer.madeWithLove')}
      />
     </div>
    </nav>
   </div>
  </footer>
 );
}