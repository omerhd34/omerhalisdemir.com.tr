"use client";
import { useState, useEffect } from "react";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";
import CategoryTabs from "../../../components/PageComponents/Experience/CategoryTabs";
import ExperienceItem from "../../../components/PageComponents/Experience/ExperienceItem";
import Title from "../../../components/extra/Title";
import "../../styles/experience.css";
import LoadingScreen from "../../../components/extra/LoadingScreen";

export default function ExperiencePage() {
 const { language, t, loading: langLoading } = useLanguage();
 const { experience, loading: dataLoading } = useData();
 const [isVisible, setIsVisible] = useState(false);
 const [activeCategory, setActiveCategory] = useState("education");

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 if (langLoading || dataLoading || !experience) {
  return <LoadingScreen language={language} />;
 }

 const categoryIcons = {
  education: FaGraduationCap,
  internship: FaBriefcase,
  certificates: FaCertificate
 };

 const categoryColors = {
  education: "from-red-900 to-red-400",
  internship: "from-green-900 to-green-400",
  certificates: "from-orange-900 to-orange-400"
 };

 const experienceData = Object.keys(experience).reduce((acc, key) => {
  acc[key] = {
   ...experience[key],
   icon: categoryIcons[key],
   color: categoryColors[key]
  };
  return acc;
 }, {});

 const translations = {
  title: t('experience.title') || 'Deneyim',
  subtitle: t('experience.subtitle') || 'Eğitim & Deneyim',
  description: t('experience.description') || 'Eğitim ve profesyonel deneyimlerim',
  categories: {
   education: {
    title: t('experience.categories.education.title') || 'Eğitim',
    description: t('experience.categories.education.description') || 'Eğitim geçmişim',
   },
   internship: {
    title: t('experience.categories.internship.title') || 'Staj',
    description: t('experience.categories.internship.description') || 'Staj deneyimlerim',
   },
   certificates: {
    title: t('experience.categories.certificates.title') || 'Sertifikalar',
    description: t('experience.categories.certificates.description') || 'Aldığım sertifikalar',
   },
  },
  status: {
   completed: t('experience.status.completed') || 'Tamamlandı',
   current: t('experience.status.current') || 'Devam Ediyor',
   upcoming: t('experience.status.upcoming') || 'Yakında',
  },
  duration: t('experience.duration') || 'Süre',
  location: t('experience.location') || 'Konum',
  gpa: t('experience.gpa') || 'Not Ortalaması',
  technologies: t('experience.technologies') || 'Teknolojiler',
  achievements: t('experience.achievements') || 'Başarılar',
  details: t('experience.details') || 'Detaylar',
  showMore: t('experience.showMore') || 'Daha Fazla',
  showLess: t('experience.showLess') || 'Daha Az',
 };

 const getCategoryStats = (category) => {
  const items = experienceData[category]?.items || [];
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
        {translations.categories[activeCategory]?.title || activeCategory}
       </h3>
       <p className="text-base px-2">
        {translations.categories[activeCategory]?.description || ''}
       </p>
      </div>

      <div className="space-y-6">
       {(experienceData[activeCategory]?.items || []).map((item, index) => (
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