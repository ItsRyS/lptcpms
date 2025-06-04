import { db } from "../config/db.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
  const { username, password, role } = req.body;
  console.log("🔍 Login payload:", username, password, role);
  try {
    const [rows] = await db.query(
      "SELECT * FROM users WHERE username = ? AND role = ?",
      [username, role]
    );
    console.log("📦 Query Result:", rows);
    if (!rows || rows.length === 0) {
      console.warn(`❌ Login failed: user not found - ${username} (${role})`);
      return res.status(401).json({ message: "User not found" });
    }

    const user = rows[0];
    console.log("🔐 Client password:", password);
    console.log("🔑 Hashed from DB:", user.password_hash);

    const isValid = await argon2.verify(user.password_hash, password);
    console.log("✅ isValid:", isValid);
    if (!isValid) {
      console.warn(`❌ Invalid password for user: ${username}`);
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
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const forceChangePassword = async (req, res) => {
  const { userId, newPassword, email, phone } = req.body;
  try {
    const password_hash = await argon2.hash(newPassword, {
      type: argon2.argon2id,
      memoryCost: 65536,
      timeCost: 3,
      parallelism: 4,
    });

    await db.query(
      "UPDATE users SET password_hash = ?, is_first_login = 0 WHERE user_id = ?",
      [password_hash, userId]
    );

    const [roleResult] = await db.query(
      "SELECT role FROM users WHERE user_id = ?",
      [userId]
    );

    const role = roleResult[0]?.role;

    if (role === "student") {
      await db.query(
        "UPDATE students SET email = ?, phone = ? WHERE student_id = ?",
        [email, phone, userId]
      );
    } else if (role === "teacher") {
      await db.query(
        "UPDATE teachers SET email = ?, phone = ? WHERE teacher_id = ?",
        [email, phone, userId]
      );
    }

    res.json({ message: "ข้อมูลถูกอัปเดตเรียบร้อยแล้ว" });
  } catch (err) {
    console.error("Force change error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
