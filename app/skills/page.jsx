"use client";
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import skillsData from "../data/data/SkillsData";
import translations from "../data/Translations/SkillsTranslations";
import CategoryButton from "../components/extra/CategoryButton";
import "../styles/skills.css";

export default function SkillsPage() {
 const { language } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);
 const [activeCategory, setActiveCategory] = useState("frontend");

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 const t = translations[language] || translations.TR;

 const getCategoryStats = (category) => {
  const skills = skillsData[category].skills;
  const totalExp = skills.reduce((acc, skill) => acc + parseInt(skill.experience), 0);
  return { totalExp, count: skills.length };
 };

 const handleCategoryChange = (category) => {
  setActiveCategory(category);
 };

 return (
  <section id="skills" className="relative mt-20 min-h-screen">
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
     <div
      className={`text-center mb-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      <FaCode className="w-8 h-8 mx-auto text-blue-300" />
     </div>

     {/* Title */}
     <div
      className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      <div className="inline-flex items-center space-x-3 mb-2">
       <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-300"></div>
       <span className="text-[16px] sm:text-base font-medium bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
        {t.subtitle}
       </span>
       <div className="w-12 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
      </div>
      <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r bg-clip-text text-blue-300 font-extrabold">
       {t.title}
      </h1>
      <div
       className={`mt-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
       <p className="text-[16px] sm:text-lg max-w-3xl mx-auto px-2">{t.description}</p>
      </div>
     </div>

     <div
      className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      {Object.entries(skillsData).map(([key, data]) => {
       const stats = getCategoryStats(key);
       return (
        <CategoryButton
         key={key}
         categoryKey={key}
         title={t.categories[key]?.title || key}
         count={stats.count}
         countLabel={t.categoryStats.skills}
         icon={data.icon}
         color={data.color}
         isActive={activeCategory === key}
         onClick={handleCategoryChange}
        />
       );
      })}
     </div>

     <div
      className={`bg-secondary p-4 sm:p-8 rounded-2xl shadow-2xl sm:rounded-4xl sm:shadow-4xl transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      <div className="text-center mb-6 sm:mb-8">
       <h3 className="text-xl sm:text-2xl font-bold mb-2">
        {t.categories[activeCategory]?.title || activeCategory}
       </h3>
       <p className="text-sm sm:text-base px-2">
        {t.categories[activeCategory]?.description || ""}
       </p>
      </div>

      {/* Mobile: Kompakt grid layout */}
      <div className="block sm:hidden">
       <div className="grid grid-cols-2 gap-3">
        {skillsData[activeCategory].skills.map((skill, index) => {
         const Icon = skill.icon;
         return (
          <div
           key={skill.name}
           className="group relative"
           style={{
            animationDelay: `${index * 100}ms`,
            animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
           }}
          >
           <div className="bg-info p-4 rounded-lg transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center text-center">
             <div
              className={`p-2 rounded-lg bg-muted ${skill.color} float-animation mb-1 sm:mb-2`}
             >
              <Icon className="w-4 h-4" />
             </div>
             <h4 className="font-semibold text-sm leading-tight">{skill.name}</h4>
            </div>
           </div>
          </div>
         );
        })}
       </div>
      </div>

      {/* Desktop */}
      <div className="hidden sm:block">
       <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
        {skillsData[activeCategory].skills.map((skill, index) => {
         const Icon = skill.icon;
         return (
          <div
           key={skill.name}
           className="group relative"
           style={{
            animationDelay: `${index * 100}ms`,
            animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
           }}
          >
           <div className="bg-info p-6 rounded-xl transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-between">
             <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-lg bg-muted ${skill.color} float-animation`}>
               <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
               <h4 className="font-semibold text-[16px] sm:text-base">
                {skill.name}
               </h4>
               <p className="text-[12px] sm:text-xs">
                {skill.experience} {t.yearsExp}
               </p>
              </div>
             </div>
            </div>
           </div>
          </div>
         );
        })}
       </div>
      </div>

      <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-info">
       <div className="grid grid-cols-1 text-center">
        <div>
         <div className="text-2xl sm:text-3xl font-bold">
          {getCategoryStats(activeCategory).count}
         </div>
         <div className="text-sm sm:text-[18px]">{t.categoryStats.technologies}</div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}