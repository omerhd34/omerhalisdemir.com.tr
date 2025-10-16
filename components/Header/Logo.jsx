import Link from "next/link";
import AnimatedGradient from "../extra/AnimatedGradient";

export function Logo({ isHovered, setIsHovered }) {
 return (
  <Link
   href="/home"
   className="flex items-center group relative"
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
  >
   <div className="flex items-center space-x-3 relative">
    <div className="hidden min-[400px]:block relative">
     <AnimatedGradient isHovered={isHovered} />
     <div
      className={`absolute top-1/2 -right-2 w-4 h-px bg-gradient-to-r from-[#0170e682] to-transparent transition-all duration-800 ${isHovered ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
       }`}
      style={{
       transformOrigin: "left center",
       transform: "translateY(-50%)",
      }}
     />
    </div>

    <div className="relative">
     <div
      className={`absolute inset-0 bg-gradient-to-r from-[#0170e682]/20 via-[#007bff82]/20 to-[#0170e682]/20 rounded-lg transition-all duration-800 ${isHovered ? "opacity-100 blur-sm scale-110" : "opacity-0 scale-100"
       }`}
     />

     <div className="relative min-w-max -mb-2">
      <div
       className={`transition-all duration-800 opacity-100 scale-100`}
      >
       <span
        className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#ebf3fe] via-[#0170e682] to-[#007bff82] bg-clip-text text-transparent leading-tight tracking-[0.1em] font-[Garamond] "
       >
        ÖHD
       </span>
      </div>
     </div>
    </div>
    <div
     className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${isHovered ? "opacity-30" : "opacity-0"
      }`}
     style={{
      background:
       "radial-gradient(circle at center, rgba(1, 112, 230, 0.1) 0%, transparent 70%)",
      borderRadius: "50%",
      transform: "scale(1.5)",
     }}
    />
   </div>
  </Link>
 );
}