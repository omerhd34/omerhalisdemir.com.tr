"use client";
import { useState, useEffect } from "react";
import { FaCode, FaRocket, FaGraduationCap } from "react-icons/fa";
import { useLanguage } from "./context/LanguageContext";
import ProfileImage from "../components/PageComponents/Home/ProfileImage";
import MainContent from "../components/PageComponents/Home/MainContent";
import StatsCard from "../components/PageComponents/Home/StatsCard";
import "./styles/home.css";

export default function HomePage() {
 const { language, t, loading } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 200);
  return () => clearTimeout(timer);
 }, []);

 if (loading) {
  return (
   <section className="min-h-[80vh] flex items-center justify-center">
    <div className="text-primary text-xl">
     {language === "TR" ? "Yükleniyor..." : "Loading..."}
    </div>
   </section>
  );
 }

 const cvUrl =
  language === "EN"
   ? "/pdf/cv-english.pdf#zoom=35"
   : "/pdf/cv.pdf#zoom=35";

 const professionTitles = [
  t('professionTitles.0') || "Full Stack Geliştirici",
  t('professionTitles.1') || "Frontend Geliştirici",
  t('professionTitles.2') || "Backend Geliştirici",
  t('professionTitles.3') || "Elektrik Elektronik Mühendisi",
 ];

 const stats = [
  { number: "15+", label: t('stats.skills'), icon: FaCode },
  { number: "4", label: t('stats.experience'), icon: FaGraduationCap },
  { number: "4", label: t('stats.projects'), icon: FaRocket },
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
        name={t('name') || "Ömer Halis DEMİR"}
        professionTitles={professionTitles}
        description={t('shortDescription')}
        cvUrl={cvUrl}
        downloadText={t('downloadCV')}
        viewProjectsText={t('viewProjects')}
       />
       <StatsCard stats={stats} isVisible={isVisible} />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}