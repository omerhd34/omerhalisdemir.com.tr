import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../lib/db.js";

export async function GET() {
  let connection;

  try {
    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT * FROM skills ORDER BY 
       CASE WHEN display_order IS NOT NULL THEN display_order ELSE id END, 
       id`
    );

    console.log("Skills API - Fetched rows:", rows.length);

    if (rows.length === 0) {
      console.warn("Skills API - No data found");
      return NextResponse.json({});
    }

    const groupedSkills = rows.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = {
          skills: [],
        };
      }

      acc[skill.category].skills.push({
        name: skill.name,
        icon: skill.icon,
        experience: skill.experience.toString(),
        level: skill.level,
        percentage: skill.percentage,
        color: skill.color,
      });

      return acc;
    }, {});

    console.log("Skills API - Grouped skills:", Object.keys(groupedSkills));
    console.log(
      "Skills API - Sample skill:",
      JSON.stringify(
        groupedSkills[Object.keys(groupedSkills)[0]]?.skills[0],
        null,
        2
      )
    );

    return NextResponse.json(groupedSkills);
  } catch (error) {
    console.error("Skills API - Veritabanı hatası:", error);
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
