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
 SiExpress
} from "react-icons/si";

const iconMap = {
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

const iconColorMap = {
 "HTML5": "text-orange-600",
 "CSS3": "text-blue-400",
 "JavaScript": "text-yellow-400",
 "TypeScript": "text-blue-400",
 "React": "text-blue-500",
 "Next.js": "text-white",
 "Tailwind CSS": "text-teal-400",
 "Bootstrap": "text-purple-700",
 "Java & OOP": "text-red-500",
 "Node.js": "text-green-500",
 "SiExpress": "text-black",
 "MongoDB": "text-green-400",
 "MySQL": "text-green-400",
 "Git": "text-orange-600",
 "GitHub": "text-gray-300",
 "VS Code": "text-blue-500",
 "IntelliJ IDEA": "text-purple-500",
};

export default function SkillCard({ skill, index, isMobile = false, translations }) {
 const IconComponent = iconMap[skill.icon];
 const iconColor = iconColorMap[skill.name] || "text-primary";

 const getLevelColor = (level) => {
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

 const getProgressColor = (level) => {
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

 if (isMobile) {
  return (
   <div
    className="group relative overflow-hidden"
    style={{
     animationDelay: `${index * 100}ms`,
     animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
    }}
   >
    <div className="bg-info p-3 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 border border-info hover:border-primary/30">
     <div className="flex flex-col items-center text-center mb-2">
      <div
       className={`p-2 rounded-lg bg-muted transition-transform duration-300 group-hover:scale-110 mb-1`}
      >
       {IconComponent && <IconComponent className={`w-4 h-4 ${iconColor}`} />}
      </div>
      <h4 className="font-semibold text-xs leading-tight">{skill.name}</h4>
     </div>

     <div className="flex justify-center mb-1.5">
      <span
       className={`text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r ${getLevelColor(
        skill.level
       )} text-white font-medium`}
      >
       {translations.levels[skill.level]}
      </span>
     </div>

     <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
      <div
       className={`h-full ${getProgressColor(skill.level)} rounded-full`}
       style={{
        width: `${skill.percentage}%`,
       }}
      />
     </div>
    </div>
   </div>
  );
 }

 return (
  <div
   className="group relative overflow-hidden"
   style={{
    animationDelay: `${index * 100}ms`,
    animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
   }}
  >
   <div
    className={`absolute inset-0 bg-gradient-to-r ${getLevelColor(
     skill.level
    )} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}
   />

   <div className="relative bg-info p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border border-info hover:border-primary/30">
    <div className="flex items-start justify-between mb-4">
     <div className="flex items-center space-x-3 flex-1">
      <div
       className={`p-3 rounded-xl bg-muted transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
      >
       {IconComponent && <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} />}
      </div>
      <div className="flex-1">
       <h4 className="font-bold text-[16px] sm:text-lg mb-1">{skill.name}</h4>
       <p className="text-[12px] sm:text-xs text-primary/70">
        {skill.experience} {translations.yearsExp}
       </p>
      </div>
     </div>

     <span
      className={`text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${getLevelColor(
       skill.level
      )} text-white font-semibold shadow-lg`}
     >
      {translations.levels[skill.level]}
     </span>
    </div>

    <div className="space-y-2">
     <div className="flex justify-between items-center text-xs sm:text-sm">
      <span className="text-primary/70">{translations.proficiency}</span>
      <span className="font-semibold text-primary">{skill.percentage}%</span>
     </div>

     <div className="relative w-full bg-muted rounded-full h-2.5 sm:h-3 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div
       className={`relative h-full ${getProgressColor(
        skill.level
       )} rounded-full`}
       style={{
        width: `${skill.percentage}%`,
       }}
      >
       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      </div>
     </div>
    </div>

    <div className="flex justify-center space-x-1.5 mt-4">
     {[1, 2, 3, 4].map((dot) => {
      const levelValue = {
       beginner: 1,
       intermediate: 2,
       advanced: 3,
       expert: 4,
      }[skill.level];

      return (
       <div
        key={dot}
        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${dot <= levelValue
         ? `bg-gradient-to-r ${getLevelColor(skill.level)} scale-110`
         : "bg-muted scale-100"
         }`}
       />
      );
     })}
    </div>
   </div>

   <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
  </div>
 );
}