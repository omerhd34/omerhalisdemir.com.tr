import { FaMapMarkerAlt, FaStar, FaClock } from "react-icons/fa";

export default function ExperienceMetaInfo({ item, isMobileExpanded }) {
 return (
  <div
   className={`flex flex-wrap gap-6 text-[15px] mb-4 ${!isMobileExpanded ? "hidden sm:flex" : ""}`}
  >
   {item.location && (
    <div className="flex items-center space-x-2">
     <FaMapMarkerAlt className="w-4 h-4" />
     <span>{item.location}</span>
    </div>
   )}
   {item.gpa && (
    <div className="flex items-center space-x-2">
     <FaStar className="w-4 h-4" />
     <span>GPA: {item.gpa}</span>
    </div>
   )}
   {item.period && (
    <div className="flex items-center space-x-2">
     <FaClock className="w-4 h-4" />
     <span>{item.period}</span>
    </div>
   )}
  </div>
 );
}