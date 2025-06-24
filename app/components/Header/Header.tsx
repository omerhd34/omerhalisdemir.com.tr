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
  const [showTooltip, setShowTooltip] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const t = translations[language as keyof typeof translations];
  const navigationItems = getNavigationItems(t);
  const socialLinks = getSocialLinks(language, t);

  // URL'e göre aktif section'ı belirle
  const getActiveSection = () => {
    const currentPath = pathname;
    const activeItem = navigationItems.find((item) => {
      // Exact match için
      if (item.href === currentPath) return true;
      // Hash link'ler için (#about, #skills vs.)
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
    <header className="sticky top-0 z-50 2xl:-mb-20 bg-[#21110e] backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 pt-2 sm:pt-3">
        <nav className="bg-[#020617] px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl rounded-b-2xl min-[1152px]:rounded-b-none shadow-2xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group relative">
              <div className="relative">
                <span
                  className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ebf3fe] via-[#0170e682] to-[#007bff82] bg-clip-text text-transparent ${rubikDistressed.className} group-hover:scale-105 transition-transform duration-300 leading-tight`}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <span className="hidden sm:inline">Ömer Halis DEMİR</span>
                  <span className="sm:hidden tracking-wider">ÖHD</span>
                </span>

                {/* Tooltip for mobile */}
                {showTooltip && (
                  <div className="sm:hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-primary bg-[#2a2c27] rounded-lg shadow-lg border border-[#ebf3fe]/20 whitespace-nowrap z-50 transition-all duration-200 ease-out">
                    <span className="text-[#c4c8bd] font-medium">
                      Ömer Halis DEMİR
                    </span>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-l-transparent border-r-transparent border-t-[#01438882]"></div>
                  </div>
                )}

                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#718355] to-[#87986a] group-hover:w-full transition-all duration-500"></div>
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
            <div className="flex items-center space-x-2">
              {/* Language Selector */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={toggleLanguageDropdown}
                  className="flex items-center space-x-1.5 px-2 py-1.5 text-[#c4c8bd] hover:bg-[#c4c8bd]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c4c8bd]/50"
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
                  <div className="absolute right-0 -mx-15 mt-1 py-2 w-22 bg-info rounded-lg shadow-lg border border-[#c4c8bd]/20 z-[70]">
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
                className="lg:hidden inline-flex items-center justify-center p-2 text-primary rounded-lg hover:bg-[#718355]/10 focus:outline-none focus:ring-2 focus:ring-[#b5c99a]/50 transition-all duration-300"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">{t.openMenu}</span>
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 top-3" : "top-1"
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-3 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 top-3" : "top-5"
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
            <div className="bg-[#020c3b] rounded-xl p-4 space-y-2">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.key;

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={handleNavigationClick}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[#ebf3fe] bg-info border-l-4 border-[#ebf3fe]"
                        : "text-[#ebf3fe] hover:bg-[#020617]/10"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Mobile Language Selector */}
              <div className="pt-3 border-t border-[#718355]/20">
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
                      <IconComponent className="w-5 h-5" />
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
      <div className="hidden lg:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex justify-end">
            <div className="flex items-center justify-center space-x-3 p-3 bg-gradient-to-r from-[#040d348d] via-[#091c708d] to-[#020c3b] rounded-b-2xl shadow-xl border-x border-b border-[#718355]/20">
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
