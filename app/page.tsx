"use client";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/extra/ScrollTopButton";
import BackgroundAnimation from "./components/extra/BackgroundAnimation";

export default function HomePage() {
  const [language, setLanguage] = useState("TR");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="min-h-screen select-none transition-colors duration-300 ease-in-out bg-gray-900 relative">
      {/* Background Animation Component */}
      <BackgroundAnimation />
      {/* Main Content */}
      <div className="relative z-10">
        <Header language={language} onLanguageChange={handleLanguageChange} />
        <main>
          <Home language={language} />
          <About language={language} />
          <Skills language={language} />
          <Experiences language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </main>
        <Footer language={language} onLanguageChange={handleLanguageChange} />
        <ScrollToTopButton
          title={language === "EN" ? "Back to Top" : "Başa Dön"}
        />
      </div>
    </div>
  );
}
