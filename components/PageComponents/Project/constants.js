import {
 SiReact,
 SiNextdotjs,
 SiTailwindcss,
 SiNodedotjs,
 SiExpress,
 SiArduino,
 SiCplusplus,
 SiMongodb,
 SiJavascript,
 SiMysql,
 SiTypescript,
 SiBootstrap,
 SiVercel,
 SiPrisma,
} from "react-icons/si";
import {
 FaGitAlt,
 FaGithub,
 FaHtml5,
 FaCss3Alt,
 FaJsSquare,
 FaNodeJs,
 FaJava,
 FaMicrochip,
 FaTools,
 FaCpanel,
 FaReact,
} from "react-icons/fa";

export const ICON_MAP = {
 SiReact,
 SiNextdotjs,
 SiTailwindcss,
 SiNodedotjs,
 SiExpress,
 SiArduino,
 SiCplusplus,
 SiMongodb,
 SiJavascript,
 SiMysql,
 SiTypescript,
 SiBootstrap,
 SiPrisma,
 FaReact,
 FaGitAlt,
 FaGithub,
 FaHtml5,
 FaCss3Alt,
 FaJsSquare,
 FaNodeJs,
 FaJava,
 FaMicrochip,
 FaTools,
 FaCpanel,
 SiVercel,
};

export const ICON_SPECIFIC_COLORS = {
 SiReact: "text-cyan-400",
 SiNextdotjs: "text-black",
 SiTailwindcss: "text-cyan-500",
 SiNodedotjs: "text-green-600",
 SiExpress: "text-gray-500",
 SiArduino: "text-teal-500",
 SiCplusplus: "text-blue-600",
 SiMongodb: "text-green-500",
 SiJavascript: "text-yellow-400",
 SiMysql: "text-blue-600",
 SiTypescript: "text-blue-600",
 SiBootstrap: "text-purple-600",
 SiPrisma: "text-indigo-600",
 SiVercel: "text-black",
 FaReact: "text-cyan-400",
 FaGitAlt: "text-orange-600",
 FaGithub: "text-gray-500",
 FaHtml5: "text-orange-600",
 FaCss3Alt: "text-blue-500",
 FaJsSquare: "text-yellow-400",
 FaNodeJs: "text-green-600",
 FaJava: "text-red-600",
 FaMicrochip: "text-purple-500",
 FaTools: "text-gray-600",
 FaCpanel: "text-orange-500",
};

export const ELECTRONICS_IMAGES = {
 4: "/images/1.png",
 5: "/images/MetalDedector.png",
};

export const getStatusBg = (status) => {
 switch (status) {
  case "completed":
   return "bg-blue-900 border-accent";
  case "current":
   return "bg-red-900 border-accent";
  case "upcoming":
   return "bg-yellow-500/20 border-accent";
  default:
   return "bg-gray-500/20 border-accent";
 }
};
