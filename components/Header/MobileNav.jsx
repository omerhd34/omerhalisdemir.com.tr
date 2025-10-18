import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

export function MobileNav({
 isMenuOpen,
 navigationItems,
 activeSection,
 handleNavigationClick,
 language,
 languagesConfig,
 handleLanguageChange,
 socialLinks,
 t,
}) {
 const [isLight, setIsLight] = useState(false);

 useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
   setIsLight(savedTheme === 'light');
  }
 }, []);

 const toggleTheme = () => {
  const newTheme = !isLight;
  setIsLight(newTheme);
  localStorage.setItem('theme', newTheme ? 'light' : 'dark');
  document.documentElement.classList.toggle('light', newTheme);
 };

 return (
  <div
   className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-[700px] opacity-100 mt-6" : "max-h-0 opacity-0"
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
       className={`flex items-center space-x-4 sm:space-x-5 py-2 md:py-3 px-3 rounded-lg text-[15px] md:text-[18px] font-medium transition-all duration-300 ${isActive
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

    <div className="py-3 my-0 border-t border-[#718355]/20 ">
     <div className="flex justify-center space-x-3">
      <button
       onClick={toggleTheme}
       className="flex items-center justify-center px-3 py-2 rounded-lg bg-gradient-to-r from-[#020617] to-[#020617] hover:from-[#000] hover:to-[#000] transition-all duration-300 group"
      >
       {isLight ? (
        <FaMoon className="w-5 h-5 text-blue-400" />
       ) : (
        <FaSun className="w-5 h-5 text-yellow-400" />
       )}
      </button>

      {languagesConfig.map((lang) => (
       <button
        key={lang.code}
        onClick={() => handleLanguageChange(lang.code)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${language === lang.code
         ? "text-[#ebf3fe] bg-black border border-[#ebf3fe]"
         : "text-[#ebf3fe] hover:bg-[#020617]/10"
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
    </div>

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
 );
}