import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../../lib/db.js";

export async function GET(request, { params }) {
  let connection;

  try {
    const { lang } = await params;
    const isEnglish = lang.toUpperCase() === "EN";

    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT * FROM projects ORDER BY display_order, id`
    );

    const projects = rows.map((project) => ({
      id: project.id,
      category: project.category,
      title: isEnglish ? project.title_en : project.title_tr,
      description: isEnglish ? project.description_en : project.description_tr,
      longDescription: isEnglish
        ? project.long_description_en
        : project.long_description_tr,
      status: project.status,
      technologies: project.technologies
        ? JSON.parse(project.technologies)
        : [],
      features: project[`features_${isEnglish ? "en" : "tr"}`]
        ? JSON.parse(project[`features_${isEnglish ? "en" : "tr"}`])
        : [],
      liveUrl: project.live_url,
      githubUrl: project.github_url,
      team: isEnglish ? project.team_en : project.team_tr,
      role: isEnglish ? project.role_en : project.role_tr,
      metrics: project.metrics ? JSON.parse(project.metrics) : [],
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Veritabanı hatası:", error);
    return NextResponse.json(
      {
        error: "Veriler yüklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  } finally {
    await closeConnection(connection);
  }
}
