import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  HeartIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        {/* Top section with logo and description */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl">
              <AcademicCapIcon className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white">Lampang Tech College</h2>
              <p className="text-orange-500 font-semibold">Information Technology Department</p>
            </div>
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
            Empowering the next generation of tech innovators through cutting-edge education, 
            hands-on experience, and industry-ready skills.
          </p>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Information */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <MapPinIcon className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Visit Us</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/20 p-2 rounded-lg mt-1">
                  <MapPinIcon className="h-4 w-4 text-orange-500" />
                </div>
                <div>
                  <p className="text-blue-100 leading-relaxed">
                    173 Phahonyothin Road<br />
                    Lampang, 52000<br />
                    Thailand
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <CodeBracketIcon className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Us', href: '#about' },
                { name: 'Our Team', href: '#staff' },
                { name: 'Programs', href: '#programs' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-100 hover:text-orange-500 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Methods */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <EnvelopeIcon className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <EnvelopeIcon className="h-4 w-4 text-orange-500" />
                </div>
                <a
                  href="mailto:it-department@lampangtech.ac.th"
                  className="text-blue-100 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  it-department@lampangtech.ac.th
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <PhoneIcon className="h-4 w-4 text-orange-500" />
                </div>
                <a
                  href="tel:+6654210276"
                  className="text-blue-100 hover:text-orange-500 transition-colors duration-300"
                >
                  +66 5421 0276
                </a>
              </div>
            </div>
          </div>

          {/* Social & Programs */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <HeartIcon className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold text-white">Connect</h3>
            </div>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/LPTC.IT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-100 hover:text-orange-500 transition-all duration-300 group"
              >
                <div className="bg-blue-500/20 group-hover:bg-orange-500/20 p-2 rounded-lg transition-colors duration-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-sm">Facebook Page</span>
              </a>
              
              
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-blue-100 text-sm mb-2">
                &copy; {new Date().getFullYear()} Lampang Tech College - Information Technology Department
              </p>
              <p className="text-blue-200 text-sm flex items-center justify-center md:justify-start gap-1">
                Designed with <HeartIcon className="h-4 w-4 text-orange-500" /> by IT Students
              </p>
            </div>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-3 rounded-full shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-110 group"
              aria-label="Back to top"
            >
              <ArrowUpIcon className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;