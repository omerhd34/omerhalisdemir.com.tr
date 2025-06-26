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

interface TranslationSkillLevels {
  expert: string;
  advanced: string;
  intermediate: string;
  start: string;
}

interface CategoryStats {
  averageLevel: string;
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
  skillLevels: TranslationSkillLevels;
  categoryStats: CategoryStats;
  skillDescriptions?: {
    [key: string]: string;
  };
}

const Skills: React.FC<SkillsProps> = ({ language = "TR" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("frontend");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const t: Translation =
    (translations[language as keyof typeof translations] as Translation) ||
    (translations.TR as Translation);

  const getCategoryStats = (category: string) => {
    const skills = skillsData[category as keyof typeof skillsData].skills;
    const avgLevel = Math.round(
      skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length
    );
    const totalExp = skills.reduce(
      (acc, skill) => acc + parseInt(skill.experience),
      0
    );
    return { avgLevel, totalExp, count: skills.length };
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section
      id="skills"
      className="min-h-screen pt-16 lg:pt-38 relative overflow-hidden text-primary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <FaCode className="w-8 h-8 mx-auto mb-2 text-blue-300" />
        <Title title={t.title} subtitle={t.subtitle} isVisible={isVisible} />

        <div
          className={`text-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-[16px] sm:text-lg max-w-3xl mx-auto px-2">
            {t.description}
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 sm:mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                className="w-[200px] xs:w-[220px] sm:w-[250px] lg:w-auto"
              />
            );
          })}
        </div>

        <div
          className={`bg-secondary p-8 rounded-4xl shadow-2xl transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              {t.categories[activeCategory]?.title || activeCategory}
            </h3>
            <p className="text-base px-2">
              {t.categories[activeCategory]?.description || ""}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6">
            {skillsData[activeCategory as keyof typeof skillsData].skills.map(
              (skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group relative"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
                    }}
                  >
                    <div className="bg-info p-6 rounded-xl transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center justify-between mb-4">
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
                        <div className="text-right">
                          <div className="text-md sm:text-2xl font-bold">
                            {skill.level}%
                          </div>
                          <div className="text-[12px] sm:text-xs">
                            {skill.level >= 90
                              ? t.skillLevels.expert
                              : skill.level >= 65
                              ? t.skillLevels.advanced
                              : skill.level >= 40
                              ? t.skillLevels.intermediate
                              : t.skillLevels.start}
                          </div>
                        </div>
                      </div>

                      <div className="relative h-2 bg-blue-950 rounded-full overflow-hidden mb-4">
                        <div
                          className="absolute top-0 left-0 h-full bg-red-900 rounded-full transition-all duration-1000"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <div className="mt-8 pt-8 border-t border-info">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-[30px] sm:text-3xl font-bold">
                  %{getCategoryStats(activeCategory).avgLevel}
                </div>
                <div className="text-[16px] sm:text-[18px]">
                  {t.categoryStats.averageLevel}
                </div>
              </div>
              <div>
                <div className="text-[30px] sm:text-3xl font-bold">
                  {getCategoryStats(activeCategory).count}
                </div>
                <div className="text-[16px] sm:text-[18px]">
                  {t.categoryStats.technologies}
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
