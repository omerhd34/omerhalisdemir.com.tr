import { FaUsers, FaBriefcase } from "react-icons/fa";

export default function ProjectTeamRole({ project, buttonTexts }) {
 if (!project.team && !project.role) return null;

 return (
  <div className="md:col-span-2 grid sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 pt-3 xs:pt-4 border-t border-info">
   {project.team && (
    <div>
     <h4 className="font-semibold mb-2 flex items-center text-sm xs:text-base">
      <FaUsers className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-purple-400" />
      {buttonTexts.team}
     </h4>
     <span className="text-sm xs:text-base">{project.team}</span>
    </div>
   )}

   {project.role && (
    <div>
     <h4 className="font-semibold mb-2 flex items-center text-sm xs:text-base">
      <FaBriefcase className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-indigo-400" />
      {buttonTexts.myRole}
     </h4>
     <span className="text-sm xs:text-base">{project.role}</span>
    </div>
   )}
  </div>
 );
}