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

  // Visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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

  // Common input styles
  const inputStyles =
    "w-full px-4 py-3 bg-info border border-[#ffffff97] rounded-lg placeholder-[#ffffff97] focus:outline-none focus:border-[#ffffff97] focus:ring-2 focus:ring-[#ffffff97]/20 transition-all duration-300 text-base";

  return (
    <section
      id="contact"
      className="min-h-screen pt-16 lg:pt-38 relative overflow-hidden text-primary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <FaEnvelope className="w-8 h-8 text-blue-300 mx-auto mb-2" />
        <Title title={t.title} subtitle={t.subtitle} isVisible={isVisible} />

        {/* Availability Message */}
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[16px] sm:text-lg px-2">{t.availability}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-secondary p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <FaPaperPlane className="w-5 h-5" />
                <span>{t.formTitle}</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="group">
                    <label className="block text-md font-medium mb-2">
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
                    <label className="block text-md font-medium mb-2">
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
                    <label className="block text-md font-medium mb-2">
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
                    <label className="block text-md font-medium mb-2">
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
                <div className="group">
                  <label className="block text-md font-medium mb-2">
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
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md py-3 font-semibold rounded-2xl transition-all duration-300 transform hover:scale-103 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-base shadow-lg hover:shadow-xl text-[15px] mx-auto lg:text-base bg-gradient-to-r from-[#082039] to-[#d4e2f9] hover:from-[#000] hover:to-[#000] hover:border-2"
                >
                  <FaPaperPlane className="w-4 h-4" />
                  <span>{isSubmitting ? t.sending : t.send}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Contact Info & Social */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Contact Information Card */}
            <div className="bg-secondary p-8 rounded-t-2xl shadow-2xl lg:mb-[40px]">
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                <FaPhone className="w-5 h-5" />
                <span>{t.contactInfo}</span>
              </h3>

              <div className="space-y-5">
                {contactInfoWithTranslations.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="mt-5 flex items-start space-x-4 p-3 rounded-lg hover:bg-[#01438882] transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm block">{info.label}</span>
                        <div className="font-medium text-base break-words">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-secondary p-8 rounded-b-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center space-x-2">
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
                      <div className="relative w-14 h-14 bg-primary rounded-full flex items-center justify-center border-2 border-[#01438882] group-hover:border-[#fff] transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 text-primary group-hover:text-[#d4e6f9] transition-colors duration-300" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
