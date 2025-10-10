import ReactCountryFlag from "react-country-flag";

export function LanguageSelector({
 language,
 languagesConfig,
 isLanguageDropdownOpen,
 toggleLanguageDropdown,
 handleLanguageChange,
 languageDropdownRef,
}) {
 const currentLang = languagesConfig.find((lang) => lang.code === language);
 const currentCountryCode = currentLang?.countryCode || "TR";
 const currentCountryName = currentLang?.name || "Turkey";

 return (
  <div className="relative z-30" ref={languageDropdownRef}>
   <button
    onClick={toggleLanguageDropdown}
    className="language_button flex items-center space-x-1.5 px-2 py-1.5 text-[#c4c8bd] hover:bg-[#c4c8bd]/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c4c8bd]/50"
   >
    <div className="flex items-center">
     <ReactCountryFlag
      countryCode={currentCountryCode}
      svg
      style={{ width: "20px", height: "16px" }}
      title={currentCountryName}
     />
    </div>
    <span className="text-sm font-medium hidden xs:inline">
     {language}
    </span>
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

   {isLanguageDropdownOpen && (
    <div className="absolute right-0 -mx-15 mt-[2px] py-2 w-22 bg-info/95 backdrop-blur-sm rounded-lg shadow-lg bg-[#061149] border border-[#c4c8bd]/20 z-50">
     {languagesConfig.map((lang) => (
      <button
       key={lang.code}
       onClick={() => handleLanguageChange(lang.code)}
       className={`flex items-center space-x-2 w-full px-3 py-2 text-sm transition-all duration-300 ${language === lang.code
        ? "text-[#c4c8bd] bg-[#718355]/20"
        : "text-[#87986a] hover:text-[#c4c8bd] hover:bg-[#718355]/10"
        }`}
      >
       <div className="flex items-center">
        <ReactCountryFlag
         countryCode={lang.countryCode}
         svg
         style={{ width: "20px", height: "16px" }}
         title={lang.name}
        />
       </div>
       <span className="text-xs">{lang.code}</span>
      </button>
     ))}
    </div>
   )}
  </div>
 );
}