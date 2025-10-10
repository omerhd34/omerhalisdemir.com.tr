"use client";
import SkillCard from "./SkillCard";
import SkillsStats from "./SkillsStats";

export default function SkillsContent({
 activeCategory,
 skillsData,
 translations,
 getCategoryStats,
 isVisible,
}) {
 return (
  <div
   className={`bg-secondary p-4 sm:p-8 rounded-2xl shadow-2xl sm:rounded-4xl sm:shadow-4xl transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
   {/* Header */}
   <div className="text-center mb-6 sm:mb-8">
    <h3 className="text-xl sm:text-2xl font-bold mb-2">
     {translations.categories[activeCategory]?.title || activeCategory}
    </h3>
    <p className="text-sm sm:text-base px-2">
     {translations.categories[activeCategory]?.description || ""}
    </p>
   </div>

   {/* Mobile: Compact grid layout */}
   <div className="block sm:hidden">
    <div className="grid grid-cols-2 gap-3">
     {skillsData[activeCategory].skills.map((skill, index) => (
      <SkillCard
       key={skill.name}
       skill={skill}
       index={index}
       isMobile={true}
       yearsExpText={translations.yearsExp}
      />
     ))}
    </div>
   </div>

   {/* Desktop */}
   <div className="hidden sm:block">
    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
     {skillsData[activeCategory].skills.map((skill, index) => (
      <SkillCard
       key={skill.name}
       skill={skill}
       index={index}
       isMobile={false}
       yearsExpText={translations.yearsExp}
      />
     ))}
    </div>
   </div>

   {/* Statistics */}
   <SkillsStats
    count={getCategoryStats(activeCategory).count}
    technologiesText={translations.categoryStats.technologies}
   />
  </div>
 );
}