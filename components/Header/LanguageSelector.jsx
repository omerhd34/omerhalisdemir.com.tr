import ReactCountryFlag from "react-country-flag";

export function LanguageSelector({ language, handleLanguageChange }) {
 const isTurkish = language === "TR";
 const nextLang = isTurkish ? "EN" : "TR";
 const currentCountryCode = isTurkish ? "TR" : "GB";
 const currentCountryName = isTurkish ? "Türkçe" : "English";

 const toggleLanguage = () => {
  handleLanguageChange(nextLang);
 };

 return (
  <button
   onClick={toggleLanguage}
   className="hidden md:flex items-center justify-center w-12 h-8 rounded-xl bg-[#1a1f2e] border border-[#c4c8bd]/40 hover:bg-[#c4c8bd]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c4c8bd]/40"
  >
   <ReactCountryFlag
    countryCode={currentCountryCode}
    svg
    style={{ width: "24px", height: "18px" }}
    title={currentCountryName}
   />
  </button>
 );
}
