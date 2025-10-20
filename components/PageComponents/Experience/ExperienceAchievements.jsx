import Link from "next/link";
import Image from "next/image";

export default function ExperienceAchievements({ item, translations, isExpanded, isMobileExpanded }) {
 if (!isExpanded && !isMobileExpanded) return null;
 if (!item.achievements || item.achievements.length === 0) return null;

 return (
  <div className="mt-5 px-6 py-3 pt-0 border-t border-b border-info">
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

    {item.id === 7 && (
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
 );
}