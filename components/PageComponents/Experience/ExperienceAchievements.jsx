export default function ExperienceAchievements({ item, translations, isExpanded, isMobileExpanded, language }) {
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
   </div>
  </div>
 );
}