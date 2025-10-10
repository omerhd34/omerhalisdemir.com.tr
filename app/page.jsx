"use client";
import { useState, useEffect } from "react";
import { FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";
import translations from "./data/Translations/HomeTranslations";
import { useLanguage } from "./context/LanguageContext";
import ProfileImage from "./components/Home/ProfileImage";
import MainContent from "./components/Home/MainContent";
import StatsCard from "./components/Home/StatsCard";
import "./styles/home.css";

export default function HomePage() {
 const { language } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 200);
  return () => clearTimeout(timer);
 }, []);

 const t = translations[language] || translations.TR;

 const cvUrl =
  language === "EN"
   ? "/pdf/cv-english.pdf#zoom=35"
   : "/pdf/cv.pdf#zoom=35";

 const stats = [
  { number: "15+", label: t.stats.skills, icon: FaCode },
  { number: "2", label: t.stats.experience, icon: FaGraduationCap },
  { number: "3", label: t.stats.projects, icon: FaRocket },
 ];

 return (
  <section className="min-h-[80vh] flex items-center justify-center pt-3 sm:pt-5 md:pt-10 lg:pt-10 2xl:pt-30">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full">
    <div className="max-w-7xl mx-auto lg:max-w-8xl xl:max-w-[1350px]">
     <div className="bg-secondary rounded-2xl shadow-2xl p-6 py-3 lg:p-8 xl:p-10 hover:shadow-3xl">
      <div
       className={`flex flex-col lg:flex-row items-center gap-3 lg:gap-10 xl:gap-16 transition-all duration-700 ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4"
        }`}
      >
       <ProfileImage />
       <MainContent
        name="Ömer Halis DEMİR"
        professionTitles={t.professionTitles}
        description={t.shortDescription}
        cvUrl={cvUrl}
        downloadText={t.downloadCV}
        viewProjectsText={t.viewProjects}
       />
       <StatsCard stats={stats} isVisible={isVisible} />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}