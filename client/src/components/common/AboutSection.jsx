import React from "react";
import {
  ServerStackIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

const AboutSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-950/5 border border-blue-950/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-blue-950 font-medium text-sm">Excellence in Technology Education</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 leading-tight">
            About Our
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Department
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              The Department of Information Technology at Lampang Tech College
              provides cutting-edge education with hands-on experience to prepare
              students for real-world challenges in technology-driven industries.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-12">
          {/* Modern Infrastructure */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300">
                    <ServerStackIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-900 transition-colors">
                Modern Infrastructure
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Access to state-of-the-art technology labs and industry-standard
                software environments.
              </p>
              
              
            </div>
          </div>

          {/* Practical Coding */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow duration-300">
                    <CodeBracketIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-900 transition-colors">
                Practical <p>Coding</p>
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Intensive programming courses with real-world project assignments
                and mentorship.
              </p>
              
              
            </div>
          </div>

          {/* Industry Connections */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300">
                    <ArrowPathIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-900 transition-colors">
                Industry Connections
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Strong partnerships with tech companies for internships and job
                placement opportunities.
              </p>
              
              
            </div>
          </div>

          {/* Comprehensive Curriculum */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5 rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-shadow duration-300">
                    <BookOpenIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-900 transition-colors">
                Comprehensive Curriculum
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                Regularly updated courses reflecting current industry trends and
                technological advancements.
              </p>
              
              
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutSection;