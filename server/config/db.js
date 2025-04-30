
import mysql from "mysql2/promise";
import dotenv from "dotenv";


dotenv.config({ path: "../.env" });


const requiredEnvVars = [
  "DB_HOST",
  "DB_PORT",
  "DB_USERNAME",
  "DB_PASSWORD",
  "DB_DATABASE",
];
requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Environment variable ${key} is missing or undefined.`);
  }
});


async function connectToDatabase() {
  try {
    
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      ssl: {
        rejectUnauthorized: true, // Enforce secure connection
      },
    });

    console.log("Connected to the database.");
    return connection;
  } catch (error) {
    console.error("An error occurred while connecting to the database:", error);
    throw error;
  }
}

const connection = connectToDatabase();
export default connection;
