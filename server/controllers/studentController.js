import { db } from "../config/db.js";

export const getStudentProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query(
      "SELECT full_name_th, full_name_en, email, phone FROM students WHERE student_id = ?",
      [id]
    );
    if (rows.length === 0)
      return res.status(404).json({ message: "ไม่พบข้อมูลนักเรียน" });
    res.json(rows[0]);
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({ message: "เกิดข้อผิดพลาดฝั่งเซิร์ฟเวอร์" });
  }
};

export const updateStudentProfile = async (req, res) => {
  const { id } = req.params;
  const { full_name_th, full_name_en, email, phone } = req.body;
  try {
    await db.query(
      "UPDATE students SET full_name_th = ?, full_name_en = ?, email = ?, phone = ? WHERE student_id = ?",
      [full_name_th, full_name_en, email, phone, id]
    );
    res.json({ message: "อัปเดตข้อมูลสำเร็จ" });
  } catch (err) {
    console.error("Update profile error:", err);
    res.status(500).json({ message: "อัปเดตข้อมูลล้มเหลว" });
  }
};