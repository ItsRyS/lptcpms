import React from "react";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  CircleStackIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Diploma in Information Technology",
      description:
        "A 2-year program focused on software development, networking, and fundamental IT skills for entry-level positions.",
      icon: <CodeBracketIcon className="h-10 w-10 text-orange-600" />,
      highlights: [
        "Software Development",
        "System Administration",
        "IT Support",
      ],
    },
    {
      title: "Web Development & Design",
      description:
        "Specialized program covering front-end technologies, back-end development and responsive design principles.",
      icon: <GlobeAltIcon className="h-10 w-10 text-orange-600" />,
      highlights: [
        "UI/UX Design",
        "Front-end Development",
        "Back-end Integration",
      ],
    },
    {
      title: "Database Management",
      description:
        "Comprehensive study of database systems, data modeling, SQL and NoSQL databases, and database administration.",
      icon: <CircleStackIcon className="h-10 w-10 text-orange-600" />,
      highlights: ["Data Modeling", "SQL/NoSQL", "Database Administration"],
    },
    {
      title: "Network & Cybersecurity",
      description:
        "In-depth program covering network infrastructure, security protocols, and protection against cyber threats.",
      icon: <ShieldCheckIcon className="h-10 w-10 text-orange-600" />,
      highlights: [
        "Network Configuration",
        "Security Protocols",
        "Threat Analysis",
      ],
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programs Offered
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            Our programs are designed to prepare students for the ever-evolving
            technology industry with hands-on learning and industry-relevant
            skills.
          </p>
          <div className="h-1 w-24 bg-orange-500 text-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all p-6 bg-white"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-500/5 p-3 rounded-lg">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-orange-500 ">
                  {program.title}
                </h3>
              </div>
              <p className="text-gray-500 mb-4 text-left">
                {program.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {program.highlights.map((highlight, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/10 text-blue-500 text-sm rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
