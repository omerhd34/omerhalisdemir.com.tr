import { iconMap, iconColorMap } from "./experienceConstants";

export default function ExperienceTechnologies({ technologies, isMobileExpanded, language }) {
 if (!technologies || technologies.length === 0) return null;

 const getIconName = (iconKey) => {
  const iconNames = {
   FaGraduationCap: { EN: "Graduation Cap", TR: "Mezuniyet" },
   MdDomain: { EN: "Domain", TR: "Alan Adı" },
   RiEnglishInput: { EN: "English", TR: "İngilizce" },
   FaUniversity: { EN: "University", TR: "Üniversite" },
   FaSchool: { EN: "School", TR: "Okul" },
   SiAutodesk: { EN: "Autodesk", TR: "Autodesk" },
   FaBriefcase: { EN: "Briefcase", TR: "Çanta" },
   FaBookOpen: { EN: "Book", TR: "Kitap" },
   FcElectronics: { EN: "Electronics", TR: "Elektronik" },
   SiAutocad: { EN: "AutoCAD", TR: "AutoCAD" },
   FaCertificate: { EN: "Certificate", TR: "Sertifika" },
   FaMicrochip: { EN: "Microchip", TR: "Mikroçip" },
   FaDraftingCompass: { EN: "Drafting Compass", TR: "Pergel" },
   FaCubes: { EN: "Cubes", TR: "Küpler" },
   FaServer: { EN: "Server", TR: "Sunucu" },
   FaGlobeEurope: { EN: "Globe", TR: "Küre" },
   FaNetworkWired: { EN: "Network", TR: "Ağ" },
   FaCloud: { EN: "Cloud", TR: "Bulut" },
   FaDatabase: { EN: "Database", TR: "Veritabanı" },
   FaHdd: { EN: "Hard Drive", TR: "Sabit Disk" },
   FaCogs: { EN: "Cogs", TR: "Dişliler" },
   FaShieldAlt: { EN: "Shield", TR: "Kalkan" },
   FaLanguage: { EN: "Language", TR: "Dil" },
   FaGlobe: { EN: "Globe", TR: "Dünya" },
   FaCalculator: { EN: "Calculator", TR: "Hesap Makinesi" },
   FaFlask: { EN: "Flask", TR: "Deney Tüpü" },
   FaAtom: { EN: "Atom", TR: "Atom" },
   FaBrain: { EN: "Brain", TR: "Beyin" },
   FaGithub: { EN: "GitHub", TR: "GitHub" },
   FaHtml5: { EN: "HTML5", TR: "HTML5" },
   FaCss3: { EN: "CSS3", TR: "CSS3" },
   FaJava: { EN: "Java", TR: "Java" },
   FaReact: { EN: "React", TR: "React" },
   SiReact: { EN: "React", TR: "React" },
   SiJavascript: { EN: "JavaScript", TR: "JavaScript" },
   SiHtml5: { EN: "HTML5", TR: "HTML5" },
   SiCss3: { EN: "CSS3", TR: "CSS3" },
   SiBootstrap: { EN: "Bootstrap", TR: "Bootstrap" },
   SiNextdotjs: { EN: "Next.js", TR: "Next.js" },
   SiNodedotjs: { EN: "Node.js", TR: "Node.js" },
   SiMongodb: { EN: "MongoDB", TR: "MongoDB" },
   SiTypescript: { EN: "TypeScript", TR: "TypeScript" },
   SiTailwindcss: { EN: "Tailwind CSS", TR: "Tailwind CSS" },
   SiExpress: { EN: "Express.js", TR: "Express.js" },
   SiMysql: { EN: "MySQL", TR: "MySQL" },
   SiArduino: { EN: "Arduino", TR: "Arduino" },
   SiCplusplus: { EN: "C++", TR: "C++" },
   SiServerfault: { EN: "Server", TR: "Sunucu" },
   SiLibreofficemath: { EN: "Math", TR: "Matematik" },
   SiWolframmathematica: { EN: "Mathematica", TR: "Matematik" },
   MdElectricBolt: { EN: "Electric", TR: "Elektrik" },
   FaTools: { EN: "Tools", TR: "Araçlar" },
   FaGitAlt: { EN: "Git", TR: "Git" },
   FaJsSquare: { EN: "JavaScript", TR: "JavaScript" },
   FaNodeJs: { EN: "Node.js", TR: "Node.js" },
  };

  return iconNames[iconKey]?.[language] || iconKey;
 };

 const getIconColor = (iconName) => {
  return iconColorMap[iconName] || "text-primary";
 };

 return (
  <div className={`flex flex-wrap gap-2 mb-4 ${!isMobileExpanded ? "hidden sm:flex" : ""}`}>
   {technologies.map((techIconName, techIndex) => {
    const TechIcon = iconMap[techIconName];
    const iconColorClass = getIconColor(techIconName);
    const iconDisplayName = getIconName(techIconName);

    if (!TechIcon) {
     return null;
    }

    return (
     <div
      key={techIndex}
      className="p-2 bg-muted rounded-lg hover:scale-110 transition-all duration-300 group relative"
     >
      <TechIcon
       className={`h-4 w-4 sm:w-5 sm:h-5 ${iconColorClass} transition-colors duration-300`}
      />
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
       {iconDisplayName}
      </div>
     </div>
    );
   })}
  </div>
 );
}