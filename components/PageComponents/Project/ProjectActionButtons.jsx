import Link from "next/link";
import { FaEye, FaGithub, FaExternalLinkAlt, FaArrowRight, FaImage } from "react-icons/fa";

export default function ProjectActionButtons({
 project,
 electronicsImageUrl,
 buttonTexts,
 isMobile = false,
}) {
 const baseClasses = "flex flex-wrap gap-2 xs:gap-3";
 const displayClasses = isMobile ? "" : "hidden sm:flex sm:gap-4 mb-3 xs:mb-4";
 const buttonColorClasses = isMobile
  ? "from-[#005bbb] to-[#0d345e] hover:from-[#0079fa] hover:to-[#0079fa]"
  : "";

 return (
  <div className={`${baseClasses} ${displayClasses}`}>
   {project.liveUrl && (
    <Link
     href={project.liveUrl}
     target="_blank"
     rel="noopener noreferrer"
     className={`inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r ${isMobile
      ? buttonColorClasses
      : "from-[#2e7d32] to-[#1a5745] hover:from-[#43a047] hover:to-[#388e3c]"
      } text-primary rounded-lg transition-all duration-300 group text-xs xs:text-sm`}
    >
     <FaEye
      className={`w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 ${isMobile ? "text-cyan-300" : "text-green-300"
       }`}
     />
     Demo
     <FaExternalLinkAlt
      className={`w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2 ${!isMobile ? "group-hover:translate-x-1" : ""
       } transition-transform duration-200`}
     />
    </Link>
   )}

   {!project.liveUrl && electronicsImageUrl && (
    <Link
     href={electronicsImageUrl}
     target="_blank"
     rel="noopener noreferrer"
     className={`inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r ${isMobile
      ? buttonColorClasses
      : "from-[#2e7d32] to-[#1a5745] hover:from-[#43a047] hover:to-[#388e3c]"
      } text-primary rounded-lg transition-all duration-300 group text-xs xs:text-sm`}
    >
     <FaImage
      className={`w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 ${isMobile ? "text-cyan-300" : "text-green-300"
       }`}
     />
     Demo
     <FaExternalLinkAlt
      className={`w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2 ${!isMobile ? "group-hover:translate-x-1" : ""
       } transition-transform duration-200`}
     />
    </Link>
   )}

   {/* GitHub butonu */}
   {project.githubUrl && (
    <Link
     href={project.githubUrl}
     target="_blank"
     rel="noopener noreferrer"
     className={`inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r ${buttonColorClasses || "from-[#005bbb] to-[#0d345e] hover:from-[#0079fa] hover:to-[#0079fa]"
      } text-primary rounded-lg transition-all duration-300 group text-xs xs:text-sm`}
    >
     <FaGithub className="w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 text-primary" />
     {buttonTexts.sourceCode}
     <FaArrowRight
      className={`w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2 ${!isMobile ? "group-hover:translate-x-1" : ""
       } transition-transform duration-200`}
     />
    </Link>
   )}
  </div>
 );
}