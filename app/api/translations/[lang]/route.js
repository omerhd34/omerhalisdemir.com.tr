import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function GET(request, context) {
 try {
  const params = await context.params;
  const lang = params.lang;
  const languageCode = lang.toUpperCase();

  const language = await prisma.language.findUnique({
   where: { code: languageCode },
  });

  if (!language) {
   return NextResponse.json({}, { status: 200 });
  }

  const translationsData = await prisma.translation.findMany({
   where: {
    languageId: language.id,
   },
   include: {
    key: true,
   },
  });

  if (!translationsData || translationsData.length === 0) {
   return NextResponse.json({}, { status: 200 });
  }

  const translations = {};

  translationsData.forEach((translation) => {
   const keys = translation.key.keyPath.split(".");
   let current = translations;

   keys.forEach((key, index) => {
    if (index === keys.length - 1) {
     current[key] = translation.translationText;
    } else {
     if (typeof current[key] !== "object" || current[key] === null) {
      current[key] = {};
     }
     current = current[key];
    }
   });
  });

  return NextResponse.json(translations);
 } catch (error) {
  console.error("Translation API Error:", error);
  return NextResponse.json(
   {
    error: "Çeviriler yüklenemedi",
    details: error.message,
   },
   { status: 500 }
  );
 }
}
