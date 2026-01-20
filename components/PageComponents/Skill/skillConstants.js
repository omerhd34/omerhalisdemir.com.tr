import {
 FaLaptopCode,
 FaServer,
 FaTools,
 FaGitAlt,
 FaReact,
 FaHtml5,
 FaCss3Alt,
 FaJsSquare,
 FaBootstrap,
 FaNodeJs,
 FaJava,
 FaGithub,
} from "react-icons/fa";
import {
 SiNextdotjs,
 SiTypescript,
 SiTailwindcss,
 SiMongodb,
 SiMysql,
 SiExpress,
 SiPostgresql,
 SiPrisma,
} from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";
import { DiVisualstudio } from "react-icons/di";

export const iconMap = {
 FaLaptopCode,
 FaServer,
 FaTools,
 FaGitAlt,
 FaReact,
 FaHtml5,
 FaCss3Alt,
 FaJsSquare,
 FaBootstrap,
 FaNodeJs,
 FaJava,
 FaGithub,
 BsCursorFill,
 SiNextdotjs,
 SiTypescript,
 SiTailwindcss,
 SiMongodb,
 SiMysql,
 SiPostgresql,
 SiExpress,
 SiPrisma,
 DiVisualstudio,
};

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
