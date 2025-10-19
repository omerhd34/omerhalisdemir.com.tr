"use client";
import SkillCard from "./SkillCard";

export default function SkillsContent({
 activeCategory,
 skillsData,
 translations,
 getCategoryStats,
 isVisible,
}) {
 const skills = skillsData[activeCategory]?.skills || [];

 const getAverageProficiency = () => {
  if (!skills.length) return 0;
  const total = skills.reduce((sum, skill) => sum + (skill.percentage || 0), 0);
  return Math.round(total / skills.length);
 };

 const getTotalExperience = () => {
  const total = skills.reduce((sum, skill) => sum + parseInt(skill.experience || 0), 0);
  return total;
 };

 const avgProficiency = getAverageProficiency();
 const totalExp = getTotalExperience();

 return (
  <div
   className={`bg-secondary p-4 sm:p-8 rounded-2xl shadow-2xl sm:rounded-4xl sm:shadow-4xl transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
   <div className="text-center mb-6 sm:mb-8">
    <h3 className="text-xl sm:text-2xl font-bold mb-2">
     {translations.categories[activeCategory]?.title || activeCategory}
    </h3>
    <p className="text-sm sm:text-base px-2">
     {translations.categories[activeCategory]?.description || ""}
    </p>
   </div>

   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
    <div className="bg-info p-4 rounded-xl border border-info hover:border-primary/30 transition-all duration-300 hover:scale-105">
     <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
       {skills.length}
      </div>
      <div className="text-xs sm:text-sm text-primary/70">
       {translations.categoryStats.technologies}
      </div>
     </div>
    </div>

    <div className="bg-info p-4 rounded-xl border border-info hover:border-primary/30 transition-all duration-300 hover:scale-105">
     <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">
       {avgProficiency}%
      </div>
      <div className="text-xs sm:text-sm text-primary/70">
       {translations.categoryStats.avgLevel}
      </div>
     </div>
    </div>

    <div className="bg-info p-4 rounded-xl border border-info hover:border-primary/30 transition-all duration-300 hover:scale-105">
     <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">
       {totalExp}+
      </div>
      <div className="text-xs sm:text-sm text-primary/70">
       {translations.categoryStats.totalExp}
      </div>
     </div>
    </div>
   </div>

   <div className="block sm:hidden">
    <div className="grid grid-cols-2 gap-3">
     {skills.map((skill, index) => (
      <SkillCard
       key={skill.name}
       skill={skill}
       index={index}
       isMobile={true}
       translations={translations}
      />
     ))}
    </div>
   </div>

   <div className="hidden sm:block">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
     {skills.map((skill, index) => (
      <SkillCard
       key={skill.name}
       skill={skill}
       index={index}
       isMobile={false}
       translations={translations}
      />
     ))}
    </div>
   </div>
  </div>
 );
}