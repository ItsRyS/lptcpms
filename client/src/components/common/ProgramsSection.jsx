import React from "react";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Diploma in Information Technology",
      description:
        "A 2-year program focused on software development, networking, and fundamental IT skills for entry-level positions.",
      icon: <CodeBracketIcon className="h-8 w-8 text-white" />,
      highlights: [
        "Software Development",
        "System Administration", 
        "IT Support",
      ],

      color: "from-blue-500 to-blue-600",
      shadowColor: "shadow-blue-500/25",
      hoverShadow: "group-hover:shadow-blue-500/40",
    },
    {
      title: "Web Development & Design",
      description:
        "Specialized program covering front-end technologies, back-end development and responsive design principles.",
      icon: <GlobeAltIcon className="h-8 w-8 text-white" />,
      highlights: [
        "UI/UX Design",
        "Front-end Development",
        "Back-end Integration",
      ],

      color: "from-orange-500 to-orange-600",
      shadowColor: "shadow-orange-500/25",
      hoverShadow: "group-hover:shadow-orange-500/40",
    },
    {
      title: "Database Management",
      description:
        "Comprehensive study of database systems, data modeling, SQL and NoSQL databases, and database administration.",
      icon: <CircleStackIcon className="h-8 w-8 text-white" />,
      highlights: ["Data Modeling", "SQL/NoSQL", "Database Administration"],

      color: "from-blue-600 to-blue-700",
      shadowColor: "shadow-blue-600/25",
      hoverShadow: "group-hover:shadow-blue-600/40",
    },
    {
      title: "Network & Cybersecurity",
      description:
        "In-depth program covering network infrastructure, security protocols, and protection against cyber threats.",
      icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
      highlights: [
        "Network Configuration",
        "Security Protocols",
        "Threat Analysis",
      ],

      color: "from-orange-600 to-red-500",
      shadowColor: "shadow-orange-600/25",
      hoverShadow: "group-hover:shadow-orange-600/40",
    },
  ];

  return (
    <section id="programs" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/5 border border-blue-950/10 rounded-full mb-6">
            <AcademicCapIcon className="w-5 h-5 text-blue-950" />
            <span className="text-blue-950 font-medium text-sm">Academic Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
            Programs
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Offered
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Our programs are designed to prepare students for the ever-evolving
            technology industry with hands-on learning and industry-relevant skills.
          </p>
          
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${
                index % 2 === 0 ? 'from-blue-500/5 to-orange-500/5 rotate-1' : 'from-orange-500/5 to-blue-500/5 -rotate-1'
              } rounded-3xl transform group-hover:rotate-2 group-hover:scale-105 transition-all duration-500`}></div>
              
              <div className={`relative bg-white/90 backdrop-blur-sm border border-gray-100/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${program.shadowColor} ${program.hoverShadow}`}>
                
             

                {/* Title */}
                <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <UserGroupIcon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-950">Key Focus Areas</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${
                          idx === 0 ? 'bg-orange-500' : idx === 1 ? 'bg-blue-500' : 'bg-blue-600'
                        }`}></div>
                        <span className="text-gray-700 text-sm font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                

                {/* Hover Effect Indicator */}
                <div className="absolute bottom-4 left-8 right-8 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>


      
      </div>
    </section>
  );
};

export default ProgramsSection;