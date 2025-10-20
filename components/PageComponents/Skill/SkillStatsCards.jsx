export default function SkillStatsCards({ skillsCount, avgProficiency, translations }) {
 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
   <div className="bg-muted p-4 rounded-xl border border-info hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
    <div className="text-center">
     <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
      {skillsCount}
     </div>
     <div className="text-xs sm:text-sm text-primary/70">
      {translations.categoryStats.technologies}
     </div>
    </div>
   </div>

   <div className="bg-muted p-4 rounded-xl border border-info hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
    <div className="text-center">
     <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">
      {avgProficiency}%
     </div>
     <div className="text-xs sm:text-sm text-primary/70">
      {translations.categoryStats.avgLevel}
     </div>
    </div>
   </div>
  </div>
 );
}