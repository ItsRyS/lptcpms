import React from 'react';
import PropTypes from 'prop-types';
import { UserIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline';

const StaffMember = ({ name, role, image, isHead = false }) => {
    return (
        <div className="group relative">
            {/* Background Card Effect */}
            <div className={`absolute inset-0 rounded-3xl transform transition-all duration-500 ${
                isHead 
                    ? 'bg-gradient-to-br from-orange-500/10 to-blue-500/10 rotate-1 group-hover:rotate-2 group-hover:scale-105' 
                    : 'bg-gradient-to-br from-blue-500/5 to-orange-500/5 -rotate-1 group-hover:-rotate-2 group-hover:scale-105'
            }`}></div>
            
            <div className="relative bg-white/90 backdrop-blur-sm border border-gray-100/50 rounded-3xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 text-center">
                {/* Status Badge for Department Head */}
                {isHead && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold rounded-full shadow-lg">
                            <StarIcon className="w-3 h-3" />
                            <span>หัวหน้าแผนก</span>
                        </div>
                    </div>
                )}
                
                {/* Profile Image Container */}
                <div className="relative mb-6 mt-2">
                    <div className={`relative mx-auto rounded-full overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl ${
                        isHead ? 'w-36 h-36 shadow-orange-500/20 group-hover:shadow-orange-500/30' : 'w-32 h-32 shadow-blue-500/20 group-hover:shadow-blue-500/30'
                    }`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                        <img
                            src={image}
                            alt={name}
                            className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Profile Icon Badge */}
                    <div className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        isHead 
                            ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white' 
                            : 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
                    }`}>
                        <UserIcon className="w-4 h-4" />
                    </div>
                </div>
                
                {/* Name */}
                <h5 className={`font-bold mb-4 transition-colors duration-300 group-hover:text-blue-900 ${
                    isHead ? 'text-xl text-blue-950' : 'text-lg text-blue-950'
                }`}>
                    {name}
                </h5>
                
                {/* Roles */}
                <div className="space-y-2">
                    {role.map((r, index) => (
                        <div key={index} className="flex items-center justify-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${
                                index === 0 ? 'bg-orange-500' : 'bg-blue-500'
                            }`}></div>
                            <p className="text-sm text-gray-600 leading-relaxed text-center">
                                {r}
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* Hover Effect Indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="h-0.5 w-12 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

StaffMember.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    isHead: PropTypes.bool,
};

const StaffDirectory = () => {
    const departmentHead = {
        name: "นางสาวชมภูนุช ประสิทธิชาติ",
        role: [
            "หัวหน้าแผนก แผนกวิชาเทคโนโลยีสารสนเทศ",
            "ครูประจำ แผนกวิชาเทคโนโลยีสารสนเทศ",
            "ครู ชำนาญการพิเศษ"
        ],
        image: "https://placehold.co/150"
    };

    const regularTeachers = [
        {
            name: "นางสาวสุภาพร วงค์เรียน",
            role: [
                "ครูประจำ แผนกวิชาเทคโนโลยีสารสนเทศ", 
                "ครู ชำนาญการพิเศษ"
            ],
            image: "https://placehold.co/150"
        },
        {
            name: "นางสนธยา ชูบาล",
            role: [
                "ครูประจำ แผนกวิชาเทคโนโลยีสารสนเทศ", 
                "ครู ชำนาญการพิเศษ"
            ],
            image: "https://placehold.co/150"
        },
        {
            name: "ว่าที่ ร.ต.กิติภูมิ สมศรี",
            role: [
                "ครูประจำ แผนกวิชาเทคโนโลยีสารสนเทศ", 
                "ครู"
            ],
            image: "https://placehold.co/150"
        },
    ];

    const contractTeachers = [
        {
            name: "นายพรศักดิ์ การดี",
            role: ["ครูอัตราจ้าง แผนกวิชาเทคโนโลยีสารสนเทศ"],
            image: "https://placehold.co/150"
        },
        {
            name: "นายภาสกร ธรรมลังกา",
            role: [
                "ครูอัตราจ้าง แผนกวิชาเทคโนโลยีสารสนเทศ", 
                "ครู"
            ],
            image: "https://placehold.co/150"
        },
        {
            name: "นายไพศาล จันติ",
            role: ["ครูอัตราจ้าง แผนกวิชาเทคโนโลยีสารสนเทศ"],
            image: "https://placehold.co/150"
        },
        {
            name: "นางสาวน้ำเพชร พรหมพนัส",
            role: ["ครูอัตราจ้าง แผนกวิชาเทคโนโลยีสารสนเทศ"],
            image: "https://placehold.co/150"
        }
    ];

    return (
        <section id="staff" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-40 left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative container mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/5 border border-blue-950/10 rounded-full mb-6">
                        <AcademicCapIcon className="w-5 h-5 text-blue-950" />
                        <span className="text-blue-950 font-medium text-sm">Our Teaching Excellence</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
                        ผังบุคลากร
                        <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            แผนกวิชาเทคโนโลยีสารสนเทศ
                        </span>
                    </h2>
                    
                    <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
                </div>

                {/* Department Head */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-blue-950 mb-4">หัวหน้าแผนก</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            ผู้นำที่มีวิสัยทัศนและประสบการณ์ในการขับเคลื่อนแผนกสู่ความเป็นเลิศทางวิชาการ
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="max-w-sm">
                            <StaffMember 
                                name={departmentHead.name}
                                role={departmentHead.role}
                                image={departmentHead.image}
                                isHead={true}
                            />
                        </div>
                    </div>
                </div>

                {/* Regular Teachers */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-blue-950 mb-4">ครูประจำ</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            ทีมครูผู้เชี่ยวชาญที่มีประสบการณ์ในการสอนและพัฒนาหลักสูตรให้ทันสมัย
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {regularTeachers.map((teacher, index) => (
                            <StaffMember 
                                key={index}
                                name={teacher.name}
                                role={teacher.role}
                                image={teacher.image}
                            />
                        ))}
                    </div>
                </div>

                {/* Contract Teachers */}
                <div className="mb-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-blue-950 mb-4">ครูอัตราจ้าง</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            ผู้เชี่ยวชาญด้านเทคโนโลยีที่มาเสริมความแข็งแกร่งให้กับการเรียนการสอน
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contractTeachers.map((teacher, index) => (
                            <StaffMember 
                                key={index}
                                name={teacher.name}
                                role={teacher.role}
                                image={teacher.image}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom Statistics */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
                        <div className="text-3xl font-bold text-orange-500 mb-2">1</div>
                        <div className="text-gray-600 font-medium">หัวหน้าแผนก</div>
                    </div>
                    <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
                        <div className="text-3xl font-bold text-blue-500 mb-2">{regularTeachers.length}</div>
                        <div className="text-gray-600 font-medium">ครูประจำ</div>
                    </div>
                    <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{contractTeachers.length}</div>
                        <div className="text-gray-600 font-medium">ครูอัตราจ้าง</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StaffDirectory;