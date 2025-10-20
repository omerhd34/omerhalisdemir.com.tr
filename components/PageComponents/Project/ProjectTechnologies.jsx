export default function ProjectTechnologies({ technologyIcons, isMobile = false }) {
 if (technologyIcons.length === 0) return null;

 const baseClasses = "flex flex-wrap gap-2 xs:gap-3";
 const displayClasses = isMobile ? "" : "hidden sm:flex mb-4 xs:mb-5 sm:mb-6";

 return (
  <div className={`${baseClasses} ${displayClasses}`}>
   {technologyIcons.map(({ id, Icon, colorClass }) => (
    <div
     key={id}
     className="p-1.5 xs:p-2 bg-muted rounded-lg transition-all duration-300 group hover:scale-110 hover:shadow-lg"
    >
     <Icon
      className={`w-3 xs:w-4 ${!isMobile ? "sm:w-5" : ""} h-3 xs:h-4 ${!isMobile ? "sm:h-5" : ""
       } transition-all duration-300 ${colorClass}`}
     />
    </div>
   ))}
  </div>
 );
}