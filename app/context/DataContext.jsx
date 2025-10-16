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
   console.log('📡 Fetching data for language:', language);

   // Skills
   try {
    const skillsRes = await fetch('/api/skills');
    if (skillsRes.ok) {
     const skillsData = await skillsRes.json();
     console.log('✅ Skills loaded:', Object.keys(skillsData).length, 'categories');
     setSkills(skillsData);
    } else {
     console.error('❌ Skills response not ok:', skillsRes.status);
    }
   } catch (err) {
    console.error('❌ Skills fetch error:', err);
   }

   // Experience
   try {
    const experienceRes = await fetch(`/api/experience/${language}`);
    if (experienceRes.ok) {
     const experienceData = await experienceRes.json();
     console.log('✅ Experience loaded:', Object.keys(experienceData).length, 'categories');
     setExperience(experienceData);
    } else {
     console.error('❌ Experience response not ok:', experienceRes.status);
    }
   } catch (err) {
    console.error('❌ Experience fetch error:', err);
   }

   // Projects
   try {
    const projectsRes = await fetch(`/api/projects/${language}`);
    if (projectsRes.ok) {
     const projectsData = await projectsRes.json();
     console.log('✅ Projects loaded:', projectsData.length, 'projects');
     setProjects(projectsData);
    } else {
     console.error('❌ Projects response not ok:', projectsRes.status);
    }
   } catch (err) {
    console.error('❌ Projects fetch error:', err);
   }

   // Contact
   try {
    const contactRes = await fetch('/api/contact/info');
    if (contactRes.ok) {
     const contactInfo = await contactRes.json();
     console.log('✅ Contact loaded');
     setContactData(contactInfo);
    } else {
     console.error('❌ Contact response not ok:', contactRes.status);
    }
   } catch (err) {
    console.error('❌ Contact fetch error:', err);
   }

  } catch (error) {
   console.error('❌ General fetch error:', error);
   setError(error.message);
  } finally {
   setLoading(false);
   console.log('✅ Data fetching completed');
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