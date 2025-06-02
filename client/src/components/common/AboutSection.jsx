import React from "react";
import {
  ServerStackIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            About Our Department
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            The Department of Information Technology at Lampang Tech College
            provides cutting-edge education with hands-on experience to prepare
            students for real-world challenges in technology-driven industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Modern Infrastructure */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="flex justify-center">
              <div className="bg-blue-900/10 p-4 rounded-full mb-4">
                <ServerStackIcon className="h-8 w-8 text-blue-950" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-orange-500 mb-3 text-center">
              Modern Infrastructure
            </h3>
            <p className="text-gray-500 text-center">
              Access to state-of-the-art technology labs and industry-standard
              software environments.
            </p>
          </div>

          {/* Practical Coding */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="flex justify-center">
              <div className="bg-blue-900/10 p-4 rounded-full mb-4">
                <CodeBracketIcon className="h-8 w-8 text-blue-950" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-orange-500 mb-3 text-center">
              Practical Coding
            </h3>
            <p className="text-gray-500 text-center">
              Intensive programming courses with real-world project assignments
              and mentorship.
            </p>
          </div>

          {/* Industry Connections */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="flex justify-center">
              <div className="bg-blue-900/10 p-4 rounded-full mb-4">
                <ArrowPathIcon className="h-8 w-8 text-blue-950" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-orange-500 mb-3 text-center">
              Industry Connections
            </h3>
            <p className="text-gray-500 text-center">
              Strong partnerships with tech companies for internships and job
              placement opportunities.
            </p>
          </div>

          {/* Comprehensive Curriculum */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100">
            <div className="flex justify-center">
              <div className="bg-blue-900/10 p-4 rounded-full mb-4">
                <BookOpenIcon className="h-8 w-8 text-blue-950" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-orange-500 mb-3 text-center">
              Comprehensive Curriculum
            </h3>
            <p className="text-gray-500 text-center">
              Regularly updated courses reflecting current industry trends and
              technological advancements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;