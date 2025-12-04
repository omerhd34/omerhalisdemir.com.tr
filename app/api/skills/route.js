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
   skill.categories.forEach((category) => {
    if (!acc[category]) {
     acc[category] = {
      skills: [],
     };
    }
    acc[category].skills.push({
     name: skill.name,
     icon: skill.icon,
     experience: skill.experience.toString(),
     color: skill.color,
    });
   });

   return acc;
  }, {});

  return NextResponse.json(groupedSkills);
 } catch (error) {
  console.error("Yetenekler API Hatası:", error);
  return NextResponse.json(
   {
    error: "Veriler yüklenemedi",
    details: error.message,
   },
   { status: 500 }
  );
 }
}
