"use client";
import { useState, useEffect } from "react";
import {
 FaCode,
 FaGraduationCap,
 FaRocket,
 FaLightbulb,
 FaMapMarkerAlt,
 FaBirthdayCake,
 FaUser,
 FaChevronDown,
 FaChevronRight,
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import translations from "../data/Translations/AboutTranslations";
import { useLanguage } from "../context/LanguageContext";
import "../styles/about.css";

export default function AboutPage() {
 const { language } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);
 const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);
 const [isInterestsExpanded, setIsInterestsExpanded] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 const t = translations[language] || translations.TR;

 const personalInfo = [
  {
   label: t.birthDate,
   value: `29.03.1998`,
   icon: FaBirthdayCake,
  },
  {
   label: t.location,
   value: (
    <span className="flex items-center justify-center gap-2">
     İstanbul, Türkiye
     <ReactCountryFlag
      countryCode="TR"
      svg
      style={{ width: "20px", height: "15px" }}
      title="Turkey"
     />
    </span>
   ),
   icon: FaMapMarkerAlt,
  },
  {
   label: t.education,
   value: t.university,
   icon: FaGraduationCap,
  },
  {
   label: t.passion,
   value: t.passionText,
   icon: FaCode,
  },
 ];

 const getTextPreview = (text, maxSentences = 3) => {
  const sentences = text
   .split(". ")
   .filter((sentence) => sentence.trim().length > 0);
  if (sentences.length <= maxSentences) {
   return { preview: text, hasMore: false };
  }

  const preview = sentences.slice(0, maxSentences).join(". ") + ".";
  const remaining =
   sentences.slice(maxSentences).join(". ") +
   (sentences[sentences.length - 1].endsWith(".") ? "" : ".");

  return { preview, remaining, hasMore: true };
 };

 const journeyText = getTextPreview(t.journeyDescription, 3);
 const interestsText = getTextPreview(t.interestsDescription, 3);

 return (
  <section id="about" className="relative mt-20 min-h-screen">
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
     <FaUser
      className={`w-8 h-8 text-blue-300 mx-auto mb-2 sm:mb-3 transition-all duration-1000 ${isVisible
       ? "opacity-100 translate-y-0"
       : "opacity-0 translate-y-10"
       }`}
     />

     {/* Title */}
     <div
      className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      <div className="inline-flex items-center space-x-3 mb-2">
       <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-300"></div>
       <span className="text-[16px] sm:text-base font-medium bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
        {t.subtitle}
       </span>
       <div className="w-12 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
      </div>
      <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r bg-clip-text text-blue-300 font-extrabold">
       {t.title}
      </h1>
     </div>

     <div className="max-w-none mx-auto space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
       {/* Journey */}
       <div
        className={`bg-secondary p-4 sm:p-8 rounded-4xl shadow-4xl transition-all duration-1000 delay-300 ${isVisible
         ? "opacity-100 translate-y-0"
         : "opacity-0 translate-y-10"
         }`}
       >
        <div className="text-center mb-3 sm:mb-6">
         <FaRocket className="w-8 h-8 mx-auto mb-2 sm:mb-3" />
         <h3 className="text-2xl font-bold">{t.journey}</h3>
        </div>
        <div className="text-[16px] text-left leading-relaxed">
         <p className="mb-4">{journeyText.preview}</p>

         {journeyText.hasMore && (
          <>
           <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${isJourneyExpanded
             ? "max-h-[1000px] opacity-100"
             : "max-h-0 opacity-0"
             }`}
           >
            <p className="mb-4 animate-fadeInUp">
             {journeyText.remaining}
            </p>
           </div>

           <button
            onClick={() => setIsJourneyExpanded(!isJourneyExpanded)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium mx-auto animate-bounceIn"
           >
            {isJourneyExpanded ? (
             <>
              <span>
               {language === "EN" ? "Show Less" : "Daha Az"}
              </span>
              <FaChevronDown className="w-3 h-3 text-[#0083cc] " />
             </>
            ) : (
             <>
              <span>
               {language === "EN" ? "Show More" : "Daha Fazla"}
              </span>
              <FaChevronRight className="w-3 h-3 text-[#0083cc] " />
             </>
            )}
           </button>
          </>
         )}
        </div>
       </div>

       {/* Interests */}
       <div
        className={`bg-secondary p-4 sm:p-8 rounded-4xl shadow-4xl transition-all duration-1000 delay-300 ${isVisible
         ? "opacity-100 translate-y-0"
         : "opacity-0 translate-y-10"
         }`}
       >
        <div className="text-center mb-3 sm:mb-6">
         <FaLightbulb className="w-8 h-8 mx-auto mb-3" />
         <h3 className="text-2xl font-bold">{t.interests}</h3>
        </div>
        <div className="text-[16px] text-left leading-relaxed">
         <p className="mb-4">{interestsText.preview}</p>

         {interestsText.hasMore && (
          <>
           <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${isInterestsExpanded
             ? "max-h-[1000px] opacity-100"
             : "max-h-0 opacity-0"
             }`}
           >
            <p className="mb-4 animate-fadeInUp">
             {interestsText.remaining}
            </p>
           </div>

           <button
            onClick={() =>
             setIsInterestsExpanded(!isInterestsExpanded)
            }
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium mt-4 mx-auto animate-bounceIn"
           >
            {isInterestsExpanded ? (
             <>
              <span>
               {language === "EN" ? "Show Less" : "Daha Az"}
              </span>
              <FaChevronDown className="w-3 h-3 text-[#0083cc] " />
             </>
            ) : (
             <>
              <span>
               {language === "EN" ? "Show More" : "Daha Fazla"}
              </span>
              <FaChevronRight className="w-3 h-3 text-[#0083cc] " />
             </>
            )}
           </button>
          </>
         )}
        </div>
       </div>
      </div>

      {/* Personal Info */}
      <div
       className={`bg-secondary p-4 sm:p-8 rounded-4xl shadow-4xl transition-all duration-1000 delay-300 ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
        }`}
      >
       <div className="text-center mb-6 sm:mb-8">
        <FaUser className="w-8 h-8 mx-auto mb-3" />
        <h3 className="text-2xl font-bold">{t.personalInfo}</h3>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-6">
        {personalInfo.map((info, index) => {
         const IconComponent = info.icon;
         return (
          <div
           key={info.label}
           className={`text-center :p-4 rounded-2xl bg-primary/5 hover:bg-[#01438882] transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:h-[150px] h-[90px] flex flex-col ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
            }`}
           style={{
            transitionDelay: `${600 + index * 100}ms`,
           }}
          >
           <div className="flex-1 flex flex-col items-center justify-between py-1 sm:py-2">
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="font-semibold text-xs sm:text-[16px] tracking-wide">
             {info.label}
            </div>
            <div className="font-medium text-sm sm:text-base break-words text-center">
             {info.value}
            </div>
           </div>
          </div>
         );
        })}
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}