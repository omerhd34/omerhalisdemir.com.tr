"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import ReactCountryFlag from "react-country-flag";
import translations from "./HeaderTranslations";
import {
  getSocialLinks,
  getNavigationItems,
  languagesConfig,
} from "./HeaderData";
import AnimatedGradient from "../extra/AnimatedGradient";
import "./header.css";

const rubikDistressed = localFont({
  src: "../../../public/fonts/RubikDistressed-Regular.ttf",
  variable: "--font-rubik-distressed",
  display: "swap",
});

interface HeaderProps {
  language?: string;
  onLanguageChange?: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  language = "TR",
  onLanguageChange,
}) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const t = translations[language as keyof typeof translations];
  const navigationItems = getNavigationItems(t);
  const socialLinks = getSocialLinks(language, t);

  // URL'e göre aktif section'ı belirle
  const getActiveSection = () => {
    const currentPath = pathname;
    const activeItem = navigationItems.find((item) => {
      if (item.href === currentPath) return true;
      if (item.href.startsWith("#") && currentPath === "/") {
        return false;
      }
      return false;
    });
    return activeItem?.key || null;
  };

  const activeSection = getActiveSection();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Pathname değiştiğinde menu'yu kapat
  useEffect(() => {
    setIsMenuOpen(false);
    setIsLanguageDropdownOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen((prev) => !prev);
  };

  const handleLanguageChange = (lang: string) => {
    setIsLanguageDropdownOpen(false);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  const handleNavigationClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 2xl:-mb-20 bg-gray-900 backdrop-blur-md ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-2 sm:pt-3 ">
        <nav className="bg-[#020617] backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl rounded-b-2xl min-[1152px]:rounded-b-none shadow-2xl border border-[#718355]/10 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center space-x-3 relative">
                <div className="hidden min-[400px]:block relative">
                  <AnimatedGradient isHovered={isHovered} />
                  <div
                    className={`absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-[#0170e682] to-transparent transition-all duration-800 ${
                      isHovered
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                    style={{
                      transformOrigin: "left center",
                      transform: "translateY(-50%)",
                    }}
                  />
                </div>

                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#0170e682]/20 via-[#007bff82]/20 to-[#0170e682]/20 rounded-lg transition-all duration-800 ${
                      isHovered
                        ? "opacity-100 blur-sm scale-110"
                        : "opacity-0 scale-100"
                    }`}
                  />

                  <div className="relative min-w-max -mb-2">
                    <div
                      className={`transition-all duration-800 ${
                        isHovered
                          ? "opacity-0 scale-95 pointer-events-none"
                          : "opacity-100 scale-100"
                      }`}
                    >
                      <span
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ebf3fe] via-[#0170e682] to-[#007bff82] bg-clip-text text-transparent leading-tight tracking-[0.3em] "
                        style={{ fontFamily: rubikDistressed.style.fontFamily }}
                      >
                        ÖHD
                      </span>
                    </div>

                    <div
                      className={`absolute top-0 left-0 transition-all duration-800 ${
                        isHovered
                          ? "opacity-100 scale-105 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <span
                        className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight whitespace-nowrap tracking-wider"
                        style={{
                          fontFamily: rubikDistressed.style.fontFamily,
                          textShadow: isHovered
                            ? "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(14, 165, 233, 0.6)"
                            : "none",
                        }}
                      >
                        {"Ömer Halis DEMİR".split("").map((char, index) => (
                          <span
                            key={index}
                            className="inline-block transition-all duration-600"
                            style={{
                              transform: isHovered
                                ? "translateY(2px)"
                                : "translateY(0px)",
                              transition: `transform 0.6s ease ${index * 80}ms`,
                            }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </span>

                      <div
                        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#3b82f6] via-[#0ea5e9] to-[#ffffff] transition-all duration-1000 ${
                          isHovered ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                        style={{
                          width: isHovered ? "100%" : "0%",
                          right: "0",
                          boxShadow: isHovered
                            ? "0 0 10px rgba(59, 130, 246, 0.5)"
                            : "none",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${
                    isHovered ? "opacity-30" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(1, 112, 230, 0.1) 0%, transparent 70%)",
                    borderRadius: "50%",
                    transform: "scale(1.5)",
                  }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.key;

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-[#c4c8bd] bg-muted"
                        : "text-[#c4c8bd]  hover:bg-[#01438882]/50"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#01438882] rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Language Selector & Mobile Menu Button */}
            <div className="flex items-center space-x-2 ">
              {/* Language Selector */}
              <div className="relative z-30" ref={languageDropdownRef}>
                <button
                  onClick={toggleLanguageDropdown}
                  className="language_button flex items-center space-x-1.5 px-2 py-1.5 text-[#c4c8bd] hover:bg-[#c4c8bd]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c4c8bd]/50"
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
                  <span className="text-sm font-medium hidden xs:inline">
                    {language}
                  </span>
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
                  <div className="absolute right-0 -mx-15 mt-[2px] py-2 w-22 bg-info/95 backdrop-blur-sm rounded-lg shadow-lg bg-[#061149] border border-[#c4c8bd]/20 z-50">
                    {languagesConfig.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center space-x-2 w-full px-3 py-2 text-sm transition-all duration-300 ${
                          language === lang.code
                            ? "text-[#c4c8bd] bg-[#718355]/20"
                            : "text-[#87986a] hover:text-[#c4c8bd] hover:bg-[#718355]/10"
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
                        <span className="text-xs">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-1.5 text-primary rounded-lg hover:bg-[#718355]/10 focus:outline-none focus:ring-2 focus:ring-[#b5c99a]/50 transition-all duration-300"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">{t.openMenu}</span>
                <div className="relative w-5 h-5">
                  <span
                    className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 top-2.5" : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-2.5 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 top-2.5" : "top-4"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "max-h-[700px] opacity-100 mt-6"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#020c3b]/95 backdrop-blur-sm rounded-xl p-4 space-y-1 md:space-y-2 border border-[#718355]/10">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.key;

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={handleNavigationClick}
                    className={`flex items-center space-x-4 sm:space-x-5 py-2 md:py-3 rounded-lg text-[15px] md:text-[18px] font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[#ebf3fe] bg-info border-l-4 border-[#ebf3fe]"
                        : "text-[#ebf3fe] hover:bg-[#020617]/10"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <IconComponent className="w-4 h-4 sm:h-5 sm:w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Mobile Language Selector */}
              <div className="py-3 my-0 border-t border-[#718355]/20 ">
                <div className="flex justify-center space-x-3">
                  {languagesConfig.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        language === lang.code
                          ? "text-[#ebf3fe] bg-black border border-[#ebf3fe]"
                          : "text-[#ebf3fe] hover:bg-[#020617]/10"
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
                      <span className="text-xs">{lang.code}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Social Links */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#ebf3fe]/20">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-1.5 px-3 py-2.5 text-primary bg-gradient-to-r from-[#020617] to-[#020617] hover:from-[#000] hover:to-[#000] rounded-lg text-xs font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      {link.name === t.cv && (
                        <span className="truncate">{link.name}</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Social Links Bar - Desktop Only */}
      <div className="hidden lg:block  ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 z-[0] ">
          <div className="flex justify-end">
            <div className="flex items-center justify-center space-x-3 p-3 bg-gradient-to-r from-[#040d348d] via-[#091c708d] to-[#020c3b] backdrop-blur-sm rounded-b-2xl shadow-xl border-x border-b border-[#718355]/20">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center px-3 py-2.5 text-primary bg-[#151b36] hover:bg-[#040d348d] rounded-lg text-xs font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-[#ebf3fe]/30 hover:border-[#fff] min-w-[40px]"
                  >
                    {link.name === t.cv ? (
                      <div className="flex items-center space-x-1">
                        <IconComponent className="w-4 h-4" />
                        <span className="text-xs whitespace-nowrap">
                          {link.name}
                        </span>
                      </div>
                    ) : (
                      <IconComponent className="w-4 h-4" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617] to-[#020617] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
