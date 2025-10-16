import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../../lib/db.js";

export async function GET(request, { params }) {
  let connection;

  try {
    const { lang } = await params;
    const isEnglish = lang.toUpperCase() === "EN";

    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT * FROM experience ORDER BY category, display_order, id`
    );

    const groupedExperience = rows.reduce((acc, exp) => {
      if (!acc[exp.category]) {
        acc[exp.category] = {
          items: [],
        };
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
        technologies: exp.technologies ? JSON.parse(exp.technologies) : [],
        achievements: exp[`achievements_${isEnglish ? "en" : "tr"}`]
          ? JSON.parse(exp[`achievements_${isEnglish ? "en" : "tr"}`])
          : [],
        icon: exp.icon,
        color: exp.color,
      });

      return acc;
    }, {});

    return NextResponse.json(groupedExperience);
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
