"use client";
import { useState } from "react";
import { FaPaperPlane, FaUser, FaComment, FaEnvelope, FaPhone, FaTag } from "react-icons/fa";
import toast from "react-hot-toast";

export default function ContactForm({ translations, language, isVisible }) {
 const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
 };

 const [formData, setFormData] = useState(initialFormData);
 const [isSubmitting, setIsSubmitting] = useState(false);

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
     }
    );
    setFormData(initialFormData);
   } else {
    toast.error(
     language === "TR"
      ? `Hata: ${data.error || "Mesaj gönderilemedi. Lütfen tekrar deneyin."}`
      : `Error: ${data.error || "Message could not be sent. Please try again."}`,
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
  "w-full px-4 py-3 bg-info border border-[#ffffff97] rounded-lg placeholder-[#ffffff97] focus:outline-none focus:border-[#ffffff97] focus:ring-2 focus:ring-[#ffffff97]/20 transition-all duration-300 text-[16px] sm:text-base hover:border-[#ffffff] hover:scale-[1.02] transform";

 return (
  <div
   className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
    }`}
  >
   <div className="bg-secondary p-3 sm:p-8 rounded-t-2xl shadow-t-2xl sm:rounded-4xl sm:shadow-4xl">
    <h3 className="text-[20px] sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center space-x-4 sm:space-x-2">
     <FaPaperPlane className="w-5 h-5" />
     <span>{translations.formTitle}</span>
    </h3>

    <form onSubmit={handleSubmit} className="space-y-6">
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="group">
       <label className="block text-[17px] sm:text-md font-medium mb-2">
        <FaUser className="inline w-4 h-4 mr-2 mb-1" />
        {translations.name}
       </label>
       <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={translations.namePlaceholder}
        required
        className={inputStyles}
       />
      </div>

      <div className="group">
       <label className="block text-[17px] sm:text-md font-medium mb-2">
        <FaEnvelope className="inline w-4 h-4 mr-2 mb-1" />
        {translations.email}
       </label>
       <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={translations.emailPlaceholder}
        required
        className={inputStyles}
       />
      </div>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="group">
       <label className="block text-[17px] sm:text-md font-medium mb-2">
        <FaPhone className="inline w-4 h-4 mr-2 mb-1" />
        {translations.phone}
       </label>
       <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder={translations.phonePlaceholder}
        className={inputStyles}
       />
      </div>

      <div className="group">
       <label className="block text-[17px] sm:text-md font-medium mb-2">
        <FaTag className="inline w-4 h-4 mr-2 mb-1" />
        {translations.subject}
       </label>
       <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder={translations.subjectPlaceholder}
        required
        className={inputStyles}
       />
      </div>
     </div>

     <div className="group mb-2">
      <label className="block text-[17px] sm:text-md font-medium mb-2">
       <FaComment className="inline w-4 h-4 mr-2 mb-1" />
       {translations.message}
      </label>
      <textarea
       name="message"
       value={formData.message}
       onChange={handleChange}
       placeholder={translations.messagePlaceholder}
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
      <span>{isSubmitting ? translations.sending : translations.send}</span>
     </button>
    </form>
   </div>
  </div>
 );
}