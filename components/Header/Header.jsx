"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../../app/context/LanguageContext";
import "./header.css";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { LanguageSelector } from "./LanguageSelector";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileNav } from "./MobileNav";
import { DesktopSocialLinks } from "./DesktopSocialLinks";

// Icon mapping
import {
 FaUser,
 FaCode,
 FaBriefcase,
 FaProjectDiagram,
 FaEnvelope,
 FaLinkedin,
 FaGithub,
 FaFileDownload,
} from "react-icons/fa";

const iconMap = {
 FaUser,
 FaCode,
 FaBriefcase,
 FaProjectDiagram,
 FaEnvelope,
 FaLinkedin,
 FaGithub,
 FaFileDownload,
};

const languagesConfig = [
 { code: "TR", name: "Türkçe", countryCode: "TR" },
 { code: "EN", name: "English", countryCode: "US" },
];

export default function Header({ language = "TR", onLanguageChange }) {
 const pathname = usePathname();
 const { t, loading: langLoading } = useLanguage();
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
 const [isHovered, setIsHovered] = useState(false);
 const [navigationItems, setNavigationItems] = useState([]);
 const [socialLinks, setSocialLinks] = useState([]);
 const [loading, setLoading] = useState(true);
 const languageDropdownRef = useRef(null);

 useEffect(() => {
  if (!langLoading) {
   fetchHeaderData();
  }
 }, [language, langLoading, t]);

 const fetchHeaderData = async () => {
  setLoading(true);
  try {
   // Navigation items
   const navRes = await fetch('/api/header/navigation');
   if (navRes.ok) {
    const navData = await navRes.json();
    const mappedNav = navData.map(item => ({
     key: item.key_name,
     href: item.href,
     icon: iconMap[item.icon],
     name: t(`header.${item.key_name}`)
    }));
    setNavigationItems(mappedNav);
   }

   // Social links
   const socialRes = await fetch('/api/header/social');
   if (socialRes.ok) {
    const socialData = await socialRes.json();
    const mappedSocial = socialData.map(item => ({
     name: t(`header.${item.key_name}`),
     href: language === 'EN' ? item.href_en : item.href_tr,
     icon: iconMap[item.icon]
    }));
    setSocialLinks(mappedSocial);
   }
  } catch (error) {
   console.error('Header data fetch error:', error);
  } finally {
   setLoading(false);
  }
 };

 const getActiveSection = () => {
  const currentPath = pathname;
  const activeItem = navigationItems.find((item) => item.href === currentPath);
  return activeItem?.key || null;
 };

 const activeSection = getActiveSection();

 const toggleMenu = () => {
  setIsMenuOpen((prev) => !prev);
  setIsLanguageDropdownOpen(false);
 };

 const toggleLanguageDropdown = () => {
  setIsLanguageDropdownOpen((prev) => !prev);
 };

 const handleLanguageChange = (lang) => {
  setIsLanguageDropdownOpen(false);
  if (onLanguageChange) {
   onLanguageChange(lang);
  }
 };

 const handleNavigationClick = () => {
  setIsMenuOpen(false);
 };

 useEffect(() => {
  const handleClickOutside = (event) => {
   if (
    languageDropdownRef.current &&
    !languageDropdownRef.current.contains(event.target)
   ) {
    setIsLanguageDropdownOpen(false);
   }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, []);

 useEffect(() => {
  setIsMenuOpen(false);
  setIsLanguageDropdownOpen(false);
 }, [pathname]);

 if (loading || langLoading) return null;

 return (
  <header className="sticky top-0 z-50 2xl:-mb-20 bg-gray-900 backdrop-blur-md ">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-2 sm:pt-3 ">
    <nav className="bg-[#020617] backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl rounded-b-2xl min-[1152px]:rounded-b-none shadow-2xl border border-[#718355]/10 relative z-10">
     <div className="flex justify-between items-center">
      <Logo isHovered={isHovered} setIsHovered={setIsHovered} />
      <DesktopNav navigationItems={navigationItems} activeSection={activeSection} />
      <div className="flex items-center space-x-2 ">
       <LanguageSelector
        language={language}
        languagesConfig={languagesConfig}
        isLanguageDropdownOpen={isLanguageDropdownOpen}
        toggleLanguageDropdown={toggleLanguageDropdown}
        handleLanguageChange={handleLanguageChange}
        languageDropdownRef={languageDropdownRef}
       />
       <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} t={{ openMenu: t('header.openMenu') }} />
      </div>
     </div>
     <MobileNav
      isMenuOpen={isMenuOpen}
      navigationItems={navigationItems}
      activeSection={activeSection}
      handleNavigationClick={handleNavigationClick}
      language={language}
      languagesConfig={languagesConfig}
      handleLanguageChange={handleLanguageChange}
      socialLinks={socialLinks}
      t={{ cv: t('header.cv') }}
     />
    </nav>
   </div>
   <DesktopSocialLinks socialLinks={socialLinks} t={{ cv: t('header.cv') }} />
  </header>
 );
}