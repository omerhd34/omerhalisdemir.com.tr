import Link from "next/link";

export function DesktopSocialLinks({ socialLinks, t }) {
 return (
  <div className="hidden lg:block">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 z-[0] ">
    <div className="flex justify-end">
     <div className="flex items-center justify-center space-x-3 p-3 bg-gradient-to-r from-[#040d348d] via-[#091c708d] to-[#020c3b] backdrop-blur-sm rounded-b-2xl shadow-xl border-x border-b border-[#718355]/20">
      {socialLinks.map((link) => {
       const IconComponent = link.icon;
       return (
        <Link
         key={link.name}
         href={link.href}
         target="_blank"
         rel="noopener noreferrer"
         className="group relative flex items-center justify-center px-3 py-2.5 text-primary bg-[#151b36] hover:bg-[#040d348d] rounded-lg text-xs font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-[#ebf3fe]/30 hover:border-[#fff] min-w-[40px]"
        >
         {link.name === t.cv ? (
          <div className="flex items-center space-x-1">
           <IconComponent className="w-4 h-4" />
           <span className="text-xs whitespace-nowrap">
            {link.name}
           </span>
          </div>
         ) : (
          <IconComponent className="w-4 h-4" />
         )}
         <div className="absolute inset-0 bg-gradient-to-r from-[#020617] to-[#020617] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </Link>
       );
      })}
     </div>
    </div>
   </div>
  </div>
 );
}