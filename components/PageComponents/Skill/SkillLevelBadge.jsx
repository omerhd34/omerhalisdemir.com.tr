import { getLevelColor } from "./skillConstants";

export default function SkillLevelBadge({ level, translations, size = "default" }) {
 const levelColor = getLevelColor(level);

 const sizeClasses = {
  small: "text-[10px] px-2 py-0.5",
  default: "text-[11px] sm:text-xs px-2.5 py-1",
  large: "text-xs sm:text-sm px-3 py-1.5"
 };

 return (
  <span
   className={`${sizeClasses[size]} rounded-full bg-linear-to-r ${levelColor} text-white font-semibold shadow-lg`}
  >
   {translations.levels[level]}
  </span>
 );
}