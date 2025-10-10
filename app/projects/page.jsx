"use client";
import { useState, useEffect, useMemo } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import translations from "../data/Translations/ProjectTranslations";
import {
 getProjectsData,
 getCategories,
 getProjectStats,
} from "../data/data/projectsData";
import CategoryButton from "../components/extra/CategoryButton";
import ProjectCard from "../components/Project/ProjectCard";
import ProjectStats from "../components/Project/ProjectStats";
import Title from "../components/extra/Title";

export default function ProjectsPage() {
 const { language } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);
 const [activeCategory, setActiveCategory] = useState("all");
 const [searchTerm] = useState("");
 const [filteredProjects, setFilteredProjects] = useState([]);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 const t = translations[language] || translations.TR;
 const projectsData = useMemo(() => getProjectsData(language), [language]);
 const categories = useMemo(() => getCategories(language), [language]);
 const stats = useMemo(() => getProjectStats(projectsData), [projectsData]);

 useEffect(() => {
  let filtered = projectsData;

  if (activeCategory !== "all") {
   filtered = filtered.filter(
    (project) => project.category === activeCategory
   );
  }

  if (searchTerm) {
   filtered = filtered.filter(
    (project) =>
     project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.description.toLowerCase().includes(searchTerm.toLowerCase())
   );
  }

  setFilteredProjects(filtered);
 }, [activeCategory, searchTerm, projectsData]);

 const handleCategoryChange = (category) => {
  setActiveCategory(category);
 };

 return (
  <section id="projects" className="relative mt-20 min-h-screen">
   <div className="block sm:hidden h-1" />
   <div className="min-h-screen relative overflow-hidden text-primary">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
     {/* Icon */}
     <FaProjectDiagram
      className={`w-8 h-8 text-blue-300 mx-auto mb-2 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     />

     {/* Title Component */}
     <Title
      title={t.title}
      subtitle={t.subtitle}
      description={t.description}
      isVisible={isVisible}
     />

     {/* Project Stats Component */}
     <ProjectStats stats={stats} language={language} isVisible={isVisible} />

     {/* Category Tabs */}
     <div
      className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 xs:mb-10 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      {Object.entries(categories).map(([key, data]) => {
       const count =
        key === "all"
         ? projectsData.length
         : projectsData.filter((p) => p.category === key).length;

       return (
        <CategoryButton
         key={key}
         categoryKey={key}
         title={data.title}
         count={count}
         countLabel={language === "TR" ? "proje" : "projects"}
         icon={data.icon}
         color={data.color}
         isActive={activeCategory === key}
         onClick={handleCategoryChange}
        />
       );
      })}
     </div>

     {/* Projects Grid */}
     <div
      className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
       }`}
     >
      {filteredProjects.length === 0 ? (
       <div className="text-center py-12 xs:py-14 sm:py-16">
        <div className="text-4xl xs:text-5xl sm:text-6xl mb-3 xs:mb-4"></div>
        <h3 className="text-lg xs:text-xl font-semibold mb-2">
         {language === "TR" ? "Proje bulunamadı" : "No projects found"}
        </h3>
        <p className="text-sm xs:text-base">
         {language === "TR"
          ? "Arama kriterlerinizi değiştirmeyi deneyin"
          : "Try changing your search criteria"}
        </p>
       </div>
      ) : (
       <div className="grid gap-6 xs:gap-7 sm:gap-8">
        {/* Project Cards using ProjectCard Component */}
        {filteredProjects.map((project, index) => (
         <ProjectCard
          key={project.id}
          project={project}
          translations={t}
          language={language}
          index={index}
         />
        ))}
       </div>
      )}
     </div>
    </div>
   </div>
  </section>
 );
}