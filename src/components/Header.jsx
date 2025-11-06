import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/location', label: 'Location' },
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-pelican-dark-green text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:3407767663"
                className="flex items-center gap-2 hover:text-pelican-yellow transition-colors"
              >
                <FaPhone className="text-xs" />
                (340) 776-7663
              </a>
              <a
                href="mailto:info@pelicanpostvi.com"
                className="flex items-center gap-2 hover:text-pelican-yellow transition-colors"
              >
                <FaEnvelope className="text-xs" />
                info@pelicanpostvi.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-pelican-sand">Follow Us:</span>
              <a
                href="https://www.facebook.com/profile.php?id=61560219816727"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pelican-coral transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com/thepelicanpost.vi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pelican-coral transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* <img 
                  src="/logo.png" 
                  alt="The Pelican Post" 
                  className="h-12 md:h-16 w-auto"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIzMCIgZmlsbD0iIzJkNWE0YSIvPjx0ZXh0IHg9IjMyIiB5PSI0MCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzZXJpZiI+UFBs L3RleHQ+PC9zdmc+';
                  }}
                /> */}
                <div className="text-6xl mb-4">🦩</div>
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-2xl md:text-3xl font-bold text-pelican-dark-green group-hover:text-pelican-coral transition-colors">
                  The Pelican Post
                </h1>
                <p className="text-xs md:text-sm text-pelican-green">
                  St. John, USVI
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors relative group ${
                    location.pathname === link.path
                      ? 'text-pelican-coral'
                      : 'text-pelican-dark-green hover:text-pelican-coral'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-pelican-coral transform origin-left transition-transform duration-300 ${
                      location.pathname === link.path
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
              <a
                href="https://thepelicanpostvi.as.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-pelican-dark-green hover:text-pelican-coral transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pt-4 pb-6 space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-2 px-4 rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'bg-pelican-coral text-white'
                          : 'text-pelican-dark-green hover:bg-pelican-sand'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a
                    href="https://thepelicanpostvi.as.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center btn-primary mt-4"
                  >
                    Book Appointment
                  </a>

                  {/* Mobile Contact Info */}
                  <div className="pt-4 mt-4 border-t border-pelican-sand space-y-2">
                    <a
                      href="tel:3407767663"
                      className="flex items-center gap-2 text-pelican-dark-green"
                    >
                      <FaPhone className="text-pelican-coral" />
                      (340) 776-7663
                    </a>
                    <a
                      href="mailto:info@pelicanpostvi.com"
                      className="flex items-center gap-2 text-pelican-dark-green"
                    >
                      <FaEnvelope className="text-pelican-coral" />
                      info@pelicanpostvi.com
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;
