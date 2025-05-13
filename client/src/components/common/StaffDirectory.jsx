import React from 'react';
import PropTypes from 'prop-types';

const StaffMember = ({ name, role, image }) => {
    return (
        <div className="text-center">
            <div className="bg-gray-100 w-32 h-32 mx-auto rounded-full mb-4 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <h5 className="text-lg font-semibold text-primary mb-2">{name}</h5>
            <div className="text-text mt-2">
                {role.map((r, index) => (
                    <p key={index} className="text-sm">{r}</p>
                ))}
            </div>
        </div>
    );
};

StaffMember.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
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
        <section id="staff" className="py-16 md:py-24 ">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 ">ผังบุคลากรแผนกวิชาเทคโนโลยีสารสนเทศ</h2>
                    <div className="h-1 w-24 bg-orange-500 mx-auto"></div>
                </div>

                {/* Department Head */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">หัวหน้าแผนก</h3>
                    <div className="flex justify-center">
                        <StaffMember 
                            name={departmentHead.name}
                            role={departmentHead.role}
                            image={departmentHead.image}
                        />
                    </div>
                </div>

                {/* Regular Teachers */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">ครูประจำ</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-8 text-center">ครูอัตราจ้าง</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
            </div>
        </section>
    );
};

export default StaffDirectory;