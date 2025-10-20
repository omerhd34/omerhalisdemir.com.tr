"use client";
import { useState, useEffect } from "react";
import { FaCode, FaLaptopCode, FaServer, FaTools } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";
import CategoryButton from "../../../components/extra/CategoryButton";
import Title from "../../../components/extra/Title";
import SkillsContent from "../../../components/PageComponents/Skill/SkillsContent";
import LoadingScreen from "../../../components/extra/LoadingScreen";

export default function SkillsPage() {
 const { language, loading: langLoading } = useLanguage();
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

 const pageTranslations = {
  title: language === "EN" ? "Skills" : "Yetenekler",
  subtitle: language === "EN" ? "Technical Skills" : "Teknik Beceriler",
  description: language === "EN"
   ? "With the deep technical knowledge and experience I've gained throughout my web development journey, I create user-centric and innovative solutions. I confidently navigate across a broad technology spectrum from frontend to backend, excelling at every layer."
   : "Web geliştirme serüvenimde edindiğim derin teknik bilgi ve deneyimle, kullanıcı odaklı ve yenilikçi çözümler üretiyorum. Frontend'den backend'e uzanan geniş teknoloji yelpazesinde, her katmanda güvenle hareket ediyorum.",
 };

 const categoryTranslations = {
  frontend: {
   title: language === "EN" ? "Frontend Technologies" : "Frontend Teknolojileri",
   description: language === "EN"
    ? "Frontend technologies and frameworks"
    : "Frontend teknolojileri ve framework'ler",
  },
  backend: {
   title: language === "EN" ? "Backend & Database Technologies" : "Backend ve Veritabanı Teknolojileri",
   description: language === "EN"
    ? "Backend technologies and databases"
    : "Backend teknolojileri ve veritabanları",
  },
  tools: {
   title: language === "EN" ? "Development Environment" : "Geliştirme Ortamı",
   description: language === "EN"
    ? "Development tools and platforms"
    : "Geliştirme araçları ve platformlar",
  },
 };

 const statsTranslations = {
  skills: language === "EN" ? "Skills" : "Yetenek",
  technologies: language === "EN" ? "Technologies" : "Teknoloji",
  avgLevel: language === "EN" ? "Average Level" : "Ortalama Seviye",
 };

 const levelTranslations = {
  beginner: language === "EN" ? "Beginner" : "Başlangıç",
  intermediate: language === "EN" ? "Intermediate" : "Orta",
  advanced: language === "EN" ? "Advanced" : "İleri",
  expert: language === "EN" ? "Expert" : "Uzman",
 };

 const otherTranslations = {
  yearsExp: language === "EN" ? "Years Experience" : "Yıl Deneyim",
  proficiency: language === "EN" ? "Proficiency" : "Yetkinlik",
 };

 const translations = {
  ...pageTranslations,
  categories: categoryTranslations,
  categoryStats: statsTranslations,
  levels: levelTranslations,
  ...otherTranslations,
 };

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