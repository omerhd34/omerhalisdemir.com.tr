"use client";
import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";

const DataContext = createContext();

const dataCache = {
 skills: null,
 experience: {},
 projects: {}
};

export function DataProvider({ children }) {
 const { language } = useLanguage();
 const [skills, setSkills] = useState(dataCache.skills);
 const [experience, setExperience] = useState(dataCache.experience[language] || null);
 const [projects, setProjects] = useState(dataCache.projects[language] || null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const fetchedRef = useRef({ experience: {}, projects: {} });

 useEffect(() => {
  fetchAllData();
 }, [language]);

 const fetchAllData = async () => {
  setLoading(true);
  setError(null);

  try {
   if (!dataCache.skills) {
    try {
     const skillsRes = await fetch('/api/skills');
     if (skillsRes.ok) {
      const skillsData = await skillsRes.json();
      dataCache.skills = skillsData;
      setSkills(skillsData);
     }
    } catch (err) {
     console.error('Skills fetch error:', err);
    }
   } else {
    setSkills(dataCache.skills);
   }

   if (!dataCache.experience[language]) {
    try {
     const experienceRes = await fetch(`/api/experience/${language}`);
     if (experienceRes.ok) {
      const experienceData = await experienceRes.json();
      dataCache.experience[language] = experienceData;
      setExperience(experienceData);
     }
    } catch (err) {
     console.error('Experience fetch error:', err);
    }
   } else {
    setExperience(dataCache.experience[language]);
   }

   if (!dataCache.projects[language]) {
    try {
     const projectsRes = await fetch(`/api/projects/${language}`);
     if (projectsRes.ok) {
      const projectsData = await projectsRes.json();
      dataCache.projects[language] = projectsData;
      setProjects(projectsData);
     }
    } catch (err) {
     console.error('Projects fetch error:', err);
    }
   } else {
    setProjects(dataCache.projects[language]);
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