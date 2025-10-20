"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
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

 const fetchAllData = useCallback(async () => {
  setLoading(true);
  setError(null);

  try {
   if (!dataCache.skills) {
    try {
     const skillsRes = await fetch('/api/skills', {
      headers: {
       'Content-Type': 'application/json',
      },
     });

     if (!skillsRes.ok) {
      throw new Error(`Skills API error: ${skillsRes.status}`);
     }

     const skillsData = await skillsRes.json();
     dataCache.skills = skillsData;
     setSkills(skillsData);
    } catch (err) {
     console.error('Skills fetch error:', err);
     setError(prev => ({ ...prev, skills: err.message }));
    }
   } else {
    setSkills(dataCache.skills);
   }

   if (!dataCache.experience[language]) {
    try {
     const experienceRes = await fetch(`/api/experience/${language}`, {
      headers: {
       'Content-Type': 'application/json',
      },
     });

     if (!experienceRes.ok) {
      throw new Error(`Experience API error: ${experienceRes.status}`);
     }

     const experienceData = await experienceRes.json();
     dataCache.experience[language] = experienceData;
     setExperience(experienceData);
    } catch (err) {
     console.error('Experience fetch error:', err);
     setError(prev => ({ ...prev, experience: err.message }));
    }
   } else {
    setExperience(dataCache.experience[language]);
   }

   if (!dataCache.projects[language]) {
    try {
     const projectsRes = await fetch(`/api/projects/${language}`, {
      headers: {
       'Content-Type': 'application/json',
      },
     });

     if (!projectsRes.ok) {
      throw new Error(`Projects API error: ${projectsRes.status}`);
     }

     const projectsData = await projectsRes.json();
     dataCache.projects[language] = projectsData;
     setProjects(projectsData);
    } catch (err) {
     console.error('Projects fetch error:', err);
     setError(prev => ({ ...prev, projects: err.message }));
    }
   } else {
    setProjects(dataCache.projects[language]);
   }

  } catch (error) {
   console.error('Unexpected error in fetchAllData:', error);
   setError(prev => ({ ...prev, general: error.message }));
  } finally {
   setLoading(false);
  }
 }, [language]);

 useEffect(() => {
  fetchAllData();
 }, [fetchAllData]);

 const contextValue = {
  skills,
  experience,
  projects,
  loading,
  error,
  refetch: fetchAllData,
 };

 return (
  <DataContext.Provider value={contextValue}>
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