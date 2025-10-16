import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../../lib/db.js";

export async function GET() {
  let connection;

  try {
    connection = await getConnection();

    const [contactRows] = await connection.execute(
      `SELECT * FROM contact_info ORDER BY display_order`
    );

    const [socialRows] = await connection.execute(
      `SELECT * FROM social_links ORDER BY display_order`
    );

    return NextResponse.json({
      contactInfo: contactRows,
      socialLinks: socialRows,
    });
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
