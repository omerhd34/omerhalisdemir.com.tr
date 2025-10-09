"use client";
import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { Toaster } from "react-hot-toast";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/Translations/ContactTranslations";
import { contactInfo, socialLinks } from "../data/data/ContactData";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfoCard from "../components/Contact/ContactInfoCard";
import SocialLinksCard from "../components/Contact/SocialLinksCard";

export default function ContactPage() {
 const { language } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 const t = translations[language] || translations.TR;

 const contactInfoWithTranslations = contactInfo.map((info) => ({
  ...info,
  label: t[info.label],
  value:
   info.label === "location" ? (
    <div className="flex items-center space-x-2">
     <span>{info.value}</span>
     <ReactCountryFlag
      countryCode={info.countryCode || "TR"}
      svg
      style={{ width: "16px", height: "12px" }}
      title={info.countryCode || "TR"}
     />
    </div>
   ) : (
    info.value
   ),
 }));

 return (
  <section id="contact" className="relative mt-20 min-h-screen"
  >
   <Toaster />
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary ">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 ">
     <FaEnvelope
      className={`w-8 h-8 text-blue-300 mx-auto mb-2 transition-all duration-1000 delay-100  ${isVisible
       ? "opacity-100 translate-y-0"
       : "opacity-0 translate-y-10"
       }`}
     />
     {/* Title */}
     <div
      className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      <div className="inline-flex items-center space-x-3 mb-2">
       <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-300"></div>
       <span className="text-[16px] sm:text-base font-medium bg-gradient-to-r from-blue-100 to-blue-300 bg-clip-text text-transparent">
        {t.subtitle}
       </span>
       <div className="w-12 h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
      </div>
      <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r bg-clip-text text-blue-300 font-extrabold">
       {t.title}
      </h1>
      <div
       className={`mt-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
       <p className="text-[16px] sm:text-lg max-w-3xl mx-auto px-2">
        {t.availability}
       </p>
      </div>
     </div>

     {/* Main Content Grid */}
     <div className="grid lg:grid-cols-2 gap-5 lg:gap-16">
      <ContactForm
       translations={t}
       language={language}
       isVisible={isVisible}
      />
      <ContactInfoCard
       translations={t}
       language={language}
       isVisible={isVisible}
       contactInfo={contactInfoWithTranslations}
      />
     </div>
     {/* Sosyal Medya Bağlantıları */}
     <SocialLinksCard
      translations={t}
      language={language}
      isVisible={isVisible}
      socialLinks={socialLinks}
     />
    </div>
   </div>
  </section>
 );
}
