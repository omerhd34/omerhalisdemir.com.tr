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
} from "react-icons/si";

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
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
};

export const iconColorMap = {
  FaHtml5: "text-orange-600",
  FaCss3Alt: "text-blue-500",
  FaJsSquare: "text-yellow-400",
  FaReact: "text-cyan-400",
  SiNextdotjs: "text-black",
  SiTypescript: "text-blue-600",
  SiTailwindcss: "text-cyan-500",
  FaBootstrap: "text-purple-600",
  FaNodeJs: "text-green-600",
  SiNodedotjs: "text-green-600",
  SiExpress: "text-gray-500",
  SiMongodb: "text-green-500",
  SiMysql: "text-blue-600",
  FaJava: "text-red-600",
  FaGitAlt: "text-orange-600",
  FaGithub: "text-gray-500",
  FaLaptopCode: "text-blue-400",
  FaServer: "text-gray-600",
  FaTools: "text-gray-500",
};

export const getLevelColor = (level) => {
  switch (level) {
    case "beginner":
      return "from-yellow-500 to-orange-500";
    case "intermediate":
      return "from-blue-500 to-cyan-500";
    case "advanced":
      return "from-purple-500 to-pink-500";
    case "expert":
      return "from-red-700 to-red-900";
    default:
      return "from-gray-500 to-gray-600";
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
