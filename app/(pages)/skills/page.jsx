"use client";
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";
import CategoryButton from "../../../components/extra/CategoryButton";
import Title from "../../../components/extra/Title";
import SkillsContent from "../../../components/PageComponents/Skill/SkillsContent";
import LoadingScreen from "../../../components/extra/LoadingScreen";
import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

export default function SkillsPage() {
 const { language, t, loading: langLoading } = useLanguage();
 const { skills, loading: dataLoading } = useData();
 const [isVisible, setIsVisible] = useState(false);
 const [activeCategory, setActiveCategory] = useState("frontend");

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 if (langLoading || dataLoading || !skills) {
  return <LoadingScreen language={language} />;
 }

 const categoryIcons = {
  frontend: FaLaptopCode,
  backend: FaServer,
  tools: FaTools
 };

 const categoryColors = {
  frontend: "from-red-900 to-red-400",
  backend: "from-green-900 to-green-400",
  tools: "from-orange-900 to-orange-400"
 };

 const skillsData = Object.keys(skills).reduce((acc, key) => {
  acc[key] = {
   ...skills[key],
   icon: categoryIcons[key],
   color: categoryColors[key]
  };
  return acc;
 }, {});

 const getCategoryStats = (category) => {
  const categorySkills = skills[category].skills;
  const totalExp = categorySkills.reduce(
   (acc, skill) => acc + parseInt(skill.experience),
   0
  );

  const avgProficiency = Math.round(
   categorySkills.reduce((sum, skill) => sum + skill.percentage, 0) / categorySkills.length
  );

  return {
   totalExp,
   count: categorySkills.length,
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