"use client";
import "./styles/globals.css";
import ScrollToTop from "./components/extra/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/extra/ScrollTopButton";
import BackgroundAnimation from "./components/extra/BackgroundAnimation";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function LayoutContent({ children }) {
 const { language, handleLanguageChange } = useLanguage();
 return (
  <div className="min-h-screen select-none transition-colors duration-300 ease-in-out bg-gray-900 relative">
   <BackgroundAnimation />
   <div className="relative z-10">
    <Header language={language} onLanguageChange={handleLanguageChange} />
    <main>{children}</main>
    <Footer language={language} onLanguageChange={handleLanguageChange} />
    <ScrollToTopButton
     title={language === "EN" ? "Back to Top" : "Başa Dön"}
    />
   </div>
  </div>
 );
}

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body>
    <ScrollToTop />
    <LanguageProvider>
     <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
   </body>
  </html>
 );
}