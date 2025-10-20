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
  HTML5: "text-orange-600",
  CSS3: "text-blue-400",
  JavaScript: "text-yellow-400",
  TypeScript: "text-blue-400",
  React: "text-blue-500",
  "Next.js": "text-white",
  "Tailwind CSS": "text-teal-400",
  Bootstrap: "text-purple-700",
  "Java & OOP": "text-red-500",
  "Node.js": "text-green-500",
  SiExpress: "text-black",
  MongoDB: "text-green-400",
  MySQL: "text-green-400",
  Git: "text-orange-600",
  GitHub: "text-gray-300",
  "VS Code": "text-blue-500",
  "IntelliJ IDEA": "text-purple-500",
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
