import { ICON_MAP } from "../../extra/icons";

export const iconMap = ICON_MAP;

export const getLevelColor = (level) => {
 switch (level) {
  case "beginner":
   return "from-yellow-500 to-orange-500";
  case "intermediate":
   return "from-blue-500 to-cyan-500";
  case "advanced":
   return "bg-purple-500";
  case "expert":
   return "bg-red-900";
  default:
   return "bg-gray-600";
 }
};

export const getProgressColor = (level) => {
 switch (level) {
  case "beginner":
   return "bg-gradient-to-r from-yellow-500 to-orange-500";
  case "intermediate":
   return "bg-gradient-to-r from-blue-500 to-cyan-500";
  case "advanced":
   return "bg-gradient-to-r from-purple-500 to-pink-500";
  case "expert":
   return "bg-gradient-to-r from-red-700 to-red-900";
  default:
   return "bg-gradient-to-r from-gray-500 to-gray-600";
 }
};
