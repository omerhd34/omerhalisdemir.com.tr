"use client";
import { FaUser } from "react-icons/fa";

export default function PersonalInfoCard({ personalInfo, translations, isVisible }) {
 return (
  <div
   className={`bg-secondary p-4 sm:p-8 rounded-4xl shadow-4xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
   <div className="text-center mb-6 sm:mb-8">
    <FaUser className="w-8 h-8 mx-auto mb-3" />
    <h3 className="text-2xl font-bold">{translations.personalInfo}</h3>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-6">
    {personalInfo.map((info, index) => {
     const IconComponent = info.icon;
     return (
      <div
       key={info.label}
       className={`text-center :p-4 rounded-2xl bg-primary/5 hover:bg-[#01438882] transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:h-[150px] h-[90px] flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
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
 );
}