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
      `SELECT * FROM experience ORDER BY 
       CASE WHEN display_order IS NOT NULL THEN display_order ELSE id END, 
       category, id`
    );

    if (rows.length === 0) {
      return NextResponse.json({});
    }

    const groupedExperience = rows.reduce((acc, exp) => {
      if (!acc[exp.category]) {
        acc[exp.category] = {
          items: [],
        };
      }

      let technologies = [];
      if (exp.technologies) {
        try {
          technologies =
            typeof exp.technologies === "string"
              ? JSON.parse(exp.technologies)
              : exp.technologies;
        } catch (e) {
          console.error(
            `[ERROR] Technologies parse failed for ID ${exp.id}:`,
            e.message
          );
          technologies = [];
        }
      }

      let technologyColors = [];
      if (exp.technology_colors) {
        try {
          technologyColors =
            typeof exp.technology_colors === "string"
              ? JSON.parse(exp.technology_colors)
              : exp.technology_colors;

          if (technologyColors && technologyColors.length > 0) {
            console.log(
              `[SUCCESS] ID ${exp.id} (${exp.title_en}): ${technologyColors.length} colors loaded`
            );
          } else {
            console.warn(
              `[WARNING] ID ${exp.id} (${exp.title_en}): technology_colors is empty`
            );
          }
        } catch (e) {
          console.error(
            `[ERROR] Technology colors parse failed for ID ${exp.id}:`,
            e.message
          );
          technologyColors = [];
        }
      } else {
        console.warn(
          `[WARNING] ID ${exp.id} (${exp.title_en}): technology_colors column is NULL`
        );
      }

      let achievements = [];
      const achievementsField = exp[`achievements_${isEnglish ? "en" : "tr"}`];
      if (achievementsField) {
        try {
          achievements =
            typeof achievementsField === "string"
              ? JSON.parse(achievementsField)
              : achievementsField;
        } catch (e) {
          console.error(
            `[ERROR] Achievements parse failed for ID ${exp.id}:`,
            e.message
          );
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
        technologyColors: technologyColors,
        achievements: achievements,
        icon: exp.icon,
        color: exp.color,
      });

      return acc;
    }, {});

    return NextResponse.json(groupedExperience);
  } catch (error) {
    console.error("[FATAL ERROR] Experience API Error:", error);
    return NextResponse.json(
      {
        error: "Veriler yüklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await closeConnection(connection);
    }
  }
}
