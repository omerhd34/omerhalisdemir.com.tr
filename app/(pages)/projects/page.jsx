"use client";
import { useState, useEffect, useMemo } from "react";
import { FaProjectDiagram, FaLayerGroup, FaGlobe, FaBolt } from "react-icons/fa";
import { useLanguage } from "../../context/LanguageContext";
import { useData } from "../../context/DataContext";
import CategoryButton from "../../../components/extra/CategoryButton";
import ProjectCard from "../../../components/PageComponents/Project/ProjectCard";
import ProjectStats from "../../../components/PageComponents/Project/ProjectStats";
import Title from "../../../components/extra/Title";
import LoadingScreen from "../../../components/extra/LoadingScreen";

export default function ProjectsPage() {
 const { language, t, loading: langLoading } = useLanguage();
 const { projects, loading: dataLoading } = useData();
 const [isVisible, setIsVisible] = useState(false);
 const [activeCategory, setActiveCategory] = useState("web");
 const [searchTerm] = useState("");
 const [filteredProjects, setFilteredProjects] = useState([]);

 useEffect(() => {
  const timer = setTimeout(() => setIsVisible(true), 100);
  return () => clearTimeout(timer);
 }, []);

 const categories = useMemo(() => {
  const categoryIcons = {
   web: FaGlobe,
   electronics: FaBolt
  };

  const categoryColors = {
   web: "bg-green-700",
   electronics: "bg-green-700"
  };

  return {
   web: {
    icon: categoryIcons.web,
    color: categoryColors.web,
    title: language === "TR" ? "Web Geliştirme" : "Web Development",
   },
   electronics: {
    icon: categoryIcons.electronics,
    color: categoryColors.electronics,
    title: language === "TR" ? "Elektrik & Elektronik" : "Elektric & Electronics",
   },
  };
 }, [language]);

 const stats = useMemo(() => {
  if (!projects) return { total: 0, completed: 0, current: 0 };

  const total = projects.length;
  const completed = projects.filter((p) => p.status === "completed").length;
  const current = projects.filter((p) => p.status === "current").length;
  return { total, completed, current };
 }, [projects]);

 useEffect(() => {
  if (!projects) return;

  let filtered = projects;

  if (activeCategory) {
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
 }, [activeCategory, searchTerm, projects]);

 const handleCategoryChange = (category) => {
  setActiveCategory(category);
 };

 if (langLoading || dataLoading || !projects) {
  return <LoadingScreen language={language} />;
 }

 const translations = {
  status: {
   completed: t('projects.status.completed'),
   current: t('projects.status.current'),
   planned: t('projects.status.planned'),
  },
 };

 return (
  <section id="projects" className="relative mt-5 sm:mt-10 md:mt-20 min-h-screen">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
    <FaProjectDiagram
     className={`w-8 h-8 text-green-200 mx-auto mb-2 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    />

    <Title
     title={language === "EN" ? "Projects" : "Projeler"}
     subtitle={language === "EN" ? "Portfolio" : "Çalışmalarım"}
     description={language === "EN" ? "My projects in web, mobile, and electronics fields" : "Web, mobil ve elektronik alanlarındaki çalışmalarım"}
     isVisible={isVisible}
    />

    <ProjectStats stats={stats} language={language} isVisible={isVisible} />

    <div
     className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
     {Object.entries(categories).map(([key, data]) => {
      const count = projects.filter((p) => p.category === key).length;

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

    <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
     {filteredProjects.length === 0 ? (
      <div className="text-center py-12">
       <h3 className="text-lg font-semibold mb-2">
        {language === "TR" ? "Proje bulunamadı" : "No projects found"}
       </h3>
       <p className="text-sm">
        {language === "TR"
         ? "Arama kriterlerinizi değiştirmeyi deneyin"
         : "Try changing your search criteria"}
       </p>
      </div>
     ) : (
      <div className="grid gap-6">
       {filteredProjects.map((project, index) => (
        <ProjectCard
         key={project.id}
         project={project}
         translations={translations}
         language={language}
         index={index}
        />
       ))}
      </div>
     )}
    </div>
   </div>
  </section>
 );
}