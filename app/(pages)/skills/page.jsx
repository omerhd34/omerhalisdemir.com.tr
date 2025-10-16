"use client";
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import skillsData from "../../data/SkillsData";
import CategoryButton from "../../../components/extra/CategoryButton";
import Title from "../../../components/extra/Title";
import SkillsContent from "../../../components/PageComponents/Skill/SkillsContent";
import "../../styles/skills.css";
import LoadingScreen from "../../../components/extra/LoadingScreen";

export default function SkillsPage() {
 const { language, t, loading } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);
 const [activeCategory, setActiveCategory] = useState("frontend");

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 if (loading) return <LoadingScreen language={language} />;


 const getCategoryStats = (category) => {
  const skills = skillsData[category].skills;
  const totalExp = skills.reduce(
   (acc, skill) => acc + parseInt(skill.experience),
   0
  );

  const avgProficiency = Math.round(
   skills.reduce((sum, skill) => sum + skill.percentage, 0) / skills.length
  );

  return {
   totalExp,
   count: skills.length,
   avgProficiency,
  };
 };

 const handleCategoryChange = (category) => {
  setActiveCategory(category);
 };

 const translations = {
  title: t('skills.title'),
  subtitle: t('skills.subtitle'),
  description: t('skills.description'),
  categories: {
   frontend: {
    title: t('categories.frontend.title'),
    description: t('categories.frontend.description'),
   },
   backend: {
    title: t('categories.backend.title'),
    description: t('categories.backend.description'),
   },
   tools: {
    title: t('categories.tools.title'),
    description: t('categories.tools.description'),
   },
  },
  categoryStats: {
   skills: t('categoryStats.skills'),
   technologies: t('categoryStats.technologies'),
   avgLevel: t('categoryStats.avgLevel'),
   totalExp: t('categoryStats.totalExp'),
  },
  levels: {
   beginner: t('levels.beginner'),
   intermediate: t('levels.intermediate'),
   advanced: t('levels.advanced'),
   expert: t('levels.expert'),
  },
  yearsExp: t('yearsExp'),
  proficiency: t('proficiency'),
 };

 return (
  <section id="skills" className="relative mt-5 sm:mt-10 md:mt-20 min-h-screen">
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
     <div
      className={`text-center mb-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      <FaCode className="w-8 h-8 mx-auto text-blue-300" />
     </div>

     <Title
      title={translations.title}
      subtitle={translations.subtitle}
      description={translations.description}
      isVisible={isVisible}
     />

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
         title={translations.categories[key]?.title || key}
         count={stats.count}
         countLabel={translations.categoryStats.skills}
         icon={data.icon}
         color={data.color}
         isActive={activeCategory === key}
         onClick={handleCategoryChange}
        />
       );
      })}
     </div>

     <SkillsContent
      activeCategory={activeCategory}
      skillsData={skillsData}
      translations={translations}
      getCategoryStats={getCategoryStats}
      isVisible={isVisible}
     />
    </div>
   </div>
  </section>
 );
}