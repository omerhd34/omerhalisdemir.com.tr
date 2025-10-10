import Link from "next/link";
import localFont from "next/font/local";
const rubikDistressed = localFont({
 src: "../../public/fonts/RubikDistressed-Regular.ttf",
 variable: "--font-rubik-distressed",
 display: "swap",
});
import AnimatedGradient from "../extra/AnimatedGradient";
export function Logo({ isHovered, setIsHovered }) {
 const logoText = "Ömer Halis DEMİR";
 return (
  <Link
   href="/"
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
       className={`transition-all duration-800 ${isHovered
        ? "opacity-0 scale-95 pointer-events-none"
        : "opacity-100 scale-100"
        }`}
      >
       <span
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#ebf3fe] via-[#0170e682] to-[#007bff82] bg-clip-text text-transparent leading-tight tracking-[0.3em] "
        style={{ fontFamily: rubikDistressed.style.fontFamily }}
       >
        ÖHD
       </span>
      </div>

      <div
       className={`absolute top-0 left-0 transition-all duration-800 ${isHovered
        ? "opacity-100 scale-105 pointer-events-auto"
        : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
       <span
        className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight whitespace-nowrap tracking-wider"
        style={{
         fontFamily: rubikDistressed.style.fontFamily,
         textShadow: isHovered
          ? "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(14, 165, 233, 0.6)"
          : "none",
        }}
       >
        {logoText.split("").map((char, index) => (
         <span
          key={index}
          className="inline-block transition-all duration-600"
          style={{
           transform: isHovered
            ? "translateY(2px)"
            : "translateY(0px)",
           transition: `transform 0.6s ease ${index * 80}ms`,
          }}
         >
          {char === " " ? "\u00A0" : char}
         </span>
        ))}
       </span>

       <div
        className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#3b82f6] via-[#0ea5e9] to-[#ffffff] transition-all duration-1000 ${isHovered ? "w-full opacity-100" : "w-0 opacity-0"
         }`}
        style={{
         width: isHovered ? "100%" : "0%",
         right: "0",
         boxShadow: isHovered
          ? "0 0 10px rgba(59, 130, 246, 0.5)"
          : "none",
        }}
       />
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