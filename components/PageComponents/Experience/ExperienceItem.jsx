"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
 FaGraduationCap,
 FaUniversity,
 FaSchool,
 FaBriefcase,
 FaBookOpen,
 FaCertificate,
 FaMicrochip,
 FaDraftingCompass,
 FaCubes,
 FaServer,
 FaGlobeEurope,
 FaNetworkWired,
 FaCloud,
 FaDatabase,
 FaHdd,
 FaCogs,
 FaShieldAlt,
 FaLanguage,
 FaGlobe,
 FaCalculator,
 FaFlask,
 FaAtom,
 FaBrain,
 FaGithub,
 FaHtml5,
 FaCss3,
 FaJava,
 FaReact,
 FaMapMarkerAlt,
 FaStar,
 FaChevronDown,
 FaChevronRight,
 FaClock,
 FaTools,
 FaGitAlt,
 FaJsSquare,
 FaNodeJs,
} from "react-icons/fa";

import {
 SiReact,
 SiJavascript,
 SiAutodesk,
 SiHtml5,
 SiCss3,
 SiBootstrap,
 SiNextdotjs,
 SiNodedotjs,
 SiMongodb,
 SiTypescript,
 SiTailwindcss,
 SiExpress,
 SiMysql,
 SiArduino,
 SiCplusplus,
 SiServerfault,
 SiLibreofficemath,
 SiWolframmathematica,
 SiAutocad,
} from "react-icons/si";
import { RiEnglishInput } from "react-icons/ri";
import { MdElectricBolt, MdDomain } from "react-icons/md";
import { FcElectronics } from "react-icons/fc";

const iconMap = {
 FaGraduationCap,
 MdDomain,
 RiEnglishInput,
 FaUniversity,
 FaSchool,
 SiAutodesk,
 FaBriefcase,
 FaBookOpen,
 FcElectronics,
 SiAutocad,
 FaCertificate,
 FaMicrochip,
 FaDraftingCompass,
 FaCubes,
 FaServer,
 FaGlobeEurope,
 FaNetworkWired,
 FaCloud,
 FaDatabase,
 FaHdd,
 FaCogs,
 FaShieldAlt,
 FaLanguage,
 FaGlobe,
 FaCalculator,
 FaFlask,
 FaAtom,
 FaBrain,
 FaGithub,
 FaHtml5,
 FaCss3,
 FaJava,
 FaReact,
 SiReact,
 SiJavascript,
 SiHtml5,
 SiCss3,
 SiBootstrap,
 SiNextdotjs,
 SiNodedotjs,
 SiMongodb,
 SiTypescript,
 SiTailwindcss,
 SiExpress,
 SiMysql,
 SiArduino,
 SiCplusplus,
 SiServerfault,
 SiLibreofficemath,
 SiWolframmathematica,
 MdElectricBolt,
 FaTools,
 FaGitAlt,
 FaJsSquare,
 FaNodeJs,
};

const categoryColorMap = {
 education: "from-blue-900 to-cyan-900",
 internship: "from-purple-900 to-pink-900",
 certificates: "from-yellow-900 to-orange-900",
};

const iconColorMap = {
 FaReact: "text-cyan-400",
 SiReact: "text-cyan-400",
 SiJavascript: "text-yellow-400",
 SiTypescript: "text-blue-600",
 SiNextdotjs: "text-white",
 SiNodedotjs: "text-green-600",
 FaNodeJs: "text-green-600",

 FaHtml5: "text-orange-600",
 SiHtml5: "text-orange-600",
 FaCss3: "text-blue-500",
 SiCss3: "text-blue-500",
 SiBootstrap: "text-purple-600",
 SiTailwindcss: "text-cyan-500",

 SiExpress: "text-black",
 SiMongodb: "text-green-500",
 SiMysql: "text-blue-600",
 FaDatabase: "text-gray-600",

 FaGithub: "text-black",
 FaGitAlt: "text-orange-600",
 FaCloud: "text-blue-400",
 FaServer: "text-gray-900",
 FaTools: "text-gray-600",

 SiArduino: "text-teal-500",
 SiCplusplus: "text-blue-600",
 FaJava: "text-red-600",
 SiAutocad: "text-red-600",
 SiAutodesk: "text-blue-600",
 SiServerfault: "text-orange-500",

 FcElectronics: "text-blue-500",
 MdElectricBolt: "text-yellow-500",
 FaMicrochip: "text-purple-500",

 FaGlobe: "text-cyan-500",
 FaLanguage: "text-indigo-500",
 RiEnglishInput: "text-blue-600",
 SiLibreofficemath: "text-green-600",
 SiWolframmathematica: "text-red-500",

 FaNetworkWired: "text-indigo-500",
 MdDomain: "text-purple-500",
};

