"use client";
import { useState, useEffect } from "react";
import {
  FaPaperPlane,
  FaUser,
  FaComment,
  FaEnvelope,
  FaPhone,
  FaTag,
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import Title from "./extra/Title";
import translations from "../data/Translations/ContactTranslations";
import { contactInfo, socialLinks } from "../data/data/ContactData";

interface ContactProps {
  language?: string;
}

const Contact: React.FC<ContactProps> = ({ language = "TR" }) => {
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

  // Visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Header yüksekliğini dinamik olarak hesapla
  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        const height = header.offsetHeight;
        setHeaderHeight(height);
      }
    };

    // Sayfa yüklendiğinde hesapla
    calculateHeaderHeight();

    // Resize olayında tekrar hesapla
    window.addEventListener("resize", calculateHeaderHeight);

    // Orientation change için (mobil cihazlar)
    window.addEventListener("orientationchange", () => {
      setTimeout(calculateHeaderHeight, 100);
    });

    return () => {
      window.removeEventListener("resize", calculateHeaderHeight);
      window.removeEventListener("orientationchange", calculateHeaderHeight);
    };
  }, []);

  // Get current translations
  const t =
    translations[language as keyof typeof translations] || translations.TR;

  // Prepare contact information with translations
  const contactInfoWithTranslations = contactInfo.map((info) => ({
    ...info,
    label: t[info.label as keyof typeof t],
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      // Reset form
      setFormData(initialFormData);
    }, 2000);
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
      {/* Mobil için ek spacing */}
      <div className="block sm:hidden" style={{ height: "1px" }} />

      <div className="min-h-screen relative overflow-hidden text-primary ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 ">
          {/* Section Header */}
          <FaEnvelope
            className={`w-8 h-8 text-blue-300 mx-auto mb-2 transition-all duration-1000 delay-100  ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          />
          <Title
            title={t.title}
            subtitle={t.subtitle}
            description={t.availability}
            isVisible={isVisible}
          />
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-16">
            {/* Left Column - Contact Form */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
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
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
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

                    {/* Email Input */}
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
                    {/* Phone Input */}
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

                    {/* Subject Input */}
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

                  {/* Message Textarea */}
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

                  {/* Submit Button */}
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
              className={`space-y-4 sm:space-y-8 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* Contact Information Card */}
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
                          <div className="font-medium text-[16px] break-words">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media Card */}
              <div className="bg-secondary p-3 sm:p-8 rounded-b-4xl shadow-b-4xl">
                <h3 className="text-xl font-bold mb-3 sm:mb-6 flex items-center justify-center space-x-2">
                  <span>{t.socialMedia}</span>
                </h3>
                <div className="flex justify-center space-x-10">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative transition-all duration-300 ${social.color}`}
                        style={{
                          animationDelay: `${index * 100}ms`,
                          animation: `bounceIn 0.8s ease-out ${
                            index * 100
                          }ms both`,
                        }}
                      >
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-primary rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                        {/* Icon container */}
                        <div className="relative h-10 w-10 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center border-2 border-[#01438882] group-hover:border-[#fff] transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-[#d4e6f9] transition-colors duration-300" />
                        </div>
                      </a>
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
};

export default Contact;
