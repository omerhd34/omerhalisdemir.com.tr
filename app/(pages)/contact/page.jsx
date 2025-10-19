"use client";
import { useState, useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { Toaster } from "react-hot-toast";
import { useLanguage } from "../../context/LanguageContext";
import ContactForm from "../../../components/PageComponents/Contact/ContactForm";
import ContactInfoCard from "../../../components/PageComponents/Contact/ContactInfoCard";
import SocialLinksCard from "../../../components/PageComponents/Contact/SocialLinksCard";
import Title from "../../../components/extra/Title";
import LoadingScreen from "../../../components/extra/LoadingScreen";

const iconMap = {
 FaMapMarkerAlt,
 FaPhone,
 FaEnvelope,
 FaLinkedin,
 FaGithub
};

// Contact info'yu frontend'de tanımlayalım
const getContactInfo = (t) => [
 {
  icon: FaMapMarkerAlt,
  label: t('contact.location'),
  value: (
   <div className="flex items-center space-x-2">
    <span>İstanbul, Türkiye</span>
    <ReactCountryFlag
     countryCode="TR"
     svg
     style={{ width: "16px", height: "12px" }}
     title="Turkey"
    />
   </div>
  ),
  display_order: 1
 },
 {
  icon: FaPhone,
  label: t('contact.phone'),
  value: "+90 507 849 29 03",
  display_order: 2
 },
 {
  icon: FaEnvelope,
  label: t('contact.emailLabel'),
  value: "omerhd16@outlook.com",
  display_order: 3
 }
];

// Social links'i frontend'de tanımlayalım
const getSocialLinks = () => [
 {
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/",
  icon: FaLinkedin
 },
 {
  name: "GitHub",
  url: "https://github.com/omerhd34",
  icon: FaGithub
 }
];

export default function ContactPage() {
 const { language, t, loading: langLoading } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 if (langLoading) {
  return <LoadingScreen language={language} />;
 }

 const contactInfo = getContactInfo(t);
 const socialLinks = getSocialLinks();

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
        contactInfo={contactInfo}
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