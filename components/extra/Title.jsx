export default function Title({ title, subtitle, description, isVisible }) {
 return (
  <div
   className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
  >
   <div className="inline-flex items-center space-x-3 mb-2">
    <div className="w-12 h-0.5 bg-linear-to-r from-transparent to-green-300"></div>
    <span className="text-[16px] sm:text-base font-medium bg-linear-to-r from-green-100 to-green-300 bg-clip-text text-transparent">
     {subtitle}
    </span>
    <div className="w-12 h-0.5 bg-linear-to-r from-transparent to-green-300"></div>
   </div>

   <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-linear-to-r bg-clip-text text-green-300 font-extrabold">
    {title}
   </h1>

   {description && (
    <div
     className={`mt-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
     <p className="text-[16px] sm:text-lg max-w-3xl mx-auto px-2 text-accent">{description}</p>
    </div>
   )}
  </div>
 );
}
