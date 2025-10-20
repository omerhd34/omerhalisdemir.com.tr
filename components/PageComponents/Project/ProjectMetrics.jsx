import { FaChartLine } from "react-icons/fa";

export default function ProjectMetrics({ metricsList, buttonTexts }) {
 if (metricsList.length === 0) return null;

 return (
  <div className="md:col-span-2 pt-3 xs:pt-4 border-t border-info">
   <h4 className="font-semibold mb-3 xs:mb-4 flex items-center text-sm xs:text-base">
    <FaChartLine className="w-3 xs:w-4 h-3 xs:h-4 mr-2 text-green-400" />
    {buttonTexts.projectMetrics}
   </h4>
   <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4">
    {metricsList.map((metric, metricIndex) => (
     <div
      key={metricIndex}
      className="bg-info rounded-lg p-3 xs:p-4 text-center hover:bg-opacity-80 transition-all duration-300"
     >
      <div className="text-lg xs:text-xl sm:text-2xl font-bold mb-1 text-green-400">
       {metric.value}
      </div>
      <div className="text-xs xs:text-sm text-primary">{metric.label}</div>
     </div>
    ))}
   </div>
  </div>
 );
}