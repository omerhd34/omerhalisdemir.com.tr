"use client";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import {
 FaGraduationCap,
 FaBirthdayCake,
 FaMapMarkerAlt,
 FaCode,
} from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import Title from "../../../components/extra/Title";
import "../../styles/about.css";
import InterestsCard from "../../../components/PageComponents/About/InterestsCard";
import PersonalInfoCard from "../../../components/PageComponents/About/PersonalInfoCard";
import JourneyCard from "../../../components/PageComponents/About/JourneyCard";

export default function AboutPage() {
 const { language, t, loading } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 // Loading state
 if (loading) {
  return (
   <section className="min-h-screen flex items-center justify-center">
    <div className="text-primary text-xl">
     {language === "TR" ? "Yükleniyor..." : "Loading..."}
    </div>
   </section>
  );
 }

 // Personal Info Data
 const personalInfo = [
  {
   label: t('birthDate'),
   value: `29.03.1998`,
   icon: FaBirthdayCake,
  },
  {
   label: t('location'),
   value: (
    <span className="flex items-center justify-center gap-2">
     İstanbul, Türkiye
     <ReactCountryFlag
      countryCode="TR"
      svg
      style={{ width: "20px", height: "15px" }}
      title="Turkey"
     />
    </span>
   ),
   icon: FaMapMarkerAlt,
  },
  {
   label: t('education'),
   value: t('university'),
   icon: FaGraduationCap,
  },
  {
   label: t('passion'),
   value: t('passionText'),
   icon: FaCode,
  },
 ];

 // Text preview helper function
 const getTextPreview = (text, maxSentences = 3) => {
  if (!text) return { preview: '', hasMore: false };

  const sentences = text
   .split(". ")
   .filter((sentence) => sentence.trim().length > 0);

  if (sentences.length <= maxSentences) {
   return { preview: text, hasMore: false };
  }

  const preview = sentences.slice(0, maxSentences).join(". ") + ".";
  const remaining =
   sentences.slice(maxSentences).join(". ") +
   (sentences[sentences.length - 1].endsWith(".") ? "" : ".");

  return { preview, remaining, hasMore: true };
 };

 const journeyText = getTextPreview(t('journeyDescription'), 3);
 const interestsText = getTextPreview(t('interestsDescription'), 3);

 return (
  <section id="about" className="relative mt-5 sm:mt-10 md:mt-20 min-h-screen">
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
     <FaUser
      className={`w-8 h-8 text-blue-300 mx-auto mb-2 sm:mb-3 transition-all duration-1000 ${isVisible
       ? "opacity-100 translate-y-0"
       : "opacity-0 translate-y-10"
       }`}
     />

     <Title
      title={t('title')}
      subtitle={t('subtitle')}
      isVisible={isVisible}
     />

     <div className="max-w-none mx-auto space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
       <JourneyCard
        journeyText={journeyText}
        translations={{
         journey: t('journey')
        }}
        language={language}
        isVisible={isVisible}
       />

       <InterestsCard
        interestsText={interestsText}
        translations={{
         interests: t('interests')
        }}
        language={language}
        isVisible={isVisible}
       />
      </div>

      <PersonalInfoCard
       personalInfo={personalInfo}
       translations={{
        personalInfo: t('personalInfo')
       }}
       isVisible={isVisible}
      />
     </div>
    </div>
   </div>
  </section>
 );
}