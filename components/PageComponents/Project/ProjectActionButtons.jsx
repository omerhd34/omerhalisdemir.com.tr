import Link from "next/link";
import { FaEye, FaGithub, FaExternalLinkAlt, FaImage, FaCertificate, FaAward } from "react-icons/fa";

export default function ProjectActionButtons({
 project,
 electronicsImageUrl,
 buttonTexts,
 isMobile = false,
}) {
 const baseClasses = "flex flex-wrap gap-2 xs:gap-3";
 const displayClasses = isMobile ? "" : "hidden sm:flex sm:gap-4 mb-3 xs:mb-4";

 const certificateUrl = project.id === 7 ? "/images/UstunBasari.png" : null;
 const achievementUrl = project.id === 7 ? "/images/Sertifika.png" : null;

 return (
  <div className={`${baseClasses} ${displayClasses}`}>
   {certificateUrl && (
    <Link
     href={certificateUrl}
     target="_blank"
     rel="noopener noreferrer"
     className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#2e7d32] to-[#1a5745] hover:from-[#43a047] hover:to-[#388e3c] text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl"
    >
     <FaCertificate className="w-4 h-4 mr-2 text-orange-300" />
     {buttonTexts.certificate || "Sertifika"}
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-orange-300" />
    </Link>
   )}

   {achievementUrl && (
    <Link
     href={achievementUrl}
     target="_blank"
     rel="noopener noreferrer"
     className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#2e7d32] to-[#1a5745] hover:from-[#43a047] hover:to-[#388e3c] text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl"
    >
     <FaAward className="w-4 h-4 mr-2 text-orange-300" />
     {buttonTexts.achievement || "Başarı Belgesi"}
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-orange-300" />
    </Link>
   )}

   {project.liveUrl && !certificateUrl && (
    <Link
     href={project.liveUrl}
     target="_blank"
     rel="noopener noreferrer"
     className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#2e7d32] to-[#1a5745] hover:from-[#43a047] hover:to-[#388e3c] text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl"
    >
     <FaEye className="w-4 h-4 mr-2 text-orange-300" />
     Demo
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-orange-300" />
    </Link>
   )}

   {!project.liveUrl && !certificateUrl && electronicsImageUrl && (
    <Link
     href={electronicsImageUrl}
     target="_blank"
     rel="noopener noreferrer"
     className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#2e7d32] to-[#1a5745] hover:from-[#43a047] hover:to-[#388e3c] text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl"
    >
     <FaImage className="w-4 h-4 mr-2 text-orange-300" />
     Demo
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-orange-300" />
    </Link>
   )}

   {project.githubUrl && (
    <Link
     href={project.githubUrl}
     target="_blank"
     rel="noopener noreferrer"
     className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#2e7d32] to-[#1a5745] hover:from-[#43a047] hover:to-[#388e3c] text-accent rounded-lg transition-all duration-300 group text-sm shadow-lg hover:shadow-xl"
    >
     <FaGithub className="w-4 h-4 mr-2 text-orange-300" />
     {buttonTexts.sourceCode}
     <FaExternalLinkAlt className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200 text-orange-300" />
    </Link>
   )}
  </div>
 );
}