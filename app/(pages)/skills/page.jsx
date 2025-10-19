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
  const categorySkills = skills[category]?.skills || [];

  const avgProficiency = categorySkills.length > 0
   ? Math.round(
    categorySkills.reduce((sum, skill) => sum + (skill.percentage || 0), 0) / categorySkills.length
   )
   : 0;

  return {
   count: categorySkills.length,
   avgProficiency,
  };
 };

 const handleCategoryChange = (category) => {
  setActiveCategory(category);
 };

 const translations = {
  title: t('skills.title') || 'Yetenekler',
  subtitle: t('skills.subtitle') || 'Teknik Beceriler',
  description: t('skills.description') || 'Kullandığım teknolojiler ve yetkinlik seviyelerim',
  categories: {
   frontend: {
    title: t('skills.categories.frontend.title') || 'Frontend',
    description: t('skills.categories.frontend.description') || 'Frontend teknolojileri',
   },
   backend: {
    title: t('skills.categories.backend.title') || 'Backend',
    description: t('skills.categories.backend.description') || 'Backend teknolojileri',
   },
   tools: {
    title: t('skills.categories.tools.title') || 'Araçlar',
    description: t('skills.categories.tools.description') || 'Geliştirme araçları',
   },
  },
  categoryStats: {
   skills: t('skills.categoryStats.skills') || 'Yetenek',
   technologies: t('skills.categoryStats.technologies') || 'Teknoloji',
   avgLevel: t('skills.categoryStats.avgLevel') || 'Ortalama Seviye',
  },
  levels: {
   beginner: t('skills.levels.beginner') || 'Başlangıç',
   intermediate: t('skills.levels.intermediate') || 'Orta',
   advanced: t('skills.levels.advanced') || 'İleri',
   expert: t('skills.levels.expert') || 'Uzman',
  },
  yearsExp: t('skills.yearsExp') || 'Yıl Deneyim',
  proficiency: t('skills.proficiency') || 'Yetkinlik',
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
      <FaCode className="w-8 h-8 mx-auto text-green-200" />
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