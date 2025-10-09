"use client";
import CategoryButton from "../extra/CategoryButton";

export default function CategoryTabs({
 experienceData,
 translations,
 activeCategory,
 onCategoryChange,
 getCategoryStats,
 isVisible,
}) {
 return (
  <div
   className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-5 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
   {Object.entries(experienceData).map(([key, data]) => {
    const stats = getCategoryStats(key);
    return (
     <CategoryButton
      key={key}
      categoryKey={key}
      title={translations.categories[key].title}
      count={stats.total}
      countLabel="items"
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