"use client";

export default function SkillsStats({ count, technologiesText }) {
 return (
  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-info">
   <div className="grid grid-cols-1 text-center">
    <div>
     <div className="text-2xl sm:text-3xl font-bold">{count}</div>
     <div className="text-sm sm:text-[18px]">{technologiesText}</div>
    </div>
   </div>
  </div>
 );
}