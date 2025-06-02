import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon, LockClosedIcon, ShieldCheckIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function ForceChangePage() {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  
  const [showPassword, setShowPassword] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
  };

  const passwordValidation = validatePassword(formData.newPassword);
  const isPasswordValid = Object.values(passwordValidation).every(Boolean);
  const passwordsMatch = formData.newPassword === formData.confirmPassword && formData.confirmPassword !== "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }

    if (!isPasswordValid) {
      alert("รหัสผ่านไม่ตรงตามเงื่อนไข");
      return;
    }

    setIsLoading(true);

    try {
      // Note: In actual implementation, use React state instead of sessionStorage
      // This is just for demonstration purposes
      const userId = sessionStorage.getItem("userId");
      const token = sessionStorage.getItem("token");

      const res = await fetch("/api/auth/force-change", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          userId,
          newPassword: formData.newPassword,
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      alert("เปลี่ยนรหัสผ่านเรียบร้อย");

      window.location.href = "/";
    } catch (err) {
      alert(err.message || "เกิดข้อผิดพลาด");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 px-8 py-6 text-center">
          <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheckIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            เปลี่ยนรหัสผ่าน
          </h2>
          <p className="text-blue-100 text-sm">
            กรุณาตั้งรหัสผ่านใหม่เพื่อความปลอดภัย
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="space-y-6">
            {/* New Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <LockClosedIcon className="w-4 h-4" />
                รหัสผ่านใหม่
              </label>
              <div className="relative">
                <input
                  type={showPassword.newPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  placeholder="กรอกรหัสผ่านใหม่"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('newPassword')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword.newPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Requirements */}
              {formData.newPassword && (
                <div className="mt-3 space-y-2">
                  <p className="text-xs font-medium text-gray-600 mb-2">ข้อกำหนดรหัสผ่าน:</p>
                  {[
                    { key: 'length', text: 'อย่างน้อย 8 ตัวอักษร' },
                    { key: 'uppercase', text: 'ตัวพิมพ์ใหญ่' },
                    { key: 'lowercase', text: 'ตัวพิมพ์เล็ก' },
                    { key: 'number', text: 'ตัวเลข' },
                    { key: 'special', text: 'อักขระพิเศษ' }
                  ].map(({ key, text }) => (
                    <div key={key} className="flex items-center gap-2 text-xs">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                        passwordValidation[key] ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {passwordValidation[key] && <CheckIcon className="w-3 h-3" />}
                      </div>
                      <span className={passwordValidation[key] ? 'text-green-600' : 'text-gray-500'}>
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <LockClosedIcon className="w-4 h-4" />
                ยืนยันรหัสผ่านใหม่
              </label>
              <div className="relative">
                <input
                  type={showPassword.confirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="กรอกรหัสผ่านใหม่อีกครั้ง"
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 pr-12 ${
                    formData.confirmPassword
                      ? passwordsMatch
                        ? 'border-green-200 focus:ring-green-500 bg-green-50/30'
                        : 'border-red-200 focus:ring-red-500 bg-red-50/30'
                      : 'border-gray-200 focus:ring-orange-500'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword.confirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>
              
              {formData.confirmPassword && (
                <div className="flex items-center gap-2 mt-2">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    passwordsMatch ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {passwordsMatch && <CheckIcon className="w-3 h-3" />}
                  </div>
                  <span className={`text-xs ${passwordsMatch ? 'text-green-600' : 'text-red-600'}`}>
                    {passwordsMatch ? 'รหัสผ่านตรงกัน' : 'รหัสผ่านไม่ตรงกัน'}
                  </span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isPasswordValid || !passwordsMatch || isLoading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                isPasswordValid && passwordsMatch && !isLoading
                  ? 'bg-orange-500 hover:bg-orange-600 hover:shadow-lg transform hover:-translate-y-0.5'
                  : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  กำลังบันทึก...
                </div>
              ) : (
                'บันทึกรหัสผ่านใหม่'
              )}
            </button>
          </div>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-start gap-3">
              <ShieldCheckIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-blue-900 mb-1">
                  ข้อแนะนำด้านความปลอดภัย
                </h4>
                <p className="text-xs text-blue-700 leading-relaxed">
                  ใช้รหัสผ่านที่แข็งแกร่งและไม่เคยใช้ที่อื่นมาก่อน 
                  หลีกเลี่ยงการใช้ข้อมูลส่วนตัวเป็นรหัสผ่าน
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}