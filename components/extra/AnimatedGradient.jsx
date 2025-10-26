export default function AnimatedGradient({ isHovered = false }) {
 return (
  <div className="flex justify-center mr-3">
   <div className="inline-block relative">
    <div className="relative">
     <div
      className={`animated-gradient w-10 h-10 rounded-full relative overflow-hidden shadow-xl transition-all duration-500 ${isHovered ? "scale-110" : "scale-100"
       }`}
      style={{
       background: `conic-gradient(
                from 0deg at 50% 50%,
                #0a1f1a,
                #2e7d32,
                #43a047,
                #388e3c,
                #1a5745,
                #0d2821
              )`,
       animation: isHovered
        ? "rotate 1s linear infinite, pulse 2s ease-in-out infinite alternate, hover-spin 0.5s ease-out"
        : "rotate 2s linear infinite, pulse 4s ease-in-out infinite alternate",
       filter: isHovered ? "brightness(1.3) saturate(1.4)" : "brightness(1) saturate(1)",
       boxShadow: isHovered
        ? "0 0 30px rgba(46, 125, 50, 0.6), 0 0 60px rgba(46, 125, 50, 0.3)"
        : "0 0 20px rgba(46, 125, 50, 0.3)",
      }}
     >
      <div
       className={`absolute inset-0 opacity-30 mix-blend-overlay bg-linear-to-r from-transparent via-white to-transparent transition-opacity duration-300 ${isHovered ? "opacity-50" : "opacity-30"
        }`}
      ></div>

      <div
       className={`particle particle-1 absolute bg-white rounded-full transition-all duration-300 ${isHovered ? "w-1.5 h-1.5 opacity-100" : "w-1 h-1 opacity-80"
        } top-1/5 left-1/5`}
       style={{
        animation: isHovered
         ? "float-1 3s ease-in-out infinite, sparkle 0.5s ease-in-out infinite alternate"
         : "float-1 6s ease-in-out infinite",
       }}
      ></div>
      <div
       className={`particle particle-2 absolute bg-white rounded-full transition-all duration-300 ${isHovered ? "w-1.5 h-1.5 opacity-100" : "w-1 h-1 opacity-80"
        } top-9/12 right-1/4`}
       style={{
        animation: isHovered
         ? "float-2 4s ease-in-out infinite, sparkle 0.7s ease-in-out infinite alternate"
         : "float-2 8s ease-in-out infinite",
       }}
      ></div>
      <div
       className={`particle particle-3 absolute bg-white rounded-full transition-all duration-300 ${isHovered ? "w-1.5 h-1.5 opacity-100" : "w-1 h-1 opacity-80"
        } bottom-1/4 left-3/5`}
       style={{
        animation: isHovered
         ? "float-3 3.5s ease-in-out infinite, sparkle 0.6s ease-in-out infinite alternate"
         : "float-3 7s ease-in-out infinite",
       }}
      ></div>

      {isHovered && (
       <>
        <div
         className="absolute inset-2 border border-white/20 rounded-full"
         style={{
          animation: "energy-wave 1s ease-out infinite",
         }}
        ></div>
        <div
         className="absolute inset-1 border border-white/10 rounded-full"
         style={{
          animation: "energy-wave 1.5s ease-out infinite",
         }}
        ></div>
       </>
      )}
     </div>

     <div
      className={`absolute inset-0 rounded-xl blur-lg transition-all duration-500 ${isHovered ? "opacity-90 scale-125" : "opacity-60 scale-100"
       }`}
      style={{
       background: `conic-gradient(
                from 0deg at 50% 50%,
                #1b5e20,
                #43a047,
                #66bb6a,
                #2e7d32,
                #388e3c,
                #1b5e20
              )`,
       animation: isHovered
        ? "rotate 4s linear infinite, glow-pulse 1.5s ease-in-out infinite alternate"
        : "rotate 8s linear infinite, glow-pulse 3s ease-in-out infinite alternate",
       zIndex: -1,
      }}
     ></div>
    </div>

    <style jsx>{`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          @keyframes pulse {
            0% {
              transform: scale(1);
              filter: brightness(1) saturate(1);
            }
            100% {
              transform: scale(1.05);
              filter: brightness(1.2) saturate(1.3);
            }
          }
          @keyframes hover-spin {
            0% {
              transform: scale(1) rotate(0deg);
            }
            50% {
              transform: scale(1.15) rotate(180deg);
            }
            100% {
              transform: scale(1.1) rotate(360deg);
            }
          }
          @keyframes glow-pulse {
            0% {
              transform: scale(1.1);
              opacity: 0.5;
            }
            100% {
              transform: scale(1.3);
              opacity: 0.8;
            }
          }
          @keyframes sparkle {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            100% {
              transform: scale(1.3);
              opacity: 1;
            }
          }
          @keyframes energy-wave {
            0% {
              transform: scale(0.5);
              opacity: 0.8;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
          @keyframes float-1 {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.8;
            }
            50% {
              transform: translate(20px, -15px) scale(1.2);
              opacity: 1;
            }
          }
          @keyframes float-2 {
            0%,
            100% {
              transform: translate(0, 0) scale(0.8);
              opacity: 0.6;
            }
            50% {
              transform: translate(-25px, 20px) scale(1.1);
              opacity: 1;
            }
          }
          @keyframes float-3 {
            0%,
            100% {
              transform: translate(0, 0) scale(1.1);
              opacity: 0.7;
            }
            50% {
              transform: translate(15px, -25px) scale(0.9);
              opacity: 1;
            }
          }
        `}</style>
   </div>
  </div>
 );
}