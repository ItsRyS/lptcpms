import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techKeywords = [
    "AI", "Machine Learning", "Web Development", "Mobile Apps", 
    "Cloud Computing", "Data Science", "Blockchain", "IoT",
    "Cybersecurity", "DevOps", "React", "Python", "JavaScript"
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden flex items-center justify-center"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            bottom: `${20 + mousePosition.y * 0.015}%`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse"
          style={{
            left: `${60 + mousePosition.x * 0.01}%`,
            top: `${70 + mousePosition.y * 0.01}%`,
            animationDelay: '2s'
          }}
        ></div>
        
        {/* Floating tech keywords */}
        {techKeywords.map((keyword, index) => (
          <div
            key={keyword}
            className="absolute text-white/10 font-mono text-sm animate-pulse select-none"
            style={{
              left: `${(index * 13 + 5) % 90}%`,
              top: `${(index * 17 + 10) % 80}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index * 0.2}s`
            }}
          >
            {keyword}
          </div>
        ))}
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          
          

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Department of
            </span>
            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mt-2">
              Information Technology
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            เปิดประตูสู่อนาคตของเทคโนโลยี ด้วยการศึกษาที่ล้ำสมัย 
            <span className="block mt-2 text-orange-300 font-medium">
              ประสบการณ์จริง และการฝึกอบรมที่ตรงกับความต้องการของอุตสาหกรรม
            </span>
          </p>

        

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 flex items-center space-x-3"
            >
              <span className="text-2xl group-hover:rotate-12 transition-transform">🎓</span>
              <span>เรียนรู้หลักสูตร</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
            >
              <span className="text-2xl group-hover:rotate-12 transition-transform">📞</span>
              <span>ติดต่อเรา</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          
        </div>
      </div>

     
    </section>
  );
};

export default HeroSection;