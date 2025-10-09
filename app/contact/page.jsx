"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
 FaPaperPlane,
 FaUser,
 FaComment,
 FaEnvelope,
 FaPhone,
 FaTag,
 FaWhatsapp,
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import toast, { Toaster } from "react-hot-toast";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/Translations/ContactTranslations";
import { contactInfo, socialLinks } from "../data/data/ContactData";

export default function ContactPage() {
 const { language } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);
 const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
 };
 const [formData, setFormData] = useState(initialFormData);
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [headerHeight, setHeaderHeight] = useState(0);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 useEffect(() => {
  const calculateHeaderHeight = () => {
   const header = document.querySelector("header");
   if (header) {
    const height = header.offsetHeight;
    setHeaderHeight(height);
   }
  };

  calculateHeaderHeight();
  window.addEventListener("resize", calculateHeaderHeight);
  window.addEventListener("orientationchange", () => {
   setTimeout(calculateHeaderHeight, 100);
  });

  return () => {
   window.removeEventListener("resize", calculateHeaderHeight);
   window.removeEventListener("orientationchange", calculateHeaderHeight);
  };
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

 const handleChange = (e) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
   const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
   });

   const data = await response.json();

   if (response.ok) {
    toast.success(
     language === "TR"
      ? "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım."
      : "Your message has been sent successfully! I will get back to you soon.",
     {
      duration: 5000,
      position: "top-center",
      style: {
       background: "#10B981",
       color: "#fff",
       padding: "16px",
       borderRadius: "10px",
       fontSize: "15px",
      },
      iconTheme: {
       primary: "#fff",
       secondary: "#10B981",
      },
     }
    );

    setFormData(initialFormData);
   } else {
    toast.error(
     language === "TR"
      ? `Hata: ${data.error || "Mesaj gönderilemedi. Lütfen tekrar deneyin."
      }`
      : `Error: ${data.error || "Message could not be sent. Please try again."
      }`,
     {
      duration: 5000,
      position: "top-center",
      style: {
       background: "#EF4444",
       color: "#fff",
       padding: "16px",
       borderRadius: "10px",
       fontSize: "15px",
      },
     }
    );
   }
  } catch {
   toast.error(
    language === "TR"
     ? "Bir hata oluştu. Lütfen daha sonra tekrar deneyin."
     : "An error occurred. Please try again later.",
    {
     duration: 5000,
     position: "top-center",
     style: {
      background: "#EF4444",
      color: "#fff",
      padding: "16px",
      borderRadius: "10px",
      fontSize: "15px",
     },
    }
   );
  } finally {
   setIsSubmitting(false);
  }
 };

 const inputStyles =
  "w-full px-4 py-3 bg-info border border-[#ffffff97] rounded-lg placeholder-[#ffffff97] focus:outline-none focus:border-[#ffffff97] focus:ring-2 focus:ring-[#ffffff97]/20 transition-all duration-300 text-[16px] sm:text-base hover:border-[#ffffff] hover:scale-[1.02] transform ";

 return (
  <section
   id="contact"
   className="relative"
   style={{
    paddingTop: `${Math.max(headerHeight + 40, 120)}px`,
    minHeight: "100vh",
   }}
  >
   <Toaster />
   <div className="block sm:hidden" style={{ height: "1px" }} />

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
      {/* Left Column - Contact Form */}
      <div
       className={`transition-all duration-1000 delay-300 ${isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-10"
        }`}
      >
       <div className="bg-secondary p-3 sm:p-8 rounded-t-2xl shadow-t-2xl sm:rounded-4xl sm:shadow-4xl">
        <h3 className="text-[20px] sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center space-x-4 sm:space-x-2">
         <FaPaperPlane className="w-5 h-5" />
         <span>{t.formTitle}</span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group">
           <label className="block text-[17px] sm:text-md font-medium mb-2">
            <FaUser className="inline w-4 h-4 mr-2 mb-1" />
            {t.name}
           </label>
           <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.namePlaceholder}
            required
            className={inputStyles}
           />
          </div>

          <div className="group">
           <label className="block text-[17px] sm:text-md font-medium mb-2">
            <FaEnvelope className="inline w-4 h-4 mr-2 mb-1" />
            {t.email}
           </label>
           <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.emailPlaceholder}
            required
            className={inputStyles}
           />
          </div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="group">
           <label className="block text-[17px] sm:text-md font-medium mb-2">
            <FaPhone className="inline w-4 h-4 mr-2 mb-1" />
            {t.phone}
           </label>
           <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t.phonePlaceholder}
            className={inputStyles}
           />
          </div>

          <div className="group">
           <label className="block text-[17px] sm:text-md font-medium mb-2">
            <FaTag className="inline w-4 h-4 mr-2 mb-1" />
            {t.subject}
           </label>
           <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t.subjectPlaceholder}
            required
            className={inputStyles}
           />
          </div>
         </div>

         <div className="group mb-2">
          <label className="block text-[17px] sm:text-md font-medium mb-2">
           <FaComment className="inline w-4 h-4 mr-2 mb-1" />
           {t.message}
          </label>
          <textarea
           name="message"
           value={formData.message}
           onChange={handleChange}
           placeholder={t.messagePlaceholder}
           rows={5}
           className={`${inputStyles} resize-none`}
          />
         </div>

         <button
          type="submit"
          disabled={isSubmitting}
          className="w-25 sm:w-full max-w-xs sm:max-w-sm md:max-w-md py-2 sm:py-3 font-semibold rounded-2xl transition-all duration-300 transform hover:scale-101 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-base shadow-lg hover:shadow-xl text-[15px] mx-auto lg:text-base bg-gradient-to-r from-[#082039] to-[#d4e2f9] hover:from-[#000] hover:to-[#000] border-0 hover:ring-2 hover:ring-white hover:ring-opacity-50 mb-2"
         >
          <FaPaperPlane className="w-4 h-4" />
          <span>{isSubmitting ? t.sending : t.send}</span>
         </button>
        </form>
       </div>
      </div>

      {/* Right Column - Contact Info & Social */}
      <div
       className={`space-y-4 sm:space-y-8 transition-all duration-1000 delay-500 ${isVisible
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-10"
        }`}
      >
       <div className="bg-secondary p-3 sm:p-8 sm:rounded-t-2xl sm:shadow-2xl lg:mb-[40px]">
        <h3 className="text-[20px] sm:text-2xl font-bold mb-6 flex items-center space-x-2">
         <FaPhone className="w-5 h-5 mr-4" />
         <span>{t.contactInfo}</span>
        </h3>

        <div className="space-y-5">
         {contactInfoWithTranslations.map((info) => {
          const IconComponent = info.icon;
          return (
           <div
            key={info.label}
            className="mt-5 flex items-start space-x-4 p-1 sm:p-3 rounded-lg hover:bg-[#01438882] transition-colors duration-300"
           >
            <div className="w-9 h-9 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
             <IconComponent className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
             <span className="text-[15px] block">
              {info.label}
             </span>
             <div className="font-medium text-[16px] break-words flex items-center gap-2">
              {info.value}
              {info.label ===
               (language === "TR" ? "Telefon:" : "Phone:") && (
                <Link
                 href="https://wa.me/905078492903"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-green-500 hover:bg-green-600 rounded-full transition-all duration-300 hover:scale-110"
                 title="WhatsApp"
                >
                 <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </Link>
               )}
             </div>
            </div>
           </div>
          );
         })}
        </div>
       </div>

       <div className="bg-secondary p-3 sm:p-8 rounded-b-4xl shadow-b-4xl">
        <h3 className="text-xl font-bold mb-3 sm:mb-6 flex items-center justify-center space-x-2">
         <span>{t.socialMedia}</span>
        </h3>
        <div className="flex justify-center space-x-10">
         {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
           <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative transition-all duration-300 ${social.color}`}
            style={{
             animationDelay: `${index * 100}ms`,
             animation: `bounceIn 0.8s ease-out ${index * 100
              }ms both`,
            }}
           >
            <div className="absolute inset-0 bg-primary rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <div className="relative h-10 w-10 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center border-2 border-[#01438882] group-hover:border-[#fff] transition-all duration-300 group-hover:scale-110">
             <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-[#d4e6f9] transition-colors duration-300" />
            </div>
           </Link>
          );
         })}
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}