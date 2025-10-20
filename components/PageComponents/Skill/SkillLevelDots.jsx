import { getLevelColor } from "./skillConstants";

export default function SkillLevelDots({ level }) {
 const levelColor = getLevelColor(level);

 const levelValue = {
  beginner: 1,
  intermediate: 2,
  advanced: 3,
  expert: 4,
 }[level];

 return (
  <div className="flex justify-center space-x-1.5 mt-4">
   {[1, 2, 3, 4].map((dot) => (
    <div
     key={dot}
     className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${dot <= levelValue
      ? `bg-gradient-to-r ${levelColor} scale-110`
      : "bg-muted scale-100"
      }`}
    />
   ))}
  </div>
 );
}