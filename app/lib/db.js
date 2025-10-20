import mysql from "mysql2/promise";

let pool = null;

export const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || "translations",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
};

export async function getConnection() {
  try {
    if (!pool) {
      pool = mysql.createPool(dbConfig);
    }
    return await pool.getConnection();
  } catch (error) {
    console.error("Veritabanı bağlantı hatası:", error);
    throw error;
  }
}

export async function closeConnection(connection) {
  if (connection) {
    try {
      await connection.release();
    } catch (error) {
      console.error("Bağlantı kapatma hatası:", error);
      try {
        await connection.destroy();
      } catch (destroyError) {
        console.error("Connection destroy error:", destroyError);
      }
    }
  }
}

if (typeof process !== "undefined") {
  process.on("SIGTERM", async () => {
    if (pool) {
      await pool.end();
    }
  });
}
