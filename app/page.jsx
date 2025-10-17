"use client";
import { useState, useEffect } from "react";
import { FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";
import { useLanguage } from "../app/context/LanguageContext";
import { useData } from "../app/context/DataContext";
import ProfileImage from "../components/PageComponents/Home/ProfileImage.jsx";
import MainContent from "../components/PageComponents/Home/MainContent";
import StatsCard from "../components/PageComponents/Home/StatsCard";
import LoadingScreen from "../components/extra/LoadingScreen";
import "./styles/home.css";

export default function HomePage() {
 const { language, t, loading: langLoading } = useLanguage();
 const { skills, projects, loading: dataLoading } = useData();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 200);
  return () => clearTimeout(timer);
 }, []);

 if (langLoading || dataLoading || !skills || !projects) {
  return <LoadingScreen language={language} />;
 }

 const cvUrl =
  language === "EN"
   ? "/pdf/cv-english.pdf#zoom=35"
   : "/pdf/cv.pdf#zoom=35";

 const professionTitles = [
  t('home.professionTitles.0') || "Full Stack Geliştirici",
  t('home.professionTitles.1') || "Frontend Geliştirici",
  t('home.professionTitles.2') || "Backend Geliştirici",
  t('home.professionTitles.3') || "Elektrik Elektronik Mühendisi",
 ];

 const totalSkills = Object.values(skills || {}).reduce((acc, category) => {
  if (category && Array.isArray(category.skills)) {
   return acc + category.skills.length;
  }
  return acc;
 }, 0);

 const stats = [
  { number: `${totalSkills}+`, label: t('home.stats.skills') || 'Yetenekler', icon: FaCode },
  { number: "4", label: t('home.stats.experience') || 'Yıl Deneyim', icon: FaGraduationCap },
  { number: `${projects?.length || 0}`, label: t('home.stats.projects') || 'Projeler', icon: FaRocket },
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
        name={t('home.name') || "Ömer Halis DEMİR"}
        professionTitles={professionTitles}
        description={t('home.shortDescription')}
        cvUrl={cvUrl}
        downloadText={t('home.downloadCV') || 'CV İndir'}
        viewProjectsText={t('home.viewProjects') || 'Projeleri Gör'}
       />
       <StatsCard stats={stats} isVisible={isVisible} />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}