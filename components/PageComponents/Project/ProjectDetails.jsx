import { FaBookOpen } from "react-icons/fa";

export default function ProjectDetails({ longDescription, buttonTexts }) {
 if (!longDescription) return null;

 return (
  <div>
   <h4 className="font-semibold mb-2 xs:mb-3 flex items-center text-sm xs:text-base">
    <FaBookOpen className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-blue-400" />
    {buttonTexts.projectDetails}
   </h4>
   <p className="text-sm xs:text-base leading-relaxed">{longDescription}</p>
  </div>
 );
}