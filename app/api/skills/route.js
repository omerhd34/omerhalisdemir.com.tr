import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: [{ displayOrder: "asc" }, { id: "asc" }],
    });

    if (skills.length === 0) {
      return NextResponse.json({});
    }

    const groupedSkills = skills.reduce((acc, skill) => {
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
    console.error("Skills API Error:", error);
    return NextResponse.json(
      {
        error: "Veriler yüklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
