import SkillIcon from "./SkillIcon";

export default function SkillCardDesktop({ skill, index, translations }) {
 return (
  <div
   className="group relative"
   style={{
    animationDelay: `${index * 100}ms`,
    animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
   }}
  >
   <div className="relative bg-muted p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-2xl border border-info hover:border-primary/30 overflow-hidden">
    <div className="flex items-center space-x-3">
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
   </div>
  </div>
 );
}