export default function ExperienceItem({ item, translations, isVisible, index }) {
 const [isExpanded, setIsExpanded] = useState(false);
 const [isMobileExpanded, setIsMobileExpanded] = useState(false);

 const Icon = typeof item.icon === 'string' ? iconMap[item.icon] : item.icon;
 const showExpandButton = item.achievements && item.achievements.length > 0;

 const iconBgColor = categoryColorMap[item.category] || "from-green-900 to-green-400";

 const getStatusBg = (status) => {
  switch (status) {
   case "completed":
    return "bg-black border-accent";
   case "current":
    return "bg-red-900 border-accent";
   case "upcoming":
    return "bg-yellow-500/20 border-accent";
   default:
    return "bg-gray-500/20 border-accent";
  }
 };

 const getIconColor = (iconName) => {
  return iconColorMap[iconName] || "text-primary";
 };

 return (
  <div
   className="relative"
   style={{
    animationDelay: `${index * 200}ms`,
    animation: `slideIn 0.6s ease-out ${index * 200}ms both`,
   }}
  >
   <div className="bg-info rounded-4xl transition-all duration-300 overflow-hidden">
    <div className="p-5 sm:p-6">
     <div className="flex items-start space-x-5 sm:space-x-4">
      <div className={`flex-shrink-0 p-3 rounded-full bg-gradient-to-r ${iconBgColor} float-animation`}>
       {Icon && <Icon className="w-5 h-5 sm:h-6 sm:w-6" />}
      </div>

      <div className="flex-1 min-w-0">
       <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
        <div className="min-w-0">
         <h4 className="text-[18px] sm:text-[19px] font-bold mb-1 break-words">
          {item.title}
         </h4>
         <p className="text-[16px] sm:text-[17px] font-medium break-words">
          {item.institution}
         </p>
        </div>
        <div className="text-left sm:text-right flex-shrink-0">
         <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium border ${getStatusBg(
           item.status
          )}`}
         >
          {translations.status[item.status]}
         </div>
        </div>
       </div>

       <div
        className={`flex flex-wrap gap-6 text-[15px] mb-4 ${!isMobileExpanded ? "hidden sm:flex" : ""
         }`}
       >
        {item.location && (
         <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>{item.location}</span>
         </div>
        )}
        {item.gpa && (
         <div className="flex items-center space-x-2">
          <FaStar className="w-4 h-4" />
          <span>
           {translations.gpa}: {item.gpa}
          </span>
         </div>
        )}
        {item.period && (
         <div className="flex items-center space-x-2">
          <FaClock className="w-4 h-4" />
          <span>{item.period}</span>
         </div>
        )}
       </div>

       <p
        className={`text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] tracking-tight sm:tracking-normal mb-5 ${!isMobileExpanded ? "hidden sm:block" : ""
         }`}
       >
        {item.description}
       </p>

       {item.technologies && item.technologies.length > 0 && (
        <div
         className={`flex flex-wrap gap-2 mb-4 ${!isMobileExpanded ? "hidden sm:flex" : ""
          }`}
        >
         {item.technologies.map((techIconName, techIndex) => {
          const TechIcon = iconMap[techIconName];
          const iconColorClass = getIconColor(techIconName);

          if (!TechIcon) {
           return null;
          }

          return (
           <div
            key={techIndex}
            className="p-2 bg-muted rounded-lg hover:scale-110 transition-all duration-300 group"
            title={techIconName}
           >
            <TechIcon
             className={`h-4 w-4 sm:w-5 sm:h-5 ${iconColorClass} transition-colors duration-300`}
            />
           </div>
          );
         })}
        </div>
       )}

       <button
        onClick={() => setIsMobileExpanded(!isMobileExpanded)}
        className="flex items-center space-x-2 transition-colors duration-200 sm:hidden sm:mb-4"
       >
        {isMobileExpanded ? (
         <FaChevronDown className="w-3 h-3 text-[#43a047]" />
        ) : (
         <FaChevronRight className="w-3 h-3 text-[#43a047]" />
        )}
        <span className="text-[15px] text-[#43a047]">
         {isMobileExpanded ? translations.showLess : translations.showMore}
        </span>
       </button>

       {showExpandButton && (
        <button
         onClick={() => setIsExpanded(!isExpanded)}
         className="hidden sm:flex items-center space-x-2 transition-colors duration-200 text-primary"
        >
         {isExpanded ? (
          <FaChevronDown className="w-4 h-4" />
         ) : (
          <FaChevronRight className="w-4 h-4" />
         )}
         <span className="text-[15px] text-[#0083cc]">
          {isExpanded ? translations.showLess : translations.showMore}
         </span>
        </button>
       )}
      </div>
     </div>
    </div>

    {((isExpanded && showExpandButton) || (isMobileExpanded && showExpandButton)) && (
     <div className="px-6 pb-6 pt-0 border-t border-info">
      <div className="mt-4">
       <h5 className="font-semibold mb-3 text-base">{translations.achievements}:</h5>
       <ul className="space-y-2 mb-4">
        {item.achievements?.map((achievement, achievementIndex) => (
         <li key={achievementIndex} className="flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-[#a5d6a7] mt-2 flex-shrink-0"></div>
          <span className="text-[16px]">{achievement}</span>
         </li>
        ))}
       </ul>

       {item.id === 1 && (
        <div className="flex flex-wrap gap-8 justify-center mt-5">
         <Link
          href="/images/UstunBasari.png"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[160px] sm:w-[400px] md:w-[500px] xl:w-[550px]"
         >
          <Image
           src="/images/UstunBasari.png"
           alt="Üstün Başarı Sertifikası"
           width={500}
           height={500}
           className="w-full h-auto rounded-4xl shadow-4xl hover:opacity-90 transition duration-300"
          />
         </Link>
         <Link
          href="/images/Sertifika.png"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[160px] sm:w-[400px] md:w-[500px] xl:w-[550px]"
         >
          <Image
           src="/images/Sertifika.png"
           alt="Sertifika"
           width={500}
           height={500}
           className="w-full h-auto rounded-4xl shadow-4xl hover:opacity-90 transition duration-300"
          />
         </Link>
        </div>
       )}
      </div>
     </div>
    )}
   </div>
  </div>
 );
}