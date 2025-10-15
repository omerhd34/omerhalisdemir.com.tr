"use client";
import { useState, useEffect } from "react";
import { FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { getExperienceData } from "../../data/data/ExperienceData";
import CategoryTabs from "../../../components/PageComponents/Experience/CategoryTabs";
import ExperienceItem from "../../../components/PageComponents/Experience/ExperienceItem";
import Title from "../../../components/extra/Title";
import "../../styles/experience.css";

export default function ExperiencePage() {
 const { language, t, loading } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);
 const [activeCategory, setActiveCategory] = useState("education");

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 if (loading) {
  return (
   <section className="min-h-screen flex items-center justify-center">
    <div className="text-primary text-xl">
     {language === "TR" ? "Yükleniyor..." : "Loading..."}
    </div>
   </section>
  );
 }

 const experienceData = getExperienceData(language);

 const translations = {
  title: t('title'),
  subtitle: t('subtitle'),
  description: t('description'),
  categories: {
   education: {
    title: t('categories.education.title'),
    description: t('categories.education.description'),
   },
   internship: {
    title: t('categories.internship.title'),
    description: t('categories.internship.description'),
   },
   certificates: {
    title: t('categories.certificates.title'),
    description: t('categories.certificates.description'),
   },
  },
  status: {
   completed: t('status.completed'),
   current: t('status.current'),
   upcoming: t('status.upcoming'),
  },
  duration: t('duration'),
  location: t('location'),
  gpa: t('gpa'),
  technologies: t('technologies'),
  achievements: t('achievements'),
  details: t('details'),
  showMore: t('showMore'),
  showLess: t('showLess'),
 };

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
  <section id="exp" className="relative mt-5 sm:mt-10 md:mt-20 min-h-screen">
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
     <FaBriefcase
      className={`w-8 h-8 text-blue-300 mx-auto mb-2 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     />

     <Title
      title={translations.title}
      subtitle={translations.subtitle}
      description={translations.description}
      isVisible={isVisible}
     />

     <CategoryTabs
      experienceData={experienceData}
      translations={translations}
      activeCategory={activeCategory}
      onCategoryChange={handleCategoryChange}
      getCategoryStats={getCategoryStats}
      isVisible={isVisible}
     />

     <div
      className={`bg-secondary p-8 rounded-2xl shadow-2xl sm:rounded-4xl sm:shadow-4xl transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      <div className="text-center mb-8">
       <h3 className="text-2xl font-bold mb-2">
        {translations.categories[activeCategory].title}
       </h3>
       <p className="text-base px-2">
        {translations.categories[activeCategory].description}
       </p>
      </div>

      <div className="space-y-6">
       {experienceData[activeCategory].items.map((item, index) => (
        <ExperienceItem
         key={item.id}
         item={item}
         translations={translations}
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