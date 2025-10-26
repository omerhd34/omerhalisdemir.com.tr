import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma.js";

export async function GET(request, context) {
  try {
    const params = await context.params;
    const lang = params.lang;
    const isEnglish = lang.toUpperCase() === "EN";

    const experiences = await prisma.experience.findMany({
      orderBy: [{ displayOrder: "asc" }, { category: "asc" }, { id: "asc" }],
    });

    if (experiences.length === 0) {
      return NextResponse.json({});
    }

    const groupedExperience = experiences.reduce((acc, exp) => {
      if (!acc[exp.category]) {
        acc[exp.category] = {
          items: [],
        };
      }

      // MongoDB'de zaten array olarak saklanıyor, parse etmeye gerek yok
      const technologies = exp.technologies || [];
      const achievements = isEnglish
        ? exp.achievementsEn || []
        : exp.achievementsTr || [];

      acc[exp.category].items.push({
        id: exp.id,
        category: exp.category,
        title: isEnglish ? exp.titleEn : exp.titleTr,
        institution: isEnglish ? exp.institutionEn : exp.institutionTr,
        period: exp.period,
        status: exp.status,
        location: exp.location,
        gpa: exp.gpa,
        description: isEnglish ? exp.descriptionEn : exp.descriptionTr,
        technologies: technologies,
        achievements: achievements,
        icon: exp.icon,
      });

      return acc;
    }, {});

    return NextResponse.json(groupedExperience);
  } catch (error) {
    console.error("Experience API Error:", error);
    return NextResponse.json(
      {
        error: "Veriler yüklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
