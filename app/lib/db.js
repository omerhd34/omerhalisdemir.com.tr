import mysql from "mysql2/promise";

export const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "translations",
};

export async function getConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    return connection;
  } catch (error) {
    console.error("Veritabanı bağlantı hatası:", error);
    throw error;
  }
}

export async function closeConnection(connection) {
  if (connection) {
    try {
      await connection.end();
    } catch (error) {
      console.error("Bağlantı kapatma hatası:", error);
    }
  }
}
