import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../lib/db.js";

export async function GET() {
  let connection;

  try {
    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT * FROM skills ORDER BY category, display_order, id`
    );

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
