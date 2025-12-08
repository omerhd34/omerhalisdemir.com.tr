import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request, context) {
 try {
  const params = await context.params;
  const lang = params.lang;
  const isEnglish = lang.toUpperCase() === "EN";

  const projectsData = await prisma.project.findMany({
   orderBy: [{ displayOrder: "asc" }, { id: "asc" }],
  });

  if (projectsData.length === 0) {
   return NextResponse.json([]);
  }

  const projects = projectsData.map((project) => {
   const technologies = project.technologies || [];
   const features = isEnglish
    ? project.featuresEn || []
    : project.featuresTr || [];
   const metrics = isEnglish
    ? project.metricsEn || []
    : project.metricsTr || [];

   return {
    id: project.id,
    category: project.category,
    title: isEnglish ? project.titleEn : project.titleTr,
    description: isEnglish ? project.descriptionEn : project.descriptionTr,
    longDescription: isEnglish
     ? project.longDescriptionEn
     : project.longDescriptionTr,
    status: project.status,
    technologies: technologies,
    features: features,
    liveUrl: project.liveUrl,
    githubUrl: project.githubUrl,
    team: isEnglish ? project.teamEn : project.teamTr,
    role: isEnglish ? project.roleEn : project.roleTr,
    metrics: metrics,
   };
  });

  return NextResponse.json(projects);
 } catch (error) {
  console.error("Projects API Error:", error);
  return NextResponse.json(
   {
    error: "Veriler yüklenemedi",
    details: error.message,
   },
   { status: 500 }
  );
 }
}
