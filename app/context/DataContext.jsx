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
 const [error, setError] = useState(null);

 useEffect(() => {
  fetchAllData();
 }, [language]);

 const fetchAllData = async () => {
  setLoading(true);
  setError(null);

  try {
   try {
    const skillsRes = await fetch('/api/skills');
    if (skillsRes.ok) {
     const skillsData = await skillsRes.json();
     setSkills(skillsData);
    }
   } catch (err) {
    console.error('Skills fetch error:', err);
   }

   try {
    const experienceRes = await fetch(`/api/experience/${language}`);
    if (experienceRes.ok) {
     const experienceData = await experienceRes.json();
     setExperience(experienceData);
    }
   } catch (err) {
    console.error('Experience fetch error:', err);
   }

   try {
    const projectsRes = await fetch(`/api/projects/${language}`);
    if (projectsRes.ok) {
     const projectsData = await projectsRes.json();
     setProjects(projectsData);
    }
   } catch (err) {
    console.error('Projects fetch error:', err);
   }

   try {
    const contactRes = await fetch('/api/contact/info');
    if (contactRes.ok) {
     const contactInfo = await contactRes.json();
     setContactData(contactInfo);
    }
   } catch (err) {
    console.error('Contact fetch error:', err);
   }

  } catch (error) {
   setError(error.message);
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
   loading,
   error
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