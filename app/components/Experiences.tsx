"use client";
import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaChevronDown,
  FaChevronRight,
  FaBriefcase,
} from "react-icons/fa";
import Title from "./extra/Title";
import CategoryButton from "./extra/CategoryButton";
import "../styles/experience.css";
import translations from "../data/Translations/ExperienceTranslations";
import { getExperienceData, ExperienceItem } from "../data/data/ExperienceData";
import Image from "next/image";

interface ExperienceProps {
  language?: string;
}

const Experience: React.FC<ExperienceProps> = ({ language = "TR" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("education");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Visibility animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Header yüksekliğini dinamik olarak hesapla
  useEffect(() => {
    const calculateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        const height = header.offsetHeight;
        setHeaderHeight(height);
      }
    };

    // Sayfa yüklendiğinde hesapla
    calculateHeaderHeight();

    // Resize olayında tekrar hesapla
    window.addEventListener("resize", calculateHeaderHeight);

    // Orientation change için (mobil cihazlar)
    window.addEventListener("orientationchange", () => {
      setTimeout(calculateHeaderHeight, 100);
    });

    return () => {
      window.removeEventListener("resize", calculateHeaderHeight);
      window.removeEventListener("orientationchange", calculateHeaderHeight);
    };
  }, []);

  // Get current translations
  const t =
    translations[language as keyof typeof translations] || translations.TR;

  // Get experience data based on language
  const experienceData = getExperienceData(language);

  // Get stats for active category
  const getCategoryStats = (category: string) => {
    const items = experienceData[category as keyof typeof experienceData].items;
    const completed = items.filter(
      (item) => item.status === "completed"
    ).length;
    const current = items.filter((item) => item.status === "current").length;
    return { total: items.length, completed, current };
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const toggleMobileExpanded = (itemId: string) => {
    setExpandedMobileItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-black border-accent";
      case "current":
        return "bg-red-900 border-accent ";
      case "upcoming":
        return "bg-yellow-500/20 border-accent";
      default:
        return "bg-gray-500/20 border-accent";
    }
  };

  // Check if item has achievements
  const hasAchievements = (item: ExperienceItem) => {
    return item.achievements && item.achievements.length > 0;
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setExpandedMobileItems([]);
  };

  return (
    <section
      id="exp"
      className="relative"
      style={{
        paddingTop: `${Math.max(headerHeight + 40, 120)}px`,
        minHeight: "100vh",
      }}
    >
      {/* Mobil için ek spacing */}
      <div className="block sm:hidden" style={{ height: "1px" }} />

      <div className="min-h-screen relative overflow-hidden text-primary ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 ">
          {/* Section Header */}
          <FaBriefcase
            className={`w-8 h-8 text-blue-300 mx-auto mb-2 transition-all duration-1000 delay-100  ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          />
          <Title
            title={t.title}
            subtitle={t.subtitle}
            description={t.description}
            isVisible={isVisible}
          />
          {/* Category Tabs */}
          <div
            className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 sm:mb-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {Object.entries(experienceData).map(([key, data]) => {
              const stats = getCategoryStats(key);
              return (
                <CategoryButton
                  key={key}
                  categoryKey={key}
                  title={t.categories[key as keyof typeof t.categories].title}
                  count={stats.total}
                  countLabel="items"
                  icon={data.icon}
                  color={data.color}
                  isActive={activeCategory === key}
                  onClick={handleCategoryChange}
                />
              );
            })}
          </div>
          {/* Experience Timeline */}
          <div
            className={`bg-secondary p-8 rounded-2xl shadow-2xl sm:rounded-4xl sm:shadow-4xl transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Category Description */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                {
                  t.categories[activeCategory as keyof typeof t.categories]
                    .title
                }
              </h3>
              <p className="text-base px-2">
                {
                  t.categories[activeCategory as keyof typeof t.categories]
                    .description
                }
              </p>
            </div>

            {/* Timeline Items */}
            <div className="space-y-6">
              {experienceData[
                activeCategory as keyof typeof experienceData
              ].items.map((item, index) => {
                const Icon = item.icon;
                const isExpanded = expandedItem === item.id;
                const isMobileExpanded = expandedMobileItems.includes(item.id);
                const showExpandButton = hasAchievements(item);

                return (
                  <div
                    key={item.id}
                    className="relative"
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animation: `slideIn 0.6s ease-out ${index * 200}ms both`,
                    }}
                  >
                    <div
                      className={`bg-info rounded-4xl transition-all duration-300 overflow-hidden`}
                    >
                      {/* Main Content */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-start space-x-5 sm:space-x-4">
                          {/* Icon */}
                          <div
                            className={`flex-shrink-0 p-3 rounded-full bg-muted ${item.color} float-animation`}
                          >
                            <Icon className="w-5 h-5 sm:h-6 sm:w-6" />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            {/* Header */}
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                              <div className="min-w-0">
                                <h4 className="text-[18px] sm:text-[19px] font-bold mb-1 break-words">
                                  {item.title}
                                </h4>
                                <p className="text-[16px] sm:text-[17px] font-medium break-words">
                                  {item.institution}
                                </p>
                              </div>
                              <div className="text-left sm:text-right flex-shrink-0">
                                <div
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium border ${getStatusBg(
                                    item.status
                                  )}`}
                                >
                                  {
                                    t.status[
                                      item.status as keyof typeof t.status
                                    ]
                                  }
                                </div>
                                <p
                                  className={`font-semibold mt-3 sm:mt-1 text-[15px] ${
                                    !isMobileExpanded ? "hidden sm:block" : ""
                                  }`}
                                >
                                  {item.period}
                                </p>
                              </div>
                            </div>

                            {/* Basic Info - Hidden on mobile if not expanded */}
                            <div
                              className={`flex flex-wrap gap-6 text-[15px] mb-4 ${
                                !isMobileExpanded ? "hidden sm:flex" : ""
                              }`}
                            >
                              {item.location && (
                                <div className="flex items-center space-x-2">
                                  <FaMapMarkerAlt className="w-4 h-4" />
                                  <span>{item.location}</span>
                                </div>
                              )}
                              {item.gpa && (
                                <div className="flex items-center space-x-2">
                                  <FaStar className="w-4 h-4" />
                                  <span>
                                    {t.gpa}: {item.gpa}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Description - Hidden on mobile if not expanded */}
                            <p
                              className={`text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] tracking-tight sm:tracking-normal mb-5 ${
                                !isMobileExpanded ? "hidden sm:block" : ""
                              }`}
                            >
                              {item.description}
                            </p>

                            {/* Technologies - Hidden on mobile if not expanded */}
                            {item.technologies && (
                              <div
                                className={`flex flex-wrap gap-2 mb-4 ${
                                  !isMobileExpanded ? "hidden sm:flex" : ""
                                }`}
                              >
                                {item.technologies.map(
                                  (TechIcon, techIndex) => (
                                    <div
                                      key={techIndex}
                                      className="p-2 bg-muted rounded-lg "
                                    >
                                      <TechIcon className="h-4 w-4 sm:w-5 sm:h-5" />
                                    </div>
                                  )
                                )}
                              </div>
                            )}

                            {/* Mobile Expand Button - Always visible on mobile */}
                            <button
                              onClick={() => toggleMobileExpanded(item.id)}
                              className="flex items-center space-x-2 transition-colors duration-200 sm:hidden sm:mb-4"
                            >
                              {isMobileExpanded ? (
                                <FaChevronDown className="w-3 h-3 text-[#0083cc] " />
                              ) : (
                                <FaChevronRight className="w-3 h-3 text-[#0083cc] " />
                              )}
                              <span className="text-[15px] text-[#0083cc]">
                                {isMobileExpanded ? t.showLess : t.showMore}
                              </span>
                            </button>

                            {/* Desktop Expand Button - Only show if item has achievements */}
                            {showExpandButton && (
                              <button
                                onClick={() => toggleExpanded(item.id)}
                                className="hidden sm:flex items-center space-x-2 transition-colors duration-200 text-primary"
                              >
                                {isExpanded ? (
                                  <FaChevronDown className="w-4 h-4" />
                                ) : (
                                  <FaChevronRight className="w-4 h-4" />
                                )}
                                <span className="text-[15px] text-[#0083cc]">
                                  {isExpanded ? t.showLess : t.showMore}
                                </span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expanded Content - Show on desktop when expanded OR on mobile when mobile expanded */}
                      {((isExpanded && showExpandButton) ||
                        (isMobileExpanded && showExpandButton)) && (
                        <div className="px-6 pb-6 pt-0 border-t border-info">
                          <div className="mt-4">
                            <h5 className="font-semibold mb-3 text-base">
                              {t.achievements}:
                            </h5>
                            <ul className="space-y-2 mb-4">
                              {item.achievements?.map(
                                (achievement, achievementIndex) => (
                                  <li
                                    key={achievementIndex}
                                    className="flex items-start space-x-3"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-abc mt-2 flex-shrink-0"></div>
                                    <span className="text-[16px]">
                                      {achievement}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>

                            {/* Sertifika Resimleri */}
                            <div className="flex flex-wrap gap-8 justify-center mt-5">
                              <a
                                href="/images/UstunBasari.png"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[160px] sm:w-[400px] md:w-[500px] xl:w-[550px]"
                              >
                                <Image
                                  src="/images/UstunBasari.png"
                                  alt="Üstün Başarı Sertifikası"
                                  width={500}
                                  height={500}
                                  className="w-full h-auto rounded-4xl shadow-4xl hover:opacity-90 transition duration-300"
                                />
                              </a>
                              <a
                                href="/images/Sertifika.png"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[160px] sm:w-[400px] md:w-[500px] xl:w-[550px]"
                              >
                                <Image
                                  src="/images/Sertifika.png"
                                  alt="Sertifika"
                                  width={500}
                                  height={500}
                                  className="w-full h-auto rounded-4xl shadow-4xl hover:opacity-90 transition duration-300"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
