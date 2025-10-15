"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
 const [language, setLanguage] = useState("TR");
 const [translations, setTranslations] = useState({});
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetchTranslations(language);
 }, [language]);

 const fetchTranslations = async (lang) => {
  setLoading(true);
  try {
   const response = await fetch(`/api/translations/${lang}`);
   if (response.ok) {
    const data = await response.json();
    setTranslations(data);
   }
  } catch (error) {
   console.error('Error fetching translations:', error);
  } finally {
   setLoading(false);
  }
 };

 const handleLanguageChange = (newLanguage) => {
  setLanguage(newLanguage);
 };

 const t = (key) => {
  const keys = key.split('.');
  let value = translations;

  for (const k of keys) {
   value = value?.[k];
   if (value === undefined) return key;
  }

  return value || key;
 };

 return (
  <LanguageContext.Provider value={{
   language,
   handleLanguageChange,
   translations,
   t,
   loading
  }}>
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