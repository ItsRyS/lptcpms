import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">
            Lampang Tech College
          </h1>
          <nav className="space-x-6 text-blue-600">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#staff" className="hover:underline">
              Staff
            </a>
            <a href="#programs" className="hover:underline">
              Programs
            </a>

            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Department of Information Technology
          </h2>
          <p className="text-lg md:text-xl text-blue-700 mb-8">
            Discover your future in IT with us. Empower your skills, lead the
            innovation.
          </p>
          <a
            href="#programs"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Explore Programs
          </a>
        </div>
      </section>

      <section id="about" className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">
            About Our Department
          </h3>
          <p className="text-blue-600 max-w-2xl mx-auto">
            The Department of Information Technology at Lampang Tech College
            provides cutting-edge education with hands-on experience to prepare
            students for real-world challenges in technology-driven industries.
          </p>
        </div>
      </section>
      <section id="staff" className="bg-white py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-blue-700 text-center mb-12">
            ผังบุคลากรแผนกวิชาเทคโนโลยีสารสนเทศ
          </h3>

          <div className="mb-16">
            <h4 className="text-2xl font-bold text-blue-700 mb-8 text-center">
              หัวหน้าแผนก
            </h4>
            <div className="flex justify-center">
              <div className="text-center">
                <img
                  src="https://placehold.co/150"
                  alt="นางสาวชมภูนุช ประสิทธิชาติ"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h5 className="text-xl font-semibold text-blue-700">
                  นางสาวชมภูนุช ประสิทธิชาติ
                </h5>
                <p className="text-blue-600 mt-2">
                  หัวหน้าแผนก แผนกวิชาเทคโนโลยีสารสนเทศ
                  <br />
                  ครูประจำ แผนกวิชาเทคโนโลยีสารสนเทศ
                  <br />
                  ครู ชำนาญการพิเศษ
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h4 className="text-2xl font-bold text-blue-700 mb-8 text-center">
              ครูประจำ
            </h4>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="text-center">
                <img
                  src="https://placehold.co/150"
                  alt="นางสาวสุภาพร วงค์เรียน"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h5 className="text-xl font-semibold text-blue-700">
                  นางสาวสุภาพร วงค์เรียน
                </h5>
                <p className="text-blue-600 mt-2">
                  ครูประจำ แผนกวิชาเทคโนโลยีสารสนเทศ
                  <br />
                  ครู ชำนาญการพิเศษ
                </p>
              </div>

              <div className="text-center">
                <img
                  src="https://placehold.co/150"
                  alt="นางสนธยา ชูบาล"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h5 className="text-xl font-semibold text-blue-700">
                  นางสนธยา ชูบาล
                </h5>
                <p className="text-blue-600 mt-2">
                  ครูประจำ แผนกวิชาเทคโนโลยีสารสนเทศ
                  <br />
                  ครู ชำนาญการพิเศษ
                </p>
              </div>

              <div className="text-center">
                <img
                  src="https://placehold.co/150"
                  alt="ว่าที่ ร.ต.กิติภูมิ สมศรี"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h5 className="text-xl font-semibold text-blue-700">
                  ว่าที่ ร.ต.กิติภูมิ สมศรี
                </h5>
                <p className="text-blue-600 mt-2">
                  ครูประจำ แผนกวิชาเทคโนโลยีสารสนเทศ
                  <br />
                  ครู
                </p>
              </div>

              <div className="text-center">
                <img
                  src="https://placehold.co/150"
                  alt="นายณัฐดนัย จำปี"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h5 className="text-xl font-semibold text-blue-700">
                  นายณัฐดนัย จำปี
                </h5>
                <p className="text-blue-600 mt-2">
                  ครูประจำ แผนกวิชาเทคโนโลยีสารสนเทศ
                  <br />
                  ครูผู้ช่วย
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-blue-700 mb-8 text-center">
              ครูอัตราจ้าง
            </h4>
            <div className="grid md:grid-cols-4 gap-3">
              <div className="text-center">
                <img
                  src="https://placehold.co/150"
                  alt="นายพรศักดิ์ การดี"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h5 className="text-xl font-semibold text-blue-700">
                  นายพรศักดิ์ การดี
                </h5>
                <p className="text-blue-600 mt-2">
                  ครูอัตราจ้าง แผนกวิชาเทคโนโลยีสารสนเทศ
                </p>
              </div>

              <div className="text-center">
                <img
                  src="https://placehold.co/150"
                  alt="นายภาสกร ธรรมลังกา"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h5 className="text-xl font-semibold text-blue-700">
                  นายภาสกร ธรรมลังกา
                </h5>
                <p className="text-blue-600 mt-2">
                  ครูอัตราจ้าง แผนกวิชาเทคโนโลยีสารสนเทศ
                  <br />
                  ครู
                </p>
              </div>

              <div className="text-center">
                <img
                  src="https://placehold.co/150"
                  alt="นายไพศาล จันติ"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h5 className="text-xl font-semibold text-blue-700">
                  นายไพศาล จันติ
                </h5>
                <p className="text-blue-600 mt-2">
                  ครูอัตราจ้าง แผนกวิชาเทคโนโลยีสารสนเทศ
                </p>
              </div>

              <div className="text-center">
                <img
                  src="https://placehold.co/150"
                  alt="นางสาวน้ำเพชร พรหมพนัส"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h5 className="text-xl font-semibold text-blue-700">
                  นางสาวน้ำเพชร พรหมพนัส
                </h5>
                <p className="text-blue-600 mt-2">
                  ครูอัตราจ้าง แผนกวิชาเทคโนโลยีสารสนเทศ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-16 px-6 bg-blue-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-blue-700 text-center mb-12">
            Programs Offered
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Diploma in IT
              </h4>
              <p className="text-blue-600">
                2-year program focused on software development, networking, and
                IT fundamentals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Bachelor's Degree in IT
              </h4>
              <p className="text-blue-600">
                Comprehensive 4-year course covering programming, database
                systems, and cybersecurity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Short Courses
              </h4>
              <p className="text-blue-600">
                Certifications in web development, cloud computing, and AI
                fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">
            Get in Touch
          </h3>
          <p className="text-blue-600 mb-8">
            Interested in our programs? Contact us today and take your first
            step toward a tech career!
          </p>
          <a
            href="mailto:info@lampangtech.ac.th"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition"
          >
            Email Us
          </a>
        </div>
      </section>

      <footer className="bg-blue-800 text-white text-center py-4">
        © 2025 Lampang Tech College - Information Technology Department
      </footer>
    </div>
  );
};

export default LandingPage;
