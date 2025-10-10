"use client";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSelector({ language, onLanguageChange, languagesConfig }) {
 const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

 const handleLanguageChange = (lang) => {
  setIsLanguageDropdownOpen(false);
  if (onLanguageChange) {
   onLanguageChange(lang);
  }
 };

 return (
  <div className="relative">
   <button
    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
    className="flex items-center space-x-2 px-3 py-2 text-primary hover:text-[#c4c8bd] hover:bg-[#c4c8bd]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c4c8bd]/50 border border-[#c4c8bd]/20 text-sm cursor-pointer hover:cursor-pointer"
   >
    <div className="flex items-center">
     <ReactCountryFlag
      countryCode={
       languagesConfig.find((lang) => lang.code === language)?.countryCode || "TR"
      }
      svg
      style={{
       width: "20px",
       height: "16px",
      }}
      title={
       languagesConfig.find((lang) => lang.code === language)?.name || "Turkey"
      }
     />
    </div>
    <span className="font-medium">{language}</span>
    <svg
     className={`w-3 h-3 transition-transform duration-300 ${isLanguageDropdownOpen ? "rotate-180" : ""
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
       className={`flex items-center space-x-2 w-full px-3 py-2 text-sm transition-all duration-300 cursor-pointer hover:cursor-pointer ${language === lang.code
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
 );
}
