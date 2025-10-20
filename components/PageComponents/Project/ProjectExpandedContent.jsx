import ProjectDetails from "./ProjectDetails";
import ProjectFeatures from "./ProjectFeatures";
import ProjectTeamRole from "./ProjectTeamRole";
import ProjectMetrics from "./ProjectMetrics";

export default function ProjectExpandedContent({
 project,
 featuresList,
 metricsList,
 buttonTexts,
}) {
 return (
  <div className="px-4 xs:px-5 sm:px-6 lg:px-8 pb-4 xs:pb-5 sm:pb-6 lg:pb-8 border-t border-info">
   <div className="pt-4 xs:pt-5 sm:pt-6 grid md:grid-cols-2 gap-6 xs:gap-7 sm:gap-8">
    <ProjectDetails
     longDescription={project.longDescription}
     buttonTexts={buttonTexts}
    />

    <ProjectFeatures featuresList={featuresList} buttonTexts={buttonTexts} />

    <ProjectTeamRole project={project} buttonTexts={buttonTexts} />

    <ProjectMetrics metricsList={metricsList} buttonTexts={buttonTexts} />
   </div>
  </div>
 );
}