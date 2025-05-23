import React, { useState } from "react";

export default function ForceChangePage() {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }

    // เรียก backend เพื่ออัปเดต
    console.log("ส่งข้อมูล:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6 text-center text-blue-600">
          เปลี่ยนรหัสผ่านและกรอกข้อมูลติดต่อ
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            name="newPassword"
            placeholder="รหัสผ่านใหม่"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="ยืนยันรหัสผ่านใหม่"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="อีเมล"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="เบอร์โทร"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            บันทึกข้อมูล
          </button>
        </form>
      </div>
    </div>
  );
}
