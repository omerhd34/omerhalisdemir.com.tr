"use client";
import { useState, useEffect } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaRocket,
  FaLightbulb,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaUser,
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import Title from "./extra/Title";
import translations from "../data/Translations/AboutTranslations";
import "../styles/about.css";

interface AboutProps {
  language?: string;
}

const About: React.FC<AboutProps> = ({ language = "TR" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const t = translations[language as keyof typeof translations];

  const personalInfo = [
    {
      label: t.birthDate,
      value: `29.03.1998`,
      icon: FaBirthdayCake,
    },
    {
      label: t.location,
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
      label: t.education,
      value: t.university,
      icon: FaGraduationCap,
    },
    {
      label: t.passion,
      value: t.passionText,
      icon: FaCode,
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen pt-16 lg:pt-38 relative overflow-hidden text-primary "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <FaUser
          className={`w-8 h-8 text-blue-300 mx-auto mb-2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />
        <Title title={t.title} subtitle={t.subtitle} isVisible={isVisible} />
        <div className="max-w-none mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className={`bg-secondary p-8 rounded-4xl shadow-4xl transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center mb-6">
                <FaRocket className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-2xl font-bold">{t.journey}</h3>
              </div>
              <p className="text-[18px] text-left leading-relaxed">
                {t.journeyDescription}
              </p>
            </div>

            <div
              className={`bg-secondary p-8 rounded-4xl shadow-4xl transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-center mb-6">
                <FaLightbulb className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-2xl font-bold">{t.interests}</h3>
              </div>
              <p className="text-[18px] text-left leading-relaxed">
                {t.interestsDescription}
              </p>
            </div>
          </div>

          <div
            className={`bg-secondary p-8 rounded-4xl shadow-4xl transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-8">
              <FaUser className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">{t.personalInfo}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
              {personalInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={info.label}
                    className={`text-center p-4 sm:p-6 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg h-[180px] flex flex-col ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 100}ms`,
                    }}
                  >
                    <div className="flex-1 flex flex-col items-center justify-between py-2">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                      <div className="font-semibold text-xs sm:text-[16px] tracking-wide">
                        {info.label}
                      </div>
                      <div className="font-medium text-sm sm:text-base break-words text-center">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
