"use client";
import { useState, useEffect, useMemo } from "react";
import {
  FaRocket,
  FaEye,
  FaGithub,
  FaExternalLinkAlt,
  FaUsers,
  FaChevronDown,
  FaChevronRight,
  FaArrowRight,
  FaChartLine,
  FaBriefcase,
  FaBookOpen,
  FaProjectDiagram,
} from "react-icons/fa";
import Title from "./extra/Title";
import CategoryButton from "./extra/CategoryButton";
import translations from "../data/Translations/ProjectTranslations";
import {
  getProjectsData,
  getCategories,
  getProjectStats,
  ProjectItem,
} from "../data/data/projectsData";
import Image from "next/image";

interface ProjectProps {
  language?: string;
}

const Project: React.FC<ProjectProps> = ({ language = "TR" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [searchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState<ProjectItem[]>([]);

  // Visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Get current translations
  const t =
    translations[language as keyof typeof translations] || translations.TR;

  // Get data from external file
  const projectsData = useMemo(() => getProjectsData(language), [language]);
  const categories = useMemo(() => getCategories(language), [language]);
  const stats = useMemo(() => getProjectStats(projectsData), [projectsData]);

  // Filter projects based on category and search
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

  const toggleExpanded = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-info border-accent";
      case "current":
        return "bg-red-900 border-accent ";
      case "upcoming":
        return "bg-yellow-500/20 border-accent";
      default:
        return "bg-gray-500/20 border-accent";
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section
      id="projects"
      className="min-h-screen pt-16 lg:pt-38 relative overflow-hidden text-primary "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <FaProjectDiagram
          className={`w-8 h-8 text-blue-300 mx-auto mb-2 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        />
        <Title
          title={t.title}
          subtitle={t.subtitle}
          description={t.description}
          isVisible={isVisible}
        />
        {/* Quick Stats */}
        <div
          className={`text-center mb-8 xs:mb-10 sm:mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Quick Stats */}
          <div className="flex justify-center gap-4 xs:gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-xl xs:text-2xl font-bold text-red-400">
                {stats.total}
              </div>
              <div className="text-xs xs:text-sm">
                {language === "TR" ? "Toplam Proje" : "Total Projects"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl font-bold text-green-400">
                {stats.completed}
              </div>
              <div className="text-xs xs:text-sm">
                {language === "TR" ? "Tamamlanan" : "Completed"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl xs:text-2xl font-bold text-blue-400">
                {stats.current}
              </div>
              <div className="text-xs xs:text-sm">
                {language === "TR" ? "Devam Eden" : "In Progress"}
              </div>
            </div>
          </div>
        </div>
        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 xs:mb-10 sm:mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
              {filteredProjects.map((project, index) => {
                const isExpanded = expandedProject === project.id;

                return (
                  <div
                    key={project.id}
                    className="bg-secondary rounded-2xl shadow-2xl sm:rounded-4xl sm:shadow-4xl transition-all duration-300 overflow-hidden"
                    style={{
                      animation: `slideIn 0.6s ease-out ${index * 200}ms both`,
                    }}
                  >
                    {/* Main Content */}
                    <div className="py-3 px-4 xs:p-5 sm:p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 xl:space-x-8">
                        {/* Project Info */}
                        <div className="flex-1 mb-2 sm:mb-6 lg:mb-0">
                          {/* Header - Always visible */}
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 xs:gap-4 mb-3 xs:mb-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 break-words">
                                {project.title}
                              </h3>
                              <p className="mb-2 xs:mb-4 text-sm xs:text-base">
                                {project.description}
                              </p>
                            </div>

                            {/* Status - Show on large screens always */}
                            <div className="hidden sm:flex flex-col space-y-2 flex-shrink-0">
                              <div
                                className={`inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium border ${getStatusBg(
                                  project.status
                                )}`}
                              >
                                {
                                  t.status[
                                    project.status as keyof typeof t.status
                                  ]
                                }
                              </div>
                            </div>
                          </div>

                          {/* Technologies - Show on large screens always */}
                          <div className="hidden sm:flex flex-wrap gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6">
                            {project.technologies.map((TechIcon, techIndex) => {
                              // Renk sınıflarını önceden tanımla
                              const colorClasses = [
                                "text-cyan-400 hover:text-cyan-300",
                                "text-white hover:text-gray-200",
                                "text-blue-500 hover:text-blue-400",
                                "text-yellow-400 hover:text-yellow-300",
                                "text-teal-400 hover:text-teal-300",
                                "text-green-500 hover:text-green-400",
                                "text-teal-500 hover:text-teal-400",
                                "text-blue-600 hover:text-blue-500",
                                "text-purple-400 hover:text-purple-300",
                                "text-orange-400 hover:text-orange-300",
                                "text-yellow-500 hover:text-yellow-400",
                                "text-indigo-400 hover:text-indigo-300",
                                "text-blue-400 hover:text-blue-300",
                                "text-red-400 hover:text-red-300",
                                "text-pink-400 hover:text-pink-300",
                                "text-gray-400 hover:text-gray-300",
                              ];

                              const iconColorClass =
                                colorClasses[techIndex % colorClasses.length];

                              return (
                                <div
                                  key={techIndex}
                                  className="p-1.5 xs:p-2 bg-muted rounded-lg transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                                >
                                  <TechIcon
                                    className={`w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 transition-all duration-300 ${iconColorClass}`}
                                  />
                                </div>
                              );
                            })}
                          </div>

                          {/* Action Buttons - Show on large screens always */}
                          <div className="hidden sm:flex flex-wrap gap-2 xs:gap-3 sm:gap-4 mb-3 xs:mb-4">
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-[#005bbb] to-[#0d345e] text-primary rounded-lg hover:from-[#0079fa] hover:to-[#0079fa] transition-all duration-300 group text-xs xs:text-sm"
                              >
                                <FaEye className="w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 text-cyan-300" />
                                {language === "TR" ? "Canlı Demo" : "Live Demo"}
                                <FaExternalLinkAlt className="w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                              </a>
                            )}

                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-[#005bbb] to-[#0d345e] text-primary rounded-lg hover:from-[#0079fa] hover:to-[#0079fa] transition-all duration-300 group text-xs xs:text-sm"
                              >
                                <FaGithub className="w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 text-gray-300" />
                                {language === "TR"
                                  ? "Kaynak Kod"
                                  : "Source Code"}
                                <FaArrowRight className="w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                              </a>
                            )}
                          </div>

                          {/* Expand Button - Always visible */}
                          <button
                            onClick={() => toggleExpanded(project.id)}
                            className="flex items-center space-x-1.5 xs:space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                          >
                            {isExpanded ? (
                              <FaChevronDown className="w-3 xs:w-4 h-3 xs:h-4 group-hover:translate-y-1 transition-transform duration-200" />
                            ) : (
                              <FaChevronRight className="w-3 xs:w-4 h-3 xs:h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            )}
                            <span className="font-medium text-xs xs:text-sm">
                              {isExpanded
                                ? language === "TR"
                                  ? "Daha Az Göster"
                                  : "Show Less"
                                : language === "TR"
                                ? "Detayları Göster"
                                : "Show Details"}
                            </span>
                          </button>

                          {/* Mobile Content - Show only when expanded */}
                          {isExpanded && (
                            <div className="sm:hidden mt-4 space-y-4">
                              {/* Status for mobile */}
                              <div className="flex justify-start">
                                <div
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium border ${getStatusBg(
                                    project.status
                                  )}`}
                                >
                                  {
                                    t.status[
                                      project.status as keyof typeof t.status
                                    ]
                                  }
                                </div>
                              </div>

                              {/* Technologies for mobile */}
                              <div className="flex flex-wrap gap-2 xs:gap-3">
                                {project.technologies.map(
                                  (TechIcon, techIndex) => {
                                    // Renk sınıflarını önceden tanımla
                                    const colorClasses = [
                                      "text-cyan-400 hover:text-cyan-300",
                                      "text-white hover:text-gray-200",
                                      "text-blue-500 hover:text-blue-400",
                                      "text-yellow-400 hover:text-yellow-300",
                                      "text-teal-400 hover:text-teal-300",
                                      "text-green-500 hover:text-green-400",
                                      "text-teal-500 hover:text-teal-400",
                                      "text-blue-600 hover:text-blue-500",
                                      "text-purple-400 hover:text-purple-300",
                                      "text-orange-400 hover:text-orange-300",
                                      "text-yellow-500 hover:text-yellow-400",
                                      "text-indigo-400 hover:text-indigo-300",
                                      "text-blue-400 hover:text-blue-300",
                                      "text-red-400 hover:text-red-300",
                                      "text-pink-400 hover:text-pink-300",
                                      "text-gray-400 hover:text-gray-300",
                                    ];

                                    const iconColorClass =
                                      colorClasses[
                                        techIndex % colorClasses.length
                                      ];

                                    return (
                                      <div
                                        key={techIndex}
                                        className="p-1.5 xs:p-2 bg-muted rounded-lg transition-all duration-300 group hover:scale-110 hover:shadow-lg"
                                      >
                                        <TechIcon
                                          className={`w-3 xs:w-4 h-3 xs:h-4 transition-all duration-300 ${iconColorClass}`}
                                        />
                                      </div>
                                    );
                                  }
                                )}
                              </div>

                              {/* Action Buttons for mobile */}
                              <div className="flex flex-wrap gap-2 xs:gap-3">
                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-[#005bbb] to-[#0d345e] text-primary rounded-lg hover:from-[#0079fa] hover:to-[#0079fa] transition-all duration-300 group text-xs xs:text-sm"
                                  >
                                    <FaEye className="w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 text-cyan-300" />
                                    {language === "TR"
                                      ? "Canlı Demo"
                                      : "Live Demo"}
                                    <FaExternalLinkAlt className="w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                  </a>
                                )}

                                {project.githubUrl && (
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 bg-gradient-to-r from-[#005bbb] to-[#0d345e] text-primary rounded-lg hover:from-[#0079fa] hover:to-[#0079fa] transition-all duration-300 group text-xs xs:text-sm"
                                  >
                                    <FaGithub className="w-3 xs:w-4 h-3 xs:h-4 mr-1.5 xs:mr-2 text-gray-300" />
                                    {language === "TR"
                                      ? "Kaynak Kod"
                                      : "Source Code"}
                                    <FaArrowRight className="w-2.5 xs:w-3 h-2.5 xs:h-3 ml-1.5 xs:ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                  </a>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-4 xs:px-5 sm:px-6 lg:px-8 pb-4 xs:pb-5 sm:pb-6 lg:pb-8 border-t border-info">
                        <div className="pt-4 xs:pt-5 sm:pt-6 grid md:grid-cols-2 gap-6 xs:gap-7 sm:gap-8">
                          {/* Detailed Description */}
                          {project.longDescription && (
                            <div>
                              <h4 className="font-semibold mb-2 xs:mb-3 flex items-center text-sm xs:text-base">
                                <FaBookOpen className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-blue-400" />
                                {language === "TR"
                                  ? "Proje Detayları"
                                  : "Project Details"}
                              </h4>
                              <p className="text-sm xs:text-base leading-relaxed">
                                {project.longDescription}
                              </p>
                            </div>
                          )}

                          {/* All Features */}
                          <div>
                            <h4 className="font-semibold mb-2 xs:mb-3 flex items-center text-sm xs:text-base">
                              <FaRocket className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-orange-400" />
                              {language === "TR"
                                ? "Tüm Özellikler"
                                : "All Features"}
                            </h4>
                            <ul className="space-y-1.5 xs:space-y-2">
                              {project.features.map((feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className="flex items-start space-x-2 xs:space-x-3"
                                >
                                  <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-blue-800 mt-1.5 xs:mt-2 flex-shrink-0"></div>
                                  <span className="text-sm xs:text-base">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Team & Role */}
                          {(project.team || project.role) && (
                            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 pt-3 xs:pt-4 border-t border-info">
                              {project.team && (
                                <div>
                                  <h4 className="font-semibold mb-2 flex items-center text-sm xs:text-base">
                                    <FaUsers className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-purple-400" />
                                    {language === "TR" ? "Takım" : "Team"}
                                  </h4>
                                  <span className="text-sm xs:text-base">
                                    {project.team}
                                  </span>
                                </div>
                              )}

                              {project.role && (
                                <div>
                                  <h4 className="font-semibold mb-2 flex items-center text-sm xs:text-base">
                                    <FaBriefcase className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-indigo-400" />
                                    {language === "TR" ? "Rolüm" : "My Role"}
                                  </h4>
                                  <span className="text-sm xs:text-base">
                                    {project.role}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}

                          {/* Metrics */}
                          {project.metrics && project.metrics.length > 0 && (
                            <div className="md:col-span-2 pt-3 xs:pt-4 border-t border-info">
                              <h4 className="font-semibold mb-3 xs:mb-4 flex items-center text-sm xs:text-base">
                                <FaChartLine className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-green-400" />
                                {language === "TR"
                                  ? "Proje Metrikleri"
                                  : "Project Metrics"}
                              </h4>
                              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4">
                                {project.metrics.map((metric, metricIndex) => (
                                  <div
                                    key={metricIndex}
                                    className="bg-info rounded-lg p-3 xs:p-4 text-center hover:bg-opacity-80 transition-all duration-300"
                                  >
                                    <div className="text-lg xs:text-xl sm:text-2xl font-bold mb-1 text-cyan-400">
                                      {metric.value}
                                    </div>
                                    <div className="text-xs xs:text-sm text-gray-300">
                                      {metric.label}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Ultra High-Quality Arduino Uno Image */}
                              {project.id === "custom-arduino-uno" && (
                                <div className="text-center pt-10 border-t border-info my-8">
                                  <div className="relative inline-block group max-w-6xl mx-auto">
                                    {/* Background glow effect */}
                                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-300 via-purple-200 to-cyan-300 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700"></div>

                                    {/* Main image container */}
                                    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl">
                                      <Image
                                        src="/images/1.png"
                                        alt={
                                          language === "TR"
                                            ? "Arduino Uno Özel Tasarım PCB Kartı - Türkiye Haritası Şeklinde"
                                            : "Custom Arduino Uno PCB Board Design - Turkey Map Shaped"
                                        }
                                        width={1600}
                                        height={800}
                                        quality={100}
                                        priority={true}
                                        className="w-full h-auto rounded-xl transition-all duration-700 ease-out transform group-hover:scale-[1.02] drop-shadow-2xl"
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
