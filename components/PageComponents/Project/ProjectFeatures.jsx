import { FaRocket } from "react-icons/fa";

export default function ProjectFeatures({ featuresList, buttonTexts }) {
 if (featuresList.length === 0) return null;

 return (
  <div>
   <h4 className="font-semibold mb-2 xs:mb-3 flex items-center text-sm xs:text-base">
    <FaRocket className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-orange-400" />
    {buttonTexts.allFeatures}
   </h4>
   <ul className="space-y-1.5 xs:space-y-2">
    {featuresList.map((feature, featureIndex) => (
     <li key={featureIndex} className="flex items-start space-x-2 xs:space-x-3">
      <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-blue-800 mt-1.5 xs:mt-2 flex-shrink-0"></div>
      <span className="text-sm xs:text-base">{feature}</span>
     </li>
    ))}
   </ul>
  </div>
 );
}