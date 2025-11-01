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

export const ICON_COLOR_CLASSES = [
  "text-cyan-400 hover:text-cyan-300",
  "text-white hover:text-gray-200",
  "text-blue-500 hover:text-blue-400",
  "text-yellow-400 hover:text-yellow-300",
  "text-teal-400 hover:text-teal-300",
  "text-green-500 hover:text-green-400",
  "text-teal-500 hover:text-teal-400",
  "text-blue-600 hover:text-blue-500",
  "text-purple-400 hover:text-purple-300",
  "text-orange-400 hover:text-orange-300",
  "text-black hover:text-gray-200",
  "text-orange-600 hover:text-orange-500",
  "text-black hover:text-gray-200",
];

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
