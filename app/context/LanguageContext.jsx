"use client";
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
 const [language, setLanguage] = useState("TR");

 const handleLanguageChange = (newLanguage) => {
  setLanguage(newLanguage);
 };

 return (
  <LanguageContext.Provider value={{ language, handleLanguageChange }}>
   {children}
  </LanguageContext.Provider>
 );
}

export function useLanguage() {
 const context = useContext(LanguageContext);
 if (!context) {
  throw new Error("useLanguage must be used within a LanguageProvider");
 }
 return context;
}