"use client";
import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import translations from "./FooterTranslations";
import {
  getQuickLinks,
  getSocialLinks,
  getCvLink,
  getBrandDescription,
  languagesConfig,
  contactConfig,
} from "./FooterData";

interface FooterProps {
  language?: string;
  onLanguageChange?: (lang: string) => void;
}

const Footer: React.FC<FooterProps> = ({
  language = "TR",
  onLanguageChange,
}) => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setIsLanguageDropdownOpen(false);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  const t = translations[language as keyof typeof translations];
  const quickLinks = getQuickLinks(t);
  const socialLinks = getSocialLinks(t);
  const cvLink = getCvLink(language, t);
  const brandDescription = getBrandDescription(language);

  return (
    <footer className="relative z-40 backdrop-blur-md mt-[171px]">
      <div className="container mx-auto px-4 pb-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ">
        <nav className="bg-[#020617] px-6 py-8 rounded-2xl shadow-2xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-4">
              <Link href="/" className="inline-block group">
                <span className="text-[30px] bg-clip-text font-extrabold bg-gradient-to-r bg-[#0170e682] hover:bg-[#ebf3fe] text-transparent group-hover:scale-105 transition-all duration-700 ease-in-out">
                  Ömer Halis DEMİR
                </span>
              </Link>
              <div className="text-primary text-sm leading-relaxed max-w-xs">
                {brandDescription}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-primary font-semibold text-lg border-b border-[#ebf3fe]/30 pb-2">
                {t.quickLinks}
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-primary transition-colors duration-300 text-sm flex items-center group cursor-pointer hover:cursor-pointer"
                    >
                      <span className="text-primary w-0 group-hover:w-2 h-0.5 bg-[#ebf3fe] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-primary font-semibold text-lg border-b border-[#ebf3fe]/30 pb-2">
                {t.socialMedia}
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 text-primary ${link.color} transition-all duration-300 text-sm group cursor-pointer hover:cursor-pointer`}
                    >
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  );
                })}

                {/* CV Download */}
                <Link
                  href={cvLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 text-primary ${cvLink.color} transition-all duration-300 text-sm group cursor-pointer hover:cursor-pointer`}
                >
                  <cvLink.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {cvLink.name}
                  </span>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-primary font-semibold text-lg border-b border-[#ebf3fe]/30 pb-2">
                {t.contactInfo}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-primary text-sm">
                  <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-primary" />
                  <span>{t.location}</span>
                </div>
                <div className="flex items-start space-x-3 text-primary text-sm">
                  <FaPhone className="w-4 h-4 mt-0.5 text-primary" />
                  <span>{contactConfig.tel}</span>
                </div>
                <div className="flex items-start space-x-3 text-primary text-sm">
                  <FaEnvelope className="w-4 h-4 mt-0.5 text-primary" />
                  <Link
                    href={`mailto:${contactConfig.email}`}
                    className="hover:text-primary transition-colors duration-300 break-all cursor-pointer hover:cursor-pointer"
                  >
                    {contactConfig.email}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#ebf3fe]/20 mt-12 pt-8">
            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() =>
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                  }
                  className="flex items-center space-x-2 px-3 py-2 text-primary hover:text-[#c4c8bd] hover:bg-[#c4c8bd]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c4c8bd]/50 border border-[#c4c8bd]/20 text-sm cursor-pointer hover:cursor-pointer"
                >
                  <div className="flex items-center">
                    <ReactCountryFlag
                      countryCode={
                        languagesConfig.find((lang) => lang.code === language)
                          ?.countryCode || "TR"
                      }
                      svg
                      style={{
                        width: "20px",
                        height: "16px",
                      }}
                      title={
                        languagesConfig.find((lang) => lang.code === language)
                          ?.name || "Turkey"
                      }
                    />
                  </div>
                  <span className="font-medium">{language}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      isLanguageDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Language Dropdown */}
                {isLanguageDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 py-2 w-32 bg-[#020c3b] rounded-lg shadow-xl border border-[#c4c8bd]/20 z-50">
                    {languagesConfig.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center space-x-2 w-full px-3 py-2 text-sm transition-all duration-300 cursor-pointer hover:cursor-pointer ${
                          language === lang.code
                            ? "text-primary bg-[#718355]/20"
                            : "text-primary hover:text-[#c4c8bd] hover:bg-[#718355]/10"
                        }`}
                      >
                        <div className="flex items-center">
                          <ReactCountryFlag
                            countryCode={lang.countryCode}
                            svg
                            style={{
                              width: "20px",
                              height: "16px",
                            }}
                            title={lang.name}
                          />
                        </div>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Made with love */}
              <div className="text-primary text-sm text-center md:text-right">
                <p className="flex items-center justify-center md:justify-end space-x-1">
                  <span>{t.madeWithLove}</span>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
