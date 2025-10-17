import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../../lib/db.js";

export async function GET(request, context) {
  let connection;

  try {
    const params = await context.params;
    const lang = params.lang;
    const isEnglish = lang.toUpperCase() === "EN";

    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT * FROM projects ORDER BY 
       CASE WHEN display_order IS NOT NULL THEN display_order ELSE id END, 
       id`
    );

    if (rows.length === 0) {
      return NextResponse.json([]);
    }

    const projects = rows.map((project) => {
      // Technologies parsing
      let technologies = [];
      if (project.technologies) {
        try {
          technologies =
            typeof project.technologies === "string"
              ? JSON.parse(project.technologies)
              : project.technologies;
        } catch (e) {
          technologies = [];
        }
      }

      // Features parsing
      let features = [];
      const featuresField = project[`features_${isEnglish ? "en" : "tr"}`];
      if (featuresField) {
        try {
          features =
            typeof featuresField === "string"
              ? JSON.parse(featuresField)
              : featuresField;
        } catch (e) {
          features = [];
        }
      }

      // Metrics parsing - DİLE GÖRE
      let metrics = [];
      const metricsField = project[`metrics_${isEnglish ? "en" : "tr"}`];
      if (metricsField) {
        try {
          metrics =
            typeof metricsField === "string"
              ? JSON.parse(metricsField)
              : metricsField;
        } catch (e) {
          metrics = [];
        }
      }

      return {
        id: project.id,
        category: project.category,
        title: isEnglish ? project.title_en : project.title_tr,
        description: isEnglish
          ? project.description_en
          : project.description_tr,
        longDescription: isEnglish
          ? project.long_description_en
          : project.long_description_tr,
        status: project.status,
        technologies: technologies,
        features: features,
        liveUrl: project.live_url,
        githubUrl: project.github_url,
        team: isEnglish ? project.team_en : project.team_tr,
        role: isEnglish ? project.role_en : project.role_tr,
        metrics: metrics,
      };
    });

    return NextResponse.json(projects);
  } catch (error) {
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
