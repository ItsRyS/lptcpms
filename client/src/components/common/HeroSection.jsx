import React from "react";
import { AcademicCapIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <section id="hero" className=" bg-gradient-to-r from-blue-950 to-blue-900  text-white py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Department of Information Technology
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Empowering the next generation of tech innovators through
            cutting-edge education, hands-on experience, and industry-focused
            training. Join us to shape the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-medium bg-orange-500 hover:bg-orange-600 transition-all"
            >
              <AcademicCapIcon className="h-5 w-5" />
              Explore Programs
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-lg font-medium bg-orange-500 hover:bg-orange-600 transition-all  "
            >
              <EnvelopeIcon className="h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
