"use client";
import { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { Toaster } from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext";
import translations from "../../data/Translations/ContactTranslations";
import { contactInfo, socialLinks } from "../../data/data/ContactData";
import ContactForm from "../../../components/PageComponents/Contact/ContactForm";
import ContactInfoCard from "../../../components/PageComponents/Contact/ContactInfoCard";
import SocialLinksCard from "../../../components/PageComponents/Contact/SocialLinksCard";
import Title from "../../../components/extra/Title";

export default function ContactPage() {
 const { language } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 const t = translations[language] || translations.TR;

 // Contact info with translations and flag
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
  <section id="contact" className="relative mt-20 min-h-screen">
   <Toaster />
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
     {/* Icon */}
     <FaEnvelope
      className={`w-8 h-8 text-blue-300 mx-auto mb-2 transition-all duration-1000 delay-100 ${isVisible
       ? "opacity-100 translate-y-0"
       : "opacity-0 translate-y-10"
       }`}
     />
     {/* Title */}
     <Title
      title={t.title}
      subtitle={t.subtitle}
      description={t.availability}
      isVisible={isVisible}
     />
     {/* Main Content Grid */}
     <div className="grid lg:grid-cols-2 gap-5 lg:gap-16">
      {/* Contact Form Component */}
      <ContactForm
       translations={t}
       language={language}
       isVisible={isVisible}
      />

      {/* Contact Info Card Component */}
      <ContactInfoCard
       translations={t}
       language={language}
       isVisible={isVisible}
       contactInfo={contactInfoWithTranslations}
      />
     </div>

     {/* Social Links Card Component */}
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