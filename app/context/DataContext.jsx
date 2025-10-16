"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const DataContext = createContext();

export function DataProvider({ children }) {
 const { language } = useLanguage();
 const [skills, setSkills] = useState(null);
 const [experience, setExperience] = useState(null);
 const [projects, setProjects] = useState(null);
 const [contactData, setContactData] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetchAllData();
 }, [language]);

 const fetchAllData = async () => {
  setLoading(true);
  try {
   const [skillsRes, experienceRes, projectsRes, contactRes] = await Promise.all([
    fetch('/api/skills'),
    fetch(`/api/experience/${language}`),
    fetch(`/api/projects/${language}`),
    fetch('/api/contact/info')
   ]);

   const [skillsData, experienceData, projectsData, contactInfo] = await Promise.all([
    skillsRes.json(),
    experienceRes.json(),
    projectsRes.json(),
    contactRes.json()
   ]);

   setSkills(skillsData);
   setExperience(experienceData);
   setProjects(projectsData);
   setContactData(contactInfo);
  } catch (error) {
   console.error('Veri yükleme hatası:', error);
  } finally {
   setLoading(false);
  }
 };

 return (
  <DataContext.Provider value={{
   skills,
   experience,
   projects,
   contactData,
   loading
  }}>
   {children}
  </DataContext.Provider>
 );
}

export function useData() {
 const context = useContext(DataContext);
 if (!context) {
  throw new Error("useData must be used within a DataProvider");
 }
 return context;
}