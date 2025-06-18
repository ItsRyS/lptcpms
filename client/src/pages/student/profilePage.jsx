import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { showSuccess, showError } from "@/utils/Alert";
import { UserIcon, EnvelopeIcon, PhoneIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    full_name_th: "",
    full_name_en: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem("userId");
  const userRole = sessionStorage.getItem("role");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token || userRole !== "student") {
      showError("กรุณาเข้าสู่ระบบด้วยบัญชีนักเรียน");
      return; 
    }
    const fetchProfile = async () => {
      try {
        const res = await fetch(`/api/student/profile/${userId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setFormData(data);
      } catch (err) {
        showError(err.message || "โหลดข้อมูลผิดพลาด");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [userId, userRole, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/student/profile/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      showSuccess("บันทึกข้อมูลสำเร็จ");
    } catch (err) {
      showError(err.message || "เกิดข้อผิดพลาด");
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle redirection if not authorized
  if (!token || userRole !== "student") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
        <h2 className="text-3xl font-extrabold text-blue-950 text-center mb-8">
          แก้ไขข้อมูลส่วนตัว
        </h2>

        {loading ? (
          <p className="text-gray-500 text-center">กำลังโหลดข้อมูล...</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="full_name_th" className="block text-sm font-medium text-black mb-1 text-left">
                ชื่อภาษาไทย
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="full_name_th"
                  id="full_name_th"
                  value={formData.full_name_th}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-black"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="full_name_en" className="block text-sm font-medium text-black mb-1 text-left">
                ชื่อภาษาอังกฤษ
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="full_name_en"
                  id="full_name_en"
                  value={formData.full_name_en}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-black"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black mb-1 text-left">
                อีเมล
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-black"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black mb-1 text-left">
                เบอร์โทร
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 text-black"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
            >
              <CheckIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              บันทึกข้อมูล
            </button>
          </form>
        )}
      </div>
    </div>
  );
}