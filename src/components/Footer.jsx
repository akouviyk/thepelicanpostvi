import { Link } from 'react-router-dom';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaClock,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pelican-dark-green text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pelican-yellow">
              The Pelican Post
            </h3>
            <p className="text-pelican-sand text-sm mb-4">
              Your lifeline for life on St. John. Modern mail, shipping, and
              business services built by locals, for locals.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61560219816727"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pelican-green hover:bg-pelican-coral transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/thepelicanpost.vi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pelican-green hover:bg-pelican-coral transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pelican-yellow">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-pelican-sand hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mailboxes"
                  className="text-pelican-sand hover:text-white transition-colors"
                >
                  Mailbox Rental
                </Link>
              </li>
              <li>
                <Link
                  to="/services/package-receiving"
                  className="text-pelican-sand hover:text-white transition-colors"
                >
                  Package Receiving
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-pelican-sand hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-pelican-sand hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href="https://thepelicanpostvi.as.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pelican-coral hover:text-white transition-colors font-medium"
                >
                  Book Notary Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pelican-yellow">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pelican-coral mt-1 flex-shrink-0" />
                <span className="text-pelican-sand">
                  13-1B Enighed Suites
                  <br />
                  Cruz Bay, St. John
                  <br />
                  USVI 00830
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-pelican-coral flex-shrink-0" />
                <a
                  href="tel:3407767663"
                  className="text-pelican-sand hover:text-white transition-colors"
                >
                  (340) 776-7663
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-pelican-coral flex-shrink-0" />
                <a
                  href="mailto:info@pelicanpostvi.com"
                  className="text-pelican-sand hover:text-white transition-colors"
                >
                  info@pelicanpostvi.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-pelican-yellow">
              Hours
            </h3>
            <div className="flex items-start gap-3 text-sm">
              <FaClock className="text-pelican-coral mt-1 flex-shrink-0" />
              <div className="text-pelican-sand">
                <p className="mb-2">Monday - Saturday</p>
                <p className="font-medium text-white mb-3">9:00 AM - 5:00 PM</p>
                <p className="mb-1">Sunday</p>
                <p className="font-medium text-white">Closed</p>
                <Link
                  to="/location"
                  className="inline-block mt-3 text-pelican-coral hover:text-white transition-colors"
                >
                  View Full Schedule →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pelican-green mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-pelican-sand">
            <p>© {currentYear} The Pelican Post. All rights reserved.</p>
            <p>Proudly serving St. John, USVI 🇻🇮</p>
            <div className="flex gap-4">
              <Link to="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
