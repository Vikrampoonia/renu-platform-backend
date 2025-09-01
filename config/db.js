// config/db.js
import mysql from "mysql2/promise";
import parseDbUrl from "parse-database-url";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DATABASE_URL;
const config = parseDbUrl(dbUrl);

const pool = mysql.createPool({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test connection
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("✅ MySQL connected successfully!");
    conn.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
  }
})();

export default pool;
