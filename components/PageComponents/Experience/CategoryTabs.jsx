"use client";
import CategoryButton from "../../extra/CategoryButton";

export default function CategoryTabs({
 experienceData,
 translations,
 activeCategory,
 onCategoryChange,
 getCategoryStats,
 isVisible,
 language,
}) {
 const itemsText = language === "EN" ? "items" : "öğe";
 const categoryOrder = ["education", "internship", "certificates"];

 const sortedCategories = categoryOrder
  .filter(key => experienceData[key])
  .map(key => [key, experienceData[key]]);

 return (
  <div
   className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
   {sortedCategories.map(([key, data]) => {
    const stats = getCategoryStats(key);
    return (
     <CategoryButton
      key={key}
      categoryKey={key}
      title={translations.categories[key]?.title || key}
      count={stats.total}
      countLabel={itemsText}
      icon={data.icon}
      color={data.color}
      isActive={activeCategory === key}
      onClick={onCategoryChange}
     />
    );
   })}
  </div>
 );
}