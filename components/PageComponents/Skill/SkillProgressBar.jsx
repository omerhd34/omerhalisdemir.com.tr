import { getProgressColor } from "./skillConstants";

export default function SkillProgressBar({ level, percentage, translations, showLabel = true }) {
 const progressColor = getProgressColor(level);

 return (
  <div className="space-y-2">
   {showLabel && (
    <div className="flex justify-between items-center text-xs sm:text-sm">
     <span className="text-primary/70">{translations.proficiency}</span>
     <span className="font-semibold text-primary">{percentage}%</span>
    </div>
   )}

   <div className="relative w-full bg-muted rounded-full h-2.5 sm:h-3 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

    <div
     className={`relative h-full ${progressColor} rounded-full`}
     style={{ width: `${percentage}%` }}
    >
     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
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