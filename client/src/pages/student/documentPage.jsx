const getCategoryColor = (category) => {
    const colors = {
      "โครงงาน": "bg-blue-100 text-blue-800",
      "บทที่ 1": "bg-green-100 text-green-800",
      "ฟอร์ม": "bg-purple-100 text-purple-800",
      "บรรณานุกรม": "bg-orange-100 text-orange-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };import React, { useState } from "react";
import {
  DocumentTextIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

const sampleDocuments = [
  {
    id: 1,
    title: "รูปแบบหน้าปกโครงงาน",
    category: "โครงงาน",
    fileType: "pdf",
    fileUrl: "/sample/cs101-cover.pdf",
    fileSize: "2.3 MB",
    uploadDate: "2024-01-15",
    description: "เทมเพลตสำหรับการจัดทำหน้าปกโครงงานตามมาตรฐานของคณะ"
  },
  {
    id: 2,
    title: "แนวทางเขียนบทที่ 1",
    category: "บทที่ 1",
    fileType: "docx",
    fileUrl: "/sample/cs201-ch1-guide.docx",
    fileSize: "1.8 MB",
    uploadDate: "2024-01-20",
    description: "คู่มือการเขียนบทที่ 1 ของโครงงาน รวมถึงรูปแบบและตัวอย่าง"
  },
  {
    id: 3,
    title: "แบบฟอร์มขออนุมัติโครงงาน",
    category: "ฟอร์ม",
    fileType: "pdf",
    fileUrl: "/sample/cs301-request-form.pdf",
    fileSize: "856 KB",
    uploadDate: "2024-01-25",
    description: "แบบฟอร์มสำหรับการขออนุมัติหัวข้อโครงงานและที่ปรึกษา"
  },
  {
    id: 4,
    title: "ตัวอย่างการเขียนบรรณานุกรม",
    category: "บรรณานุกรม",
    fileType: "pdf",
    fileUrl: "/sample/cs102-bibliography.pdf",
    fileSize: "1.2 MB",
    uploadDate: "2024-02-01",
    description: "ตัวอย่างการเขียนบรรณานุกรมตามรูปแบบ APA และ IEEE"
  },
  {
    id: 5,
    title: "แบบประเมินโครงงาน",
    category: "ฟอร์ม",
    fileType: "xlsx",
    fileUrl: "/sample/project-evaluation.xlsx",
    fileSize: "245 KB",
    uploadDate: "2024-02-05",
    description: "แบบประเมินสำหรับการให้คะแนนโครงงานของนักศึกษา"
  },
  {
    id: 6,
    title: "เทมเพลตการนำเสนอ",
    category: "โครงงาน",
    fileType: "pptx",
    fileUrl: "/sample/presentation-template.pptx",
    fileSize: "3.2 MB",
    uploadDate: "2024-02-10",
    description: "เทมเพลต PowerPoint สำหรับการนำเสนอโครงงาน"
  },
];

const categories = ["ทั้งหมด", "โครงงาน", "บทที่ 1", "ฟอร์ม", "บรรณานุกรม"];

export default function DocumentPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");

  const filteredDocs = sampleDocuments.filter((doc) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch = 
      doc.title.toLowerCase().includes(term) ||
      doc.category.toLowerCase().includes(term) ||
      doc.fileType.toLowerCase().includes(term);
    
    const matchesCategory = 
      selectedCategory === "ทั้งหมด" || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handlePreview = (url) => {
    window.open(url, "_blank");
  };

  const handleDownload = (url, title) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = title;
    link.click();
  };

  const getFileTypeColor = (fileType) => {
    const colors = {
      "pdf": "bg-red-100 text-red-800",
      "docx": "bg-blue-100 text-blue-800", 
      "xlsx": "bg-green-100 text-green-800",
      "pptx": "bg-orange-100 text-orange-800",
    };
    return colors[fileType.toLowerCase()] || "bg-gray-100 text-gray-800";
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-6">
      

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="ค้นหาเอกสาร ชื่อเอกสาร หรือประเภทไฟล์..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <FunnelIcon className="h-5 w-5 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white min-w-[150px]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Documents Display */}
        {filteredDocs.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
            <DocumentTextIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              ไม่พบเอกสารที่ค้นหา
            </h3>
            <p className="text-gray-500">
              ลองเปลี่ยนคำค้นหาหรือหมวดหมู่เอกสาร
            </p>
          </div>
        ) : (
          // List View
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold text-gray-700">เอกสาร</th>
                    <th className="py-4 px-6 text-left font-semibold text-gray-700">ประเภท</th>
                    <th className="py-4 px-6 text-left font-semibold text-gray-700">ไฟล์</th>
                    <th className="py-4 px-6 text-left font-semibold text-gray-700">ขนาดไฟล์</th>
                    <th className="py-4 px-6 text-center font-semibold text-gray-700">ตัวเลือก</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredDocs.map((doc) => (
                    <tr
                      key={doc.id}
                      className="hover:bg-blue-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <DocumentTextIcon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{doc.title}</div>
                            <div className="text-sm text-gray-500 line-clamp-1">{doc.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(doc.category)}`}>
                          {doc.category}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getFileTypeColor(doc.fileType)}`}>
                          {doc.fileType.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-600">
                        {doc.fileSize}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handlePreview(doc.fileUrl)}
                            className="flex items-center gap-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm hover:shadow"
                          >
                            <EyeIcon className="h-4 w-4" />
                            ดูตัวอย่าง
                          </button>
                          <button
                            onClick={() => handleDownload(doc.fileUrl, doc.title)}
                            className="flex items-center gap-1 px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm hover:shadow"
                          >
                            <ArrowDownTrayIcon className="h-4 w-4" />
                            ดาวน์โหลด
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
}