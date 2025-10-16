import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../../lib/db.js";

export async function GET(request, { params }) {
  let connection;

  try {
    const { lang } = await params;
    const isEnglish = lang.toUpperCase() === "EN";

    console.log("Projects API - Language:", lang);

    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT * FROM projects ORDER BY 
       CASE WHEN display_order IS NOT NULL THEN display_order ELSE id END, 
       id`
    );

    console.log("Projects API - Fetched rows:", rows.length);

    if (rows.length === 0) {
      console.warn("Projects API - No data found");
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
          console.error("Error parsing technologies:", e);
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
          console.error("Error parsing features:", e);
          features = [];
        }
      }

      // Metrics parsing
      let metrics = [];
      if (project.metrics) {
        try {
          metrics =
            typeof project.metrics === "string"
              ? JSON.parse(project.metrics)
              : project.metrics;
        } catch (e) {
          console.error("Error parsing metrics:", e);
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

    console.log("Projects API - Processed projects:", projects.length);
    console.log(
      "Projects API - Sample project:",
      JSON.stringify(projects[0], null, 2)
    );

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Projects API - Veritabanı hatası:", error);
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
