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

    if (rows.length === 0) {
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

    return NextResponse.json(groupedSkills);
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
