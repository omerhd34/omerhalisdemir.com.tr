import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../../lib/db.js";

export async function GET(request, { params }) {
  let connection;

  try {
    const { lang } = await params;
    const isEnglish = lang.toUpperCase() === "EN";

    console.log("Experience API - Language:", lang);

    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT * FROM experience ORDER BY 
       CASE WHEN display_order IS NOT NULL THEN display_order ELSE id END, 
       category, id`
    );

    console.log("Experience API - Fetched rows:", rows.length);

    if (rows.length === 0) {
      console.warn("Experience API - No data found");
      return NextResponse.json({});
    }

    const groupedExperience = rows.reduce((acc, exp) => {
      if (!acc[exp.category]) {
        acc[exp.category] = {
          items: [],
        };
      }

      // Technologies parsing - handle both string and JSON
      let technologies = [];
      if (exp.technologies) {
        try {
          technologies =
            typeof exp.technologies === "string"
              ? JSON.parse(exp.technologies)
              : exp.technologies;
        } catch (e) {
          console.error("Error parsing technologies:", e);
          technologies = [];
        }
      }

      // Achievements parsing
      let achievements = [];
      const achievementsField = exp[`achievements_${isEnglish ? "en" : "tr"}`];
      if (achievementsField) {
        try {
          achievements =
            typeof achievementsField === "string"
              ? JSON.parse(achievementsField)
              : achievementsField;
        } catch (e) {
          console.error("Error parsing achievements:", e);
          achievements = [];
        }
      }

      acc[exp.category].items.push({
        id: exp.id,
        title: isEnglish ? exp.title_en : exp.title_tr,
        institution: isEnglish ? exp.institution_en : exp.institution_tr,
        period: exp.period,
        status: exp.status,
        location: exp.location,
        gpa: exp.gpa,
        description: isEnglish ? exp.description_en : exp.description_tr,
        technologies: technologies,
        achievements: achievements,
        icon: exp.icon,
        color: exp.color,
      });

      return acc;
    }, {});

    console.log("Experience API - Categories:", Object.keys(groupedExperience));
    console.log(
      "Experience API - Sample item:",
      JSON.stringify(
        groupedExperience[Object.keys(groupedExperience)[0]]?.items[0],
        null,
        2
      )
    );

    return NextResponse.json(groupedExperience);
  } catch (error) {
    console.error("Experience API - Veritabanı hatası:", error);
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
