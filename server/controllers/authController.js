import { db } from "../config/db.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import dotenv from "dotenv";
import logger from "../config/logger.js";
dotenv.config();

export const login = async (req, res) => {
  const { username, password, role } = req.body;
  console.log("Login payload:", username, password, role);
  if (!username || !password || !role) {
    logger.warn("Missing required fields in login payload");
    return res
      .status(400)
      .json({ message: "กรุณากรอก username, password และ role" });
  }

  try {
    if (!process.env.JWT_SECRET) {
      logger.error("JWT_SECRET is not defined");
      return res.status(500).json({ message: "Server configuration error" });
    }

    logger.info(`Login attempt: ${username} (${role})`);
    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ? AND role = ?",
      [username, role]
    );
    console.log("Query Result:", rows);
    if (!rows || rows.length === 0) {
      logger.warn(`Login failed: user not found - ${username} (${role})`);
      return res.status(401).json({ message: "User not found" });
    }

    const user = rows[0];
    console.log("Client password:", password);
    console.log("Hashed from DB:", user.password_hash);
    const isValid = await argon2.verify(user.password_hash, password);
    console.log("isValid:", isValid);
    if (!isValid) {
      logger.warn(`Invalid password for user: ${username}`);
      console.warn(`Invalid password for user: ${username}`);
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user.user_id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "8h" }
    );

    res.json({
      token,
      userId: user.user_id,
      role: user.role,
      isFirstLogin: user.is_first_login,
    });
  } catch (err) {
    logger.error(`Login error for ${username}: ${err.message}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const forceChangePassword = async (req, res) => {
  const { userId, newPassword, email, phone } = req.body;
  if (!userId || !newPassword || !email || !phone) {
    logger.warn("Missing required fields in forceChangePassword payload");
    return res.status(400).json({ message: "กรุณากรอกข้อมูลให้ครบถ้วน" });
  }
  if (newPassword.length < 8) {
    return res
      .status(400)
      .json({ message: "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "รูปแบบอีเมลไม่ถูกต้อง" });
  }
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: "เบอร์โทรต้องเป็นตัวเลข 10 หลัก" });
  }

  const conn = await db.pool.getConnection();
  try {
    const password_hash = await argon2.hash(newPassword, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 4,
    });

    await conn.beginTransaction();
    await conn.query(
      "UPDATE users SET password_hash = ?, is_first_login = 0 WHERE user_id = ?",
      [password_hash, userId]
    );

    const [roleResult] = await conn.query(
      "SELECT role FROM users WHERE user_id = ?",
      [userId]
    );

    if (!roleResult[0]) {
      await conn.rollback();
      logger.warn(`User not found for userId: ${userId}`);
      return res.status(404).json({ message: "ไม่พบผู้ใช้" });
    }

    const role = roleResult[0].role;
    if (role === "student") {
      await conn.query(
        "UPDATE students SET email = ?, phone = ? WHERE student_id = ?",
        [email, phone, userId]
      );
    } else if (role === "teacher") {
      await conn.query(
        "UPDATE teachers SET email = ?, phone = ? WHERE teacher_id = ?",
        [email, phone, userId]
      );
    }

    await conn.commit();
    res.json({ message: "ข้อมูลถูกอัปเดตเรียบร้อยแล้ว" });
  } catch (err) {
    await conn.rollback();
    logger.error(`Force change error: ${err.message}`);
    res.status(500).json({ message: "Server error" });
  } finally {
    conn.release();
  }
};
