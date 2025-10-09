"use client";
import Link from "next/link";

export default function SocialLinksCard({ socialLinks, translations, isVisible }) {
 return (
  <div className="bg-secondary p-3 sm:p-8 rounded-b-4xl shadow-b-4xl">
   <h3 className="text-xl font-bold mb-3 sm:mb-6 flex items-center justify-center space-x-2">
    <span>{translations.socialMedia}</span>
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
       className={`group relative transition-all duration-300 ${social.color}`}
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