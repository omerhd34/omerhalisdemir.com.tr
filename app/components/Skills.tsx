"use client";
import { useState, useEffect } from "react";
import Title from "./extra/Title";
import CategoryButton from "./extra/CategoryButton";
import skillsData from "../data/data/SkillsData";
import translations from "../data/Translations/SkillsTranslations";
import "../styles/skills.css";
import { FaCode } from "react-icons/fa";

interface SkillsProps {
  language?: string;
}

interface TranslationCategory {
  title: string;
  description: string;
}

interface CategoryStats {
  technologies: string;
  skills: string;
}

interface Translation {
  subtitle: string;
  title: string;
  description: string;
  yearsExp: string;
  categories: {
    [key: string]: TranslationCategory;
  };
  categoryStats: CategoryStats;
  skillDescriptions?: {
    [key: string]: string;
  };
}

const Skills: React.FC<SkillsProps> = ({ language = "TR" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [headerHeight, setHeaderHeight] = useState(0);

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

  const t: Translation =
    (translations[language as keyof typeof translations] as Translation) ||
    (translations.TR as Translation);

  const getCategoryStats = (category: string) => {
    const skills = skillsData[category as keyof typeof skillsData].skills;
    const totalExp = skills.reduce(
      (acc, skill) => acc + parseInt(skill.experience),
      0
    );
    return { totalExp, count: skills.length };
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section
      id="skills"
      className="relative"
      style={{
        paddingTop: `${Math.max(headerHeight + 40, 120)}px`,
        minHeight: "100vh",
      }}
    >
      <div className="block sm:hidden" style={{ height: "1px" }} />

      <div className="min-h-screen relative overflow-hidden text-primary ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 ">
          <div
            className={`text-center mb-2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <FaCode className="w-8 h-8 mx-auto text-blue-300 " />
          </div>
          <Title
            title={t.title}
            subtitle={t.subtitle}
            description={t.description}
            isVisible={isVisible}
          />

          <div
            className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 sm:mb-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {Object.entries(skillsData).map(([key, data]) => {
              const stats = getCategoryStats(key);
              return (
                <CategoryButton
                  key={key}
                  categoryKey={key}
                  title={t.categories[key]?.title || key}
                  count={stats.count}
                  countLabel={t.categoryStats.skills}
                  icon={data.icon}
                  color={data.color}
                  isActive={activeCategory === key}
                  onClick={handleCategoryChange}
                  className="w-[120px] xs:w-[220px] sm:w-[250px] lg:w-auto"
                />
              );
            })}
          </div>

          <div
            className={`bg-secondary p-4 sm:p-8 rounded-2xl shadow-2xl sm:rounded-4xl sm:shadow-4xl transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                {t.categories[activeCategory]?.title || activeCategory}
              </h3>
              <p className="text-sm sm:text-base px-2">
                {t.categories[activeCategory]?.description || ""}
              </p>
            </div>

            {/* Mobil: Kompakt grid layout */}
            <div className="block sm:hidden">
              <div className="grid grid-cols-2 gap-3">
                {skillsData[
                  activeCategory as keyof typeof skillsData
                ].skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group relative"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: `fadeInUp 0.6s ease-out ${
                          index * 100
                        }ms both`,
                      }}
                    >
                      <div className="bg-info p-4 rounded-lg transition-all duration-300 hover:shadow-xl">
                        <div className="flex flex-col items-center text-center">
                          <div
                            className={`p-2 rounded-lg bg-muted ${skill.color} float-animation mb-1 sm:mb-2`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="font-semibold text-sm leading-tight">
                            {skill.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden sm:block">
              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-6">
                {skillsData[
                  activeCategory as keyof typeof skillsData
                ].skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group relative"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: `fadeInUp 0.6s ease-out ${
                          index * 100
                        }ms both`,
                      }}
                    >
                      <div className="bg-info p-6 rounded-xl transition-all duration-300 hover:shadow-xl">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`p-3 rounded-lg bg-muted ${skill.color} float-animation`}
                            >
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-[16px] sm:text-base">
                                {skill.name}
                              </h4>
                              <p className="text-[12px] sm:text-xs">
                                {skill.experience} {t.yearsExp}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-info">
              <div className="grid grid-cols-1 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold">
                    {getCategoryStats(activeCategory).count}
                  </div>
                  <div className="text-sm sm:text-[18px]">
                    {t.categoryStats.technologies}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
