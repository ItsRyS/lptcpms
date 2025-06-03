import React, { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
        
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-950 leading-tight">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to start your tech journey? We're here to guide you every step of the way.
            Connect with our IT department today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-blue-950 mb-8">
                Let's Connect
              </h3>

              <div className="space-y-8">
                <div className="group flex items-start gap-4 hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                    <MapPinIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-950 text-lg mb-2">Visit Us</h4>
                    <p className="text-gray-500 leading-relaxed">
                      Lampang Tech College<br />
                      173 Phahonyothin Rd<br />
                      Lampang, 52000
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <EnvelopeIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-950 text-lg mb-2">Email</h4>
                    <a
                      href="mailto:it-department@lampangtech.ac.th"
                      className="text-gray-500 hover:text-orange-500 transition-colors duration-300 underline-offset-4 hover:underline"
                    >
                      it-department@lampangtech.ac.th
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4 hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                    <PhoneIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-950 text-lg mb-2">Call</h4>
                    <a
                      href="tel:+6654210276"
                      className="text-gray-500 hover:text-orange-500 transition-colors duration-300 underline-offset-4 hover:underline"
                    >
                      +66 5421 0276
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-blue-950 mb-8 relative z-10">
                Send Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <CheckCircleIcon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-950 mb-2">Message Sent!</h4>
                  <p className="text-gray-500">We'll get back to you soon.</p>
                </div>
              ) : (
                <div onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-blue-950 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 outline-none group-hover:border-gray-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-blue-950 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 outline-none group-hover:border-gray-300"
                        placeholder="Your phone"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-950 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 outline-none group-hover:border-gray-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-950 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 outline-none group-hover:border-gray-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-blue-950 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 outline-none resize-none group-hover:border-gray-300"
                      placeholder="Tell us about your interest in our IT programs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <PaperAirplaneIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default ContactForm;