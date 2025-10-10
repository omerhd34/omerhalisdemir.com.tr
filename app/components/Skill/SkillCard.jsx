"use client";

export default function SkillCard({ skill, index, isMobile = false, yearsExpText }) {
 const Icon = skill.icon;

 if (isMobile) {
  return (
   <div
    className="group relative"
    style={{
     animationDelay: `${index * 100}ms`,
     animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
    }}
   >
    <div className="bg-info p-4 rounded-lg transition-all duration-300 hover:shadow-xl">
     <div className="flex flex-col items-center text-center">
      <div
       className={`p-2 rounded-lg bg-muted ${skill.color} float-animation mb-1 sm:mb-2`}
      >
       <Icon className="w-4 h-4" />
      </div>
      <h4 className="font-semibold text-sm leading-tight">
       {skill.name}
      </h4>
     </div>
    </div>
   </div>
  );
 }

 return (
  <div
   className="group relative"
   style={{
    animationDelay: `${index * 100}ms`,
    animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`,
   }}
  >
   <div className="bg-info p-6 rounded-xl transition-all duration-300 hover:shadow-xl">
    <div className="flex items-center justify-between">
     <div className="flex items-center space-x-3">
      <div
       className={`p-3 rounded-lg bg-muted ${skill.color} float-animation`}
      >
       <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <div>
       <h4 className="font-semibold text-[16px] sm:text-base">
        {skill.name}
       </h4>
       <p className="text-[12px] sm:text-xs">
        {skill.experience} {yearsExpText}
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}