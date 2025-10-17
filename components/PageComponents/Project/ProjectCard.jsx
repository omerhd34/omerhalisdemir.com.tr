"use client";
import { useState } from "react";
import Image from "next/image";
import {
 FaEye,
 FaGithub,
 FaExternalLinkAlt,
 FaArrowRight,
 FaChevronDown,
 FaChevronRight,
 FaUsers,
 FaBriefcase,
 FaBookOpen,
 FaRocket,
 FaChartLine,
} from "react-icons/fa";
import Link from "next/link";
import {
 SiReact,
 SiNextdotjs,
 SiTailwindcss,
 SiNodedotjs,
 SiExpress,
 SiArduino,
 SiCplusplus,
 SiMongodb,
 SiJavascript,
 SiMysql,
 SiTypescript,
 SiBootstrap,
} from "react-icons/si";
import {
 FaGitAlt,
 FaHtml5,
 FaCss3Alt,
 FaJsSquare,
 FaNodeJs,
 FaJava,
 FaMicrochip,
 FaTools,
} from "react-icons/fa";

const iconMap = {
 SiReact,
 SiNextdotjs,
 SiTailwindcss,
 SiNodedotjs,
 SiExpress,
 SiArduino,
 SiCplusplus,
 SiMongodb,
 SiJavascript,
 SiMysql,
 SiTypescript,
 SiBootstrap,
 FaGitAlt,
 FaGithub,
 FaHtml5,
 FaCss3Alt,
 FaJsSquare,
 FaNodeJs,
 FaJava,
 FaMicrochip,
 FaTools,
};

