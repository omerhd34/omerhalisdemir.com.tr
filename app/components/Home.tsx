"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCode,
  FaDownload,
  FaEye,
  FaRocket,
  FaGraduationCap,
} from "react-icons/fa";
import ImageMe from "../../public/images/img.jpg";
import translations from "../data/Translations/HomeTranslations";
import "../styles/home.css";

interface HomeProps {
  language?: string;
}

const Home: React.FC<HomeProps> = ({ language = "TR" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const t = translations[language as keyof typeof translations];

  const texts = useMemo(() => {
    return t.professionTitles;
  }, [t.professionTitles]);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, currentIndex, isDeleting, texts]);

  const stats = [
    { number: "15+", label: t.stats.skills, icon: FaCode },
    { number: "2", label: t.stats.experience, icon: FaGraduationCap },
    { number: "3", label: t.stats.projects, icon: FaRocket },
  ];

  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-3 sm:pt-5 md:pt-10 lg:pt-10 2xl:pt-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full">
        <div className="max-w-7xl mx-auto lg:max-w-8xl xl:max-w-[1350px] ">
          <div className="bg-secondary rounded-2xl shadow-2xl p-6 py-3 lg:p-8 xl:p-10 hover:shadow-3xl ">
            {/* Main Content - Horizontal Layout */}
            <div
              className={`flex flex-col lg:flex-row items-center gap-3 lg:gap-10 xl:gap-16 transition-all duration-700  ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {/* Left Side */}
              <div className="flex-shrink-0">
                <div className="relative inline-block group">
                  {/* Rotating Border Effect */}
                  <div className="absolute -inset-2 rounded-full">
                    <div className="w-full h-full rounded-full rotating-border relative"></div>
                  </div>

                  {/* Simple gradient background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg animate-pulse"></div>

                  {/* Main Image */}
                  <Image
                    width={200}
                    height={200}
                    src={ImageMe}
                    alt="Ömer Halis DEMİR"
                    className="relative w-30 h-30 lg:w-42 lg:h-42 xl:w-60 xl:h-60 rounded-full object-cover 
                             border-4 border-white shadow-xl hover:shadow-2xl 
                             transition-all duration-300 hover:scale-105 z-10"
                  />
                </div>
              </div>

              {/* Center - Main Content */}
              <div className="flex-grow text-center lg:text-left">
                <h1 className="text-[24px] lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-primary mb-[1px] sm:mb-3">
                  Ömer Halis DEMİR
                </h1>
                {/* Typewriter Effect */}
                <div className="text-primary font-medium mb-4 text-[18px] lg:text-xl xl:text-2xl h-6 lg:h-8 flex items-center justify-center lg:justify-start">
                  <span className="inline-block">
                    {displayedText}
                    <span className="animate-pulse ml-1 text-primary">|</span>
                  </span>
                </div>
                {/* Description */}
                <p className="text-primary tracking-tight sm:tracking-normal lg:tracking-wide text-[16px] lg:text-[18px] mb-3 sm:mb-6 max-w-2xl mx-auto lg:mx-0 text-left">
                  {t.shortDescription}
                </p>
                {/* Action Buttons - Horizontal */}
                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start items-center">
                  {/* Download CV Button */}
                  <a
                    href={
                      language === "EN"
                        ? "/pdf/cv-english.pdf#zoom=35"
                        : "/pdf/cv.pdf#zoom=35"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-[#082039] to-[#d4e2f9] hover:from-[#000] hover:to-[#000] hover:border-2 text-primary rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-[15px] lg:text-base w-full sm:w-auto min-w-[200px]"
                  >
                    <FaDownload className="w-4 h-4 lg:w-5 lg:h-5 group-hover:animate-bounce" />
                    <span>{t.downloadCV}</span>
                  </a>

                  {/* View Projects Button */}
                  <Link
                    href="#projects"
                    className="group flex items-center justify-center space-x-2 lg:space-x-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-[#082039] to-[#d4e2f9] hover:from-[#000] hover:to-[#000] hover:border-2 text-primary rounded-2xl font-medium transition-all duration-300 hover:scale-105 text-[15px] lg:text-base w-full sm:w-auto min-w-[200px]"
                  >
                    <FaEye className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span>{t.viewProjects}</span>
                  </Link>
                </div>
              </div>

              {/* Right Side - Stats */}
              <div
                className={`flex-shrink-0 transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex flex-row lg:flex-col gap-8 lg:gap-6 my-4 sm:my-5">
                  {stats.map((stat) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={stat.label} className="text-center group">
                        {/* Icon Container */}
                        <div className="bg-primary w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl">
                          <IconComponent className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-primary" />
                        </div>

                        {/* Number */}
                        <div className="text-[15px] sm:text-[16px] lg:text-xl font-bold text-primary mb-1">
                          {stat.number}
                        </div>

                        {/* Label */}
                        <div className="text-[15px] sm:text-[16px] lg:text-sm xl:text-base text-primary font-medium px-1 leading-tight">
                          {stat.label}
                        </div>
                      </div>
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

export default Home;
