"use client";
import { useState } from "react";
import { FaRocket, FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function JourneyCard({ journeyText, translations, language, isVisible }) {
 const [isExpanded, setIsExpanded] = useState(false);

 return (
  <div
   className={`bg-secondary p-4 sm:p-8 rounded-4xl shadow-4xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
   <div className="text-center mb-3 sm:mb-6">
    <FaRocket className="w-8 h-8 mx-auto mb-2 sm:mb-3" />
    <h3 className="text-2xl font-bold">{translations.journey}</h3>
   </div>
   <div className="text-[16px] text-left leading-relaxed">
    <p className="mb-4">{journeyText.preview}</p>

    {journeyText.hasMore && (
     <>
      <div
       className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
       <p className="mb-4 animate-fadeInUp">{journeyText.remaining}</p>
      </div>

      <button
       onClick={() => setIsExpanded(!isExpanded)}
       className="flex items-center gap-2 text-[#43a047] hover:text-[#388e3c] transition-colors duration-300 font-medium mx-auto animate-bounceIn"
      >
       {isExpanded ? (
        <>
         <span>{language === "EN" ? "Show Less" : "Daha Az"}</span>
         <FaChevronDown className="w-3 h-3 text-[#43a047]" />
        </>
       ) : (
        <>
         <span>{language === "EN" ? "Show More" : "Daha Fazla"}</span>
         <FaChevronRight className="w-3 h-3 text-[#43a047]" />
        </>
       )}
      </button>
     </>
    )}
   </div>
  </div>
 );
}