export default function ProjectCard({ project, translations, language, index }) {
 const [isExpanded, setIsExpanded] = useState(false);

 const getStatusBg = (status) => {
  switch (status) {
   case "completed":
    return "bg-info border-accent";
   case "current":
    return "bg-red-900 border-accent";
   case "upcoming":
    return "bg-yellow-500/20 border-accent";
   default:
    return "bg-gray-500/20 border-accent";
  }
 };

 const colorClasses = [
  "text-cyan-400 hover:text-cyan-300",
  "text-white hover:text-gray-200",
  "text-blue-500 hover:text-blue-400",
  "text-yellow-400 hover:text-yellow-300",
  "text-teal-400 hover:text-teal-300",
  "text-green-500 hover:text-green-400",
  "text-teal-500 hover:text-teal-400",
  "text-blue-600 hover:text-blue-500",
  "text-purple-400 hover:text-purple-300",
  "text-orange-400 hover:text-orange-300",
 ];

 return (
  <div
   className="bg-secondary rounded-2xl shadow-2xl sm:rounded-4xl sm:shadow-4xl transition-all duration-300 overflow-hidden"
   style={{
    animation: `slideIn 0.6s ease-out ${index * 200}ms both`,
   }}
  >
   <div className="py-3 px-4 xs:p-5 sm:p-6 lg:p-8">
    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 xl:space-x-8">
     <div className="flex-1 mb-2 sm:mb-6 lg:mb-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 xs:gap-4 mb-3 xs:mb-4">
       <div className="flex-1 min-w-0">
        <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 break-words">
         {project.title}
        </h3>
        <p className="mb-2 xs:mb-4 text-sm xs:text-base">{project.description}</p>
       </div>

       {/* Status - Desktop */}
       <div className="hidden sm:flex flex-col space-y-2 flex-shrink-0">
        <div
         className={`inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium border ${getStatusBg(
          project.status
         )}`}
        >
         {translations.status[project.status]}
        </div>
       </div>
      </div>

      {/* Technologies - Desktop */}
      <div className="hidden sm:flex flex-wrap gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6">
       {project.technologies.map((techIconName, techIndex) => {
        const TechIcon = iconMap[techIconName];
        const iconColorClass = colorClasses[techIndex % colorClasses.length];
        return (
         <div
          key={techIndex}
          className="p-1.5 xs:p-2 bg-muted rounded-lg transition-all duration-300 group hover:scale-110 hover:shadow-lg"
         >
          {TechIcon && (
           <TechIcon
            className={`w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 transition-all duration-300 ${iconColorClass}`}
           />
          )}
         </div>
        );
       })}
      </div>

      {/* Action Buttons - Desktop */}
      <div className="hidden sm:flex flex-wrap gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-4">
       {project.liveUrl && (
        <Link
         href={project.liveUrl}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-[#005bbb] to-[#0d345e] text-primary rounded-lg hover:from-[#0079fa] hover:to-[#0079fa] transition-all duration-300 group text-xs xs:text-sm"
        >
         <FaEye className="w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 text-cyan-300" />
         {language === "TR" ? "Canlı Demo" : "Live Demo"}
         <FaExternalLinkAlt className="w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
       )}

       {project.githubUrl && (
        <Link
         href={project.githubUrl}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-[#005bbb] to-[#0d345e] text-primary rounded-lg hover:from-[#0079fa] hover:to-[#0079fa] transition-all duration-300 group text-xs xs:text-sm"
        >
         <FaGithub className="w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 text-gray-300" />
         {language === "TR" ? "Kaynak Kod" : "Source Code"}
         <FaArrowRight className="w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
       )}
      </div>

      {/* Expand Button */}
      <button
       onClick={() => setIsExpanded(!isExpanded)}
       className="flex items-center space-x-1.5 xs:space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
      >
       {isExpanded ? (
        <FaChevronDown className="w-3 xs:w-4 h-3 xs:h-4 group-hover:translate-y-1 transition-transform duration-200" />
       ) : (
        <FaChevronRight className="w-3 xs:w-4 h-3 xs:h-4 group-hover:translate-x-1 transition-transform duration-200" />
       )}
       <span className="font-medium text-xs xs:text-sm">
        {isExpanded
         ? language === "TR"
          ? "Daha Az Göster"
          : "Show Less"
         : language === "TR"
          ? "Detayları Göster"
          : "Show Details"}
       </span>
      </button>

      {/* Mobile Content */}
      {isExpanded && (
       <div className="sm:hidden mt-4 space-y-4">
        <div className="flex justify-start">
         <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium border ${getStatusBg(
           project.status
          )}`}
         >
          {translations.status[project.status]}
         </div>
        </div>

        <div className="flex flex-wrap gap-2 xs:gap-3">
         {project.technologies.map((techIconName, techIndex) => {
          const TechIcon = iconMap[techIconName];
          const iconColorClass = colorClasses[techIndex % colorClasses.length];
          return (
           <div
            key={techIndex}
            className="p-1.5 xs:p-2 bg-muted rounded-lg transition-all duration-300 group hover:scale-110 hover:shadow-lg"
           >
            {TechIcon && (
             <TechIcon
              className={`w-3 xs:w-4 h-3 xs:h-4 transition-all duration-300 ${iconColorClass}`}
             />
            )}
           </div>
          );
         })}
        </div>

        <div className="flex flex-wrap gap-2 xs:gap-3">
         {project.liveUrl && (
          <Link
           href={project.liveUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-[#005bbb] to-[#0d345e] text-primary rounded-lg hover:from-[#0079fa] hover:to-[#0079fa] transition-all duration-300 group text-xs xs:text-sm"
          >
           <FaEye className="w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 text-cyan-300" />
           {language === "TR" ? "Canlı Demo" : "Live Demo"}
           <FaExternalLinkAlt className="w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2" />
          </Link>
         )}

         {project.githubUrl && (
          <Link
           href={project.githubUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-[#005bbb] to-[#0d345e] text-primary rounded-lg hover:from-[#0079fa] hover:to-[#0079fa] transition-all duration-300 group text-xs xs:text-sm"
          >
           <FaGithub className="w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 text-gray-300" />
           {language === "TR" ? "Kaynak Kod" : "Source Code"}
           <FaArrowRight className="w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2" />
          </Link>
         )}
        </div>
       </div>
      )}
     </div>
    </div>
   </div>

   {/* Expanded Content */}
   {isExpanded && (
    <div className="px-4 xs:px-5 sm:px-6 lg:px-8 pb-4 xs:pb-5 sm:pb-6 lg:pb-8 border-t border-info">
     <div className="pt-4 xs:pt-5 sm:pt-6 grid md:grid-cols-2 gap-6 xs:gap-7 sm:gap-8">
      {project.longDescription && (
       <div>
        <h4 className="font-semibold mb-2 xs:mb-3 flex items-center text-sm xs:text-base">
         <FaBookOpen className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-blue-400" />
         {language === "TR" ? "Proje Detayları" : "Project Details"}
        </h4>
        <p className="text-sm xs:text-base leading-relaxed">{project.longDescription}</p>
       </div>
      )}

      <div>
       <h4 className="font-semibold mb-2 xs:mb-3 flex items-center text-sm xs:text-base">
        <FaRocket className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-orange-400" />
        {language === "TR" ? "Tüm Özellikler" : "All Features"}
       </h4>
       <ul className="space-y-1.5 xs:space-y-2">
        {project.features.map((feature, featureIndex) => (
         <li key={featureIndex} className="flex items-start space-x-2 xs:space-x-3">
          <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-blue-800 mt-1.5 xs:mt-2 flex-shrink-0"></div>
          <span className="text-sm xs:text-base">{feature}</span>
         </li>
        ))}
       </ul>
      </div>

      {(project.team || project.role) && (
       <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 pt-3 xs:pt-4 border-t border-info">
        {project.team && (
         <div>
          <h4 className="font-semibold mb-2 flex items-center text-sm xs:text-base">
           <FaUsers className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-purple-400" />
           {language === "TR" ? "Takım" : "Team"}
          </h4>
          <span className="text-sm xs:text-base">{project.team}</span>
         </div>
        )}

        {project.role && (
         <div>
          <h4 className="font-semibold mb-2 flex items-center text-sm xs:text-base">
           <FaBriefcase className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-indigo-400" />
           {language === "TR" ? "Rolüm" : "My Role"}
          </h4>
          <span className="text-sm xs:text-base">{project.role}</span>
         </div>
        )}
       </div>
      )}

      {project.metrics && project.metrics.length > 0 && (
       <div className="md:col-span-2 pt-3 xs:pt-4 border-t border-info">
        <h4 className="font-semibold mb-3 xs:mb-4 flex items-center text-sm xs:text-base">
         <FaChartLine className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-green-400" />
         {language === "TR" ? "Proje Metrikleri" : "Project Metrics"}
        </h4>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4">
         {project.metrics.map((metric, metricIndex) => (
          <div
           key={metricIndex}
           className="bg-info rounded-lg p-3 xs:p-4 text-center hover:bg-opacity-80 transition-all duration-300"
          >
           <div className="text-lg xs:text-xl sm:text-2xl font-bold mb-1 text-cyan-400">
            {metric.value}
           </div>
           <div className="text-xs xs:text-sm text-gray-300">{metric.label}</div>
          </div>
         ))}
        </div>

        {project.id === "custom-arduino-uno" && (
         <div className="text-center pt-6 border-t border-info my-6">
          <div className="relative inline-block group max-w-4xl mx-auto">
           <div className="absolute -inset-3 bg-gradient-to-r from-cyan-300 via-purple-200 to-cyan-300 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-700"></div>
           <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl">
            <Image
             src="/images/1.png"
             alt={
              language === "TR"
               ? "Arduino Uno Özel Tasarım PCB Kartı"
               : "Custom Arduino Uno PCB Board Design"
             }
             width={1200}
             height={600}
             quality={95}
             priority={true}
             className="w-full h-auto rounded-lg transition-all duration-700 ease-out transform group-hover:scale-[1.02] drop-shadow-2xl"
            />
           </div>
          </div>
         </div>
        )}
       </div>
      )}
     </div>
    </div>
   )}
  </div>
 );
}