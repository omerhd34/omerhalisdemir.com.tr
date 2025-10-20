import SkillIcon from "./SkillIcon";
import SkillLevelBadge from "./SkillLevelBadge";
import { getLevelColor } from "./skillConstants";

export default function SkillCardDesktop({ skill, index, translations }) {
 const levelColor = getLevelColor(skill.level);

 return (
  <div
   className="group relative overflow-hidden"
   style={{
    animationDelay: `${index * 100}ms`,
    animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
   }}
  >
   <div
    className={`absolute inset-0 bg-gradient-to-r ${levelColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
   />

   <div className="relative bg-muted p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl border border-info hover:border-primary/30">
    <div className="flex items-center justify-between">
     <div className="flex items-center space-x-3 flex-1">
      <div className="p-3 rounded-xl bg-primary transition-all duration-300 group-hover:scale-110">
       <SkillIcon iconName={skill.icon} size="default" />
      </div>
      <div className="flex-1">
       <h4 className="font-bold text-[16px] sm:text-lg mb-1">{skill.name}</h4>
       <p className="text-[12px] sm:text-xs text-primary/70">
        {skill.experience} {translations.yearsExp}
       </p>
      </div>
     </div>

     <SkillLevelBadge level={skill.level} translations={translations} size="default" />
    </div>
   </div>
  </div>
 );
}