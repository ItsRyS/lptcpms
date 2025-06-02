import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Get in Touch</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            Interested in our programs? Have questions about the IT department?
            Contact us today and take your first step toward a tech career!
          </p>
          <div className="h-1 w-24 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-6 text-center">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-500/5 p-2 rounded">
                    <MapPinIcon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-left">Address</h4>
                    <p className="text-gray-500 text-left">
                      Lampang Tech College, 173 Phahonyothin Rd, Lampang, 52000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-500/5 p-2 rounded">
                    <EnvelopeIcon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-left">
                      Email
                    </h4>
                    <a
                      href="mailto:it-department@lampangtech.ac.th"
                      className="text-gray-500 hover:text-orange-500 text-left"
                    >
                      it-department@lampangtech.ac.th
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-500/5 p-2 rounded">
                    <PhoneIcon className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-left">
                      Phone
                    </h4>
                    <a
                      href="tel:+6654210276"
                      className="text-gray-500 hover:text-orange-500 text-left"
                    >
                      +66 5421 0276
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;