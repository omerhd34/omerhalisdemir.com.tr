"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinksCard({ language, isVisible }) {
 const title = language === "EN" ? "Social Media" : "Sosyal Medya";

 const socialLinks = [
  {
   name: "LinkedIn",
   url: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/",
   icon: FaLinkedin,
  },
  {
   name: "GitHub",
   url: "https://github.com/omerhd34",
   icon: FaGithub,
  },
 ];

 return (
  <div
   className={`bg-secondary p-3 sm:p-8 rounded-b-2xl shadow-b-2xl sm:rounded-b-4xl sm:shadow-b-4xl transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
   <h3 className="text-xl font-bold mb-3 sm:mb-6 flex items-center justify-center space-x-2">
    <span>{title}</span>
   </h3>
   <div className="flex justify-center space-x-10">
    {socialLinks.map((social, index) => {
     const IconComponent = social.icon;
     return (
      <Link
       key={index}
       href={social.url}
       target="_blank"
       rel="noopener noreferrer"
       className="group relative transition-all duration-300"
       style={{
        animationDelay: `${index * 100}ms`,
        animation: `bounceIn 0.8s ease-out ${index * 100}ms both`,
       }}
      >
       <div className="absolute inset-0 bg-primary rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
       <div className="relative h-10 w-10 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center border-2 border-[#01438882] group-hover:border-[#fff] transition-all duration-300 group-hover:scale-110">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-[#d4e6f9] transition-colors duration-300" />
       </div>
      </Link>
     );
    })}
   </div>
  </div>
 );
}