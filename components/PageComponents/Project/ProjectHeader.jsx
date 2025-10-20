export default function ProjectHeader({ project, statusTexts, statusBadgeClass }) {
 return (
  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 xs:gap-4 mb-3 xs:mb-4">
   <div className="flex-1 min-w-0">
    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 break-words">
     {project.title}
    </h3>
    <p className="mb-2 xs:mb-4 text-sm xs:text-base">{project.description}</p>
   </div>

   {/* Status Badge - Desktop Only */}
   <div className="hidden sm:flex flex-col space-y-2 flex-shrink-0">
    <div
     className={`text-white inline-flex items-center px-3 py-1 rounded-full text-[14px] font-medium border ${statusBadgeClass}`}
    >
     {statusTexts[project.status]}
    </div>
   </div>
  </div>
 );
}