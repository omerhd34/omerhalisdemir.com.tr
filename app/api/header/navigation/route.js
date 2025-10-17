import { NextResponse } from "next/server";
import { getConnection, closeConnection } from "../../../lib/db.js";

export async function GET() {
  let connection;

  try {
    connection = await getConnection();

    const [rows] = await connection.execute(
      `SELECT * FROM header_navigation ORDER BY display_order`
    );

    return NextResponse.json(rows);
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
