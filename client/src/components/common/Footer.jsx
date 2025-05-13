const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Lampang Tech College
            </h3>
            <p className="text-white/80 mb-4">
              Department of Information Technology
            </p>
            <p className="text-white/80">
              173 Phahonyothin Road, <br />
              Lampang, 52000, Thailand
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="#hero" className="hover:text-white transition-all-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-all-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#staff"
                  className="hover:text-white transition-all-300"
                >
                  Staff
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:text-white transition-all-300"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-all-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Connect With Us
            </h3>
            <p className="text-white/80 mb-2">
              Email: it-department@lampangtech.ac.th
            </p>
            <p className="text-white/80 mb-4">Phone: +66 5421 0276</p>
      
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/lptit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-orange-500 transition-all-300"
              >
                Facebook: เทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคลำปาง
              </a>
             
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} Lampang Tech College - Information
            Technology Department. All rights reserved.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Designed with passion by IT Students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
