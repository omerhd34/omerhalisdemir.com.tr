import AnimatedGradient from "../extra/AnimatedGradient";

export default function LoadingScreen({ language }) {

 return (
  <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1f1a] via-[#0d2821] to-[#143d32] relative overflow-hidden">
   <div className="relative z-10 flex flex-col items-center">
    <div className="mb-8 scale-150 animate-spin-slow">
     <AnimatedGradient isHovered={true} />
    </div>
   </div>
   <style jsx>{`
    .animate-spin-slow {
     animation: spin 3s linear infinite;
    }
   `}</style>
  </section>
 );
}