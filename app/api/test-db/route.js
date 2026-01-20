import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
 try {
  await prisma.$connect();

  const counts = {
   languages: await prisma.language.count(),
   translationKeys: await prisma.translationKey.count(),
   translations: await prisma.translation.count(),
   skills: await prisma.skill.count(),
   experiences: await prisma.experience.count(),
   projects: await prisma.project.count(),
  };

  return NextResponse.json({
   success: true,
   message: "Database connection successful!",
   counts: counts,
   timestamp: new Date().toISOString()
  });
 } catch (error) {
  return NextResponse.json({
   success: false,
   error: error.message,
   details: error.stack
  }, { status: 500 });
 } finally {
  await prisma.$disconnect();
 }
}
