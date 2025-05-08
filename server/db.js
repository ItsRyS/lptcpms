// server/config/db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });


const requiredEnvVars = ["DB_HOST", "DB_USER", "DB_PASS", "DB_NAME", "DB_PORT"];
requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} is missing or undefined.`);
  }
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool
  .getConnection()
  .then((conn) => {
    console.log("Connected to MySQL database successfully.");
    conn.release();
  })
  .catch((err) => {
    console.error("Failed to connect to MySQL database:", err);
    process.exit(1);
  });

export default pool;
