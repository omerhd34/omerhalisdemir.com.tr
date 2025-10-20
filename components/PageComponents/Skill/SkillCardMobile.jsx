import SkillIcon from "./SkillIcon";
import SkillLevelBadge from "./SkillLevelBadge";

export default function SkillCardMobile({ skill, index, translations }) {
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
     <div className="p-2 rounded-lg bg-muted transition-transform duration-300 group-hover:scale-110 mb-1">
      <SkillIcon iconName={skill.icon} size="small" />
     </div>
     <h4 className="font-semibold text-xs leading-tight mb-1">{skill.name}</h4>
     <p className="text-[10px] text-primary/70">
      {skill.experience} {translations.yearsExp}
     </p>
    </div>

    <div className="flex justify-center">
     <SkillLevelBadge level={skill.level} translations={translations} size="small" />
    </div>
   </div>
  </div>
 );
}