"use client";
import { useState, useEffect } from "react";
import { FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/Translations/ExperienceTranslations";
import { getExperienceData } from "../data/data/ExperienceData";
import CategoryTabs from "../components/Experience/CategoryTabs";
import ExperienceItem from "../components/Experience/ExperienceItem";
import Title from "../components/extra/Title";
import "../styles/experience.css";

export default function ExperiencePage() {
 const { language } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);
 const [activeCategory, setActiveCategory] = useState("education");

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 const t = translations[language] || translations.TR;
 const experienceData = getExperienceData(language);

 const getCategoryStats = (category) => {
  const items = experienceData[category].items;
  const completed = items.filter((item) => item.status === "completed").length;
  const current = items.filter((item) => item.status === "current").length;
  return { total: items.length, completed, current };
 };

 const handleCategoryChange = (category) => {
  setActiveCategory(category);
 };

 return (
  <section id="exp" className="relative mt-20 min-h-screen">
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
     <FaBriefcase
      className={`w-8 h-8 text-blue-300 mx-auto mb-2 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     />

     {/* Title Component */}
     <Title
      title={t.title}
      subtitle={t.subtitle}
      description={t.description}
      isVisible={isVisible}
     />

     {/* Category Tabs Component */}
     <CategoryTabs
      experienceData={experienceData}
      translations={t}
      activeCategory={activeCategory}
      onCategoryChange={handleCategoryChange}
      getCategoryStats={getCategoryStats}
      isVisible={isVisible}
     />

     {/* Experience Timeline */}
     <div
      className={`bg-secondary p-8 rounded-2xl shadow-2xl sm:rounded-4xl sm:shadow-4xl transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      <div className="text-center mb-8">
       <h3 className="text-2xl font-bold mb-2">
        {t.categories[activeCategory].title}
       </h3>
       <p className="text-base px-2">
        {t.categories[activeCategory].description}
       </p>
      </div>

      {/* Timeline Items - Using ExperienceItem Component */}
      <div className="space-y-6">
       {experienceData[activeCategory].items.map((item, index) => (
        <ExperienceItem
         key={item.id}
         item={item}
         translations={t}
         isVisible={isVisible}
         index={index}
        />
       ))}
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}