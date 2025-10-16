import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../../lib/db.js";

export async function GET(request, { params }) {
  let connection;

  try {
    const { lang } = await params;
    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT tk.key_path, t.translation_text
       FROM translation t
       JOIN translation_keys tk ON t.key_id = tk.id
       JOIN languages l ON t.language_id = l.id
       WHERE l.code = ?`,
      [lang.toUpperCase()]
    );

    if (!rows || rows.length === 0) {
      console.log(`${lang} dili için çeviri bulunamadı`);
      return NextResponse.json({}, { status: 200 });
    }

    const translations = {};

    rows.forEach((row) => {
      const keys = row.key_path.split(".");
      let current = translations;

      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          current[key] = row.translation_text;
        } else {
          if (typeof current[key] !== "object" || current[key] === null) {
            current[key] = {};
          }
          current = current[key];
        }
      });
    });

    console.log(`${lang} için ${rows.length} çeviri yüklendi`);
    return NextResponse.json(translations);
  } catch (error) {
    console.error("Veritabanı hatası:", error);
    return NextResponse.json(
      {
        error: "Çeviriler yüklenemedi",
        details: error.message,
      },
      { status: 500 }
    );
  } finally {
    await closeConnection(connection);
  }
}
