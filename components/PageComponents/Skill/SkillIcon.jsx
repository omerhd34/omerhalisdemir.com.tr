import { iconMap, iconColorMap } from "./skillConstants";

export default function SkillIcon({ iconName, size = "default" }) {
 const IconComponent = iconMap[iconName];
 const iconColor = iconColorMap[iconName] || "text-primary";

 const sizeClasses = {
  small: "w-4 h-4",
  default: "w-5 h-5 sm:w-6 sm:h-6",
  large: "w-6 h-6 sm:w-7 sm:h-7"
 };

 if (!IconComponent) return null;

 return (
  <IconComponent className={`${sizeClasses[size]} ${iconColor}`} />
 );
}