"use client";
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
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
    const skillsRes = await fetch('/api/skills');
    if (skillsRes.ok) {
     const skillsData = await skillsRes.json();
     dataCache.skills = skillsData;
     setSkills(skillsData);
    }
   } else {
    setSkills(dataCache.skills);
   }

   if (!dataCache.experience[language]) {
    const experienceRes = await fetch(`/api/experience/${language}`);
    if (experienceRes.ok) {
     const experienceData = await experienceRes.json();
     dataCache.experience[language] = experienceData;
     setExperience(experienceData);
    }
   } else {
    setExperience(dataCache.experience[language]);
   }

   if (!dataCache.projects[language]) {
    const projectsRes = await fetch(`/api/projects/${language}`);
    if (projectsRes.ok) {
     const projectsData = await projectsRes.json();
     dataCache.projects[language] = projectsData;
     setProjects(projectsData);
    }
   } else {
    setProjects(dataCache.projects[language]);
   }
  } catch (err) {
   setError(err.message);
  } finally {
   setLoading(false);
  }
 }, [language]);

 useEffect(() => {
  fetchAllData();
 }, [fetchAllData]);

 const contextValue = useMemo(() => ({
  skills,
  experience,
  projects,
  loading,
  error,
  refetch: fetchAllData,
 }), [skills, experience, projects, loading, error, fetchAllData]);

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