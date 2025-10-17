"use client";
import { useEffect, useState } from "react";
import { useData } from "../../app/context/DataContext";
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
     <span className="relative pb-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-px hover:after:bg-[#718355] transition-all duration-300">
      - {role}
     </span>
    </div>
   ))}
  </div>
 );
};

export default function Footer({ language = "TR", onLanguageChange }) {
 const { contactData } = useData();
 const { t, loading: langLoading } = useLanguage();
 const [quickLinks, setQuickLinks] = useState([]);
 const [socialLinks, setSocialLinks] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  if (!langLoading) {
   fetchFooterData();
  }
 }, [language, langLoading, t]);

 const fetchFooterData = async () => {
  setLoading(true);
  try {
   const quickLinksRes = await fetch('/api/footer/quicklinks');
   if (quickLinksRes.ok) {
    const quickLinksData = await quickLinksRes.json();
    const mappedQuickLinks = quickLinksData.map(item => ({
     name: t(`footer.${item.key_name}`),
     href: item.href
    }));
    setQuickLinks(mappedQuickLinks);
   }

   const socialRes = await fetch('/api/header/social');
   if (socialRes.ok) {
    const socialData = await socialRes.json();
    const mappedSocial = socialData.map(item => ({
     name: t(`footer.${item.key_name}`),
     href: language === 'EN' ? item.href_en : item.href_tr,
     icon: iconMap[item.icon],
     color: item.key_name === 'linkedin' ? 'hover:text-blue-400' :
      item.key_name === 'github' ? 'hover:text-gray-300' :
       'hover:text-[#b5c99a]'
    }));
    setSocialLinks(mappedSocial);
   }
  } catch (error) {
   console.error('Footer data fetch error:', error);
  } finally {
   setLoading(false);
  }
 };

 if (!contactData || loading || langLoading) {
  return null;
 }

 const brandDescription = getBrandDescription(language);
 const contactInfo = contactData.contactInfo.find((info) => info.type === "phone");
 const emailInfo = contactData.contactInfo.find((info) => info.type === "email");

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
    <nav className="bg-[#020617] px-6 py-8 rounded-2xl shadow-2xl">
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
       tel={contactInfo?.value || "+90 507 849 29 03"}
       email={emailInfo?.value || "omerhd16@outlook.com"}
      />
     </div>

     <div className="border-t border-[#ebf3fe]/20 mt-12 pt-8">
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