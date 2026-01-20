import SkillIcon from "./SkillIcon";

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
     <div className="flex flex-col items-center text-center">
      <div className="p-2 rounded-lg bg-muted transition-transform duration-300 group-hover:scale-110 mb-1">
       <SkillIcon iconName={skill.icon} size="small" color={skill.color} />
      </div>
     <h4 className="font-semibold text-xs leading-tight mb-1">{skill.name}</h4>
     <p className="text-[10px] text-primary/70">
      {skill.experience} {translations.yearsExp}
     </p>
    </div>
   </div>
  </div>
 );
}