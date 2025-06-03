import React, { useState } from "react";

const LoginPage = () => {
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          role: userType,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // Store in state instead of sessionStorage for Claude.ai environment
      if (data.isFirstLogin) {
        window.location.href = "/auth/force-change";
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      alert(err.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0">
          
          {/* Left Panel - Hero Section */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl lg:rounded-r-none p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              {/* Logo/Brand */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold">
                    Lampang Tech
                  </h1>
                </div>
                <h2 className="text-5xl font-extrabold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent leading-tight">
                  Welcome to the Future of Learning
                </h2>
                <p className="text-gray-100 text-lg mt-4 opacity-90">
                  เข้าสู่ระบบเพื่อเริ่มต้นการเรียนรู้ที่ไม่มีขีดจำกัด
                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-6">
                {[
                  {
                    icon: "⚡",
                    title: "เริ่มต้นได้ทันที",
                    desc: "ระบบที่ใช้งานง่าย เหมาะสำหรับทุกคน"
                  },
                  {
                    icon: "🚀",
                    title: "เทคโนโลยีล้ำสมัย",
                    desc: "ก้าวทันโลกด้วยการศึกษาสมัยใหม่"
                  },
                  {
                    icon: "🎯",
                    title: "เรียนรู้ได้ทุกที่",
                    desc: "เข้าถึงบทเรียนได้ 24/7 ทุกอุปกรณ์"
                  }
                ].map((feature, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-100 text-sm opacity-80">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl lg:rounded-l-none p-8 lg:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-blue-500"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-950 mb-2">
                  เข้าสู่ระบบ
                </h2>
                <p className="text-gray-500">
                  กรอกข้อมูลเพื่อเข้าใช้งาน
                </p>
              </div>

              {/* User Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  เข้าสู่ระบบในฐานะ:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "student", label: "นักเรียน", icon: "🎓" },
                    { value: "teacher", label: "อาจารย์", icon: "👨‍🏫" }
                  ].map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => setUserType(type.value)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center justify-center space-x-2 font-medium hover:transform hover:scale-[1.02] ${
                        userType === type.value
                          ? 'border-orange-500 bg-orange-500/10 text-orange-600 shadow-lg shadow-orange-500/20'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-orange-300 hover:bg-orange-50'
                      }`}
                    >
                      <span className="text-lg">{type.icon}</span>
                      <span>{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Login Form */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {userType === "student" ? "รหัสนักเรียน" : "อีเมล"}
                    </label>
                    <div className="relative">
                      <input
                        type={userType === "teacher" ? "email" : "text"}
                        placeholder={
                          userType === "student"
                            ? "กรอกรหัสนักเรียน"
                            : "กรอกอีเมล"
                        }
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                        required
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {userType === "student" ? "🆔" : "📧"}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      รหัสผ่าน
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="กรอกรหัสผ่าน"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        required
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        🔒
                      </div>
                    </div>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 text-gray-600 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2" 
                    />
                    <span>จดจำการเข้าสู่ระบบ</span>
                  </label>
                  <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
                  >
                    ลืมรหัสผ่าน?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>กำลังเข้าสู่ระบบ...</span>
                    </>
                  ) : (
                    <>
                      <span>เข้าสู่ระบบ</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </div>

              {/* Back to home */}
              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm mb-4">
                  อยากกลับไปหน้าแรกหรอ?
                </p>
                <button 
                  type="button"
                  onClick={() => window.location.href = "/"}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                >
                  <span>← กลับหน้าแรก</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">🏠</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;