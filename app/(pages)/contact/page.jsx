"use client";
import { useState, useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { Toaster } from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";
import ContactForm from "../../../components/PageComponents/Contact/ContactForm";
import ContactInfoCard from "../../../components/PageComponents/Contact/ContactInfoCard";
import SocialLinksCard from "../../../components/PageComponents/Contact/SocialLinksCard";
import Title from "../../../components/extra/Title";
import LoadingScreen from "../../../components/extra/LoadingScreen";

export default function ContactPage() {
 const { language, t, loading: langLoading } = useLanguage();
 const { contactData, loading: dataLoading } = useData();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 if (langLoading || dataLoading || !contactData) {
  return <LoadingScreen language={language} />;
 }

 const iconMap = {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub
 };

 const contactInfoWithTranslations = contactData.contactInfo.map((info) => ({
  ...info,
  icon: iconMap[info.icon],
  label: t(info.label_key),
  value:
   info.label_key === "location" ? (
    <div className="flex items-center space-x-2">
     <span>{info.value}</span>
     <ReactCountryFlag
      countryCode={info.country_code || "TR"}
      svg
      style={{ width: "16px", height: "12px" }}
      title={info.country_code || "TR"}
     />
    </div>
   ) : (
    info.value
   ),
 }));

 const socialLinks = contactData.socialLinks.map((link) => ({
  ...link,
  icon: iconMap[link.icon],
  url: link.url,
 }));

 return (
  <section id="contact" className="relative mt-5 sm:mt-10 md:mt-20 min-h-screen">
   <Toaster />
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
     <FaEnvelope
      className={`w-8 h-8 text-green-200 mx-auto mb-2 transition-all duration-1000 delay-100 ${isVisible
       ? "opacity-100 translate-y-0"
       : "opacity-0 translate-y-10"
       }`}
     />
     <Title
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
      description={t('contact.availability')}
      isVisible={isVisible}
     />

     <div className="grid lg:grid-cols-2 gap-5 lg:gap-16">
      <ContactForm
       translations={{
        formTitle: t('contact.formTitle'),
        name: t('contact.name'),
        email: t('contact.email'),
        phone: t('contact.phone'),
        subject: t('contact.subject'),
        message: t('contact.message'),
        send: t('contact.send'),
        sending: t('contact.sending'),
        namePlaceholder: t('contact.namePlaceholder'),
        emailPlaceholder: t('contact.emailPlaceholder'),
        subjectPlaceholder: t('contact.subjectPlaceholder'),
        messagePlaceholder: t('contact.messagePlaceholder'),
        phonePlaceholder: t('contact.phonePlaceholder'),
       }}
       language={language}
       isVisible={isVisible}
      />

      <div className="flex flex-col gap-5 lg:gap-8">
       <ContactInfoCard
        translations={{
         contactInfo: t('contact.contactInfo'),
        }}
        language={language}
        isVisible={isVisible}
        contactInfo={contactInfoWithTranslations}
       />

       <SocialLinksCard
        translations={{
         socialMedia: t('contact.socialMedia'),
        }}
        language={language}
        isVisible={isVisible}
        socialLinks={socialLinks}
       />
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}