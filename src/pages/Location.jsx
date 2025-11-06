import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaDirections,
  FaParking,
  FaShip,
  FaInfoCircle
} from 'react-icons/fa';

const Location = () => {
  const hours = [
    { day: "Monday", time: "9:00 AM - 5:00 PM", open: true },
    { day: "Tuesday", time: "9:00 AM - 5:00 PM", open: true },
    { day: "Wednesday", time: "9:00 AM - 5:00 PM", open: true },
    { day: "Thursday", time: "9:00 AM - 5:00 PM", open: true },
    { day: "Friday", time: "9:00 AM - 5:00 PM", open: true },
    { day: "Saturday", time: "9:00 AM - 5:00 PM", open: true },
    { day: "Sunday", time: "Closed", open: false }
  ];

  const directions = [
    {
      icon: <FaShip className="text-3xl" />,
      title: "From Car Ferry Dock",
      description: "Head east on Centerline Road for about 0.3 miles. Turn right into the Enighed Complex. We're in building 13-1B."
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Landmark",
      description: "Located in the Enighed Complex near the heart of Cruz Bay. Look for our pelican sign!"
    },
    {
      icon: <FaParking className="text-3xl" />,
      title: "Parking",
      description: "Free parking available in the Enighed Complex lot. Easy access for quick pickups."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Location & Hours - Visit Us in Cruz Bay | The Pelican Post</title>
        <meta name="description" content="The Pelican Post is located at 13-1B Enighed Suites in Cruz Bay, St. John. Open Monday-Saturday 9AM-5PM. Find directions, parking info, and contact details." />
        <meta name="keywords" content="The Pelican Post location, Cruz Bay mail service, Enighed Complex St. John, business hours Cruz Bay, directions St. John USVI" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pelican-dark-green to-pelican-green text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Visit Us in Cruz Bay
            </h1>
            <p className="text-xl text-pelican-sand">
              Conveniently located in the Enighed Complex, we're easy to find and 
              easy to access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map & Contact Info */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-0 overflow-hidden"
            >
              <div className="aspect-video w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.8!2d-64.7961!3d18.3321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDE5JzU1LjYiTiA2NMKwNDcnNDYuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Pelican Post Location Map"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-br from-pelican-coral to-pelican-yellow text-white">
                <a
                  href="https://www.google.com/maps/dir//18.332111,-64.796111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-bold hover:underline"
                >
                  <FaDirections className="text-xl" />
                  Get Directions in Google Maps
                </a>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="card">
                <FaMapMarkerAlt className="text-4xl text-pelican-coral mb-4" />
                <h2 className="text-2xl font-bold text-pelican-dark-green mb-4">
                  Our Address
                </h2>
                <div className="text-lg text-pelican-dark-green space-y-2">
                  <p className="font-bold">The Pelican Post</p>
                  <p>13-1B Enighed Suites</p>
                  <p>Enighed Complex</p>
                  <p>Cruz Bay, St. John</p>
                  <p>U.S. Virgin Islands 00830</p>
                </div>
              </div>

              <div className="card">
                <FaPhone className="text-4xl text-pelican-coral mb-4" />
                <h2 className="text-2xl font-bold text-pelican-dark-green mb-4">
                  Phone
                </h2>
                <a 
                  href="tel:3407767663"
                  className="text-2xl font-bold text-pelican-coral hover:text-pelican-dark-green transition-colors"
                >
                  (340) 776-7663
                </a>
              </div>

              <div className="card">
                <FaEnvelope className="text-4xl text-pelican-coral mb-4" />
                <h2 className="text-2xl font-bold text-pelican-dark-green mb-4">
                  Email
                </h2>
                <a 
                  href="mailto:info@pelicanpostvi.com"
                  className="text-xl text-pelican-coral hover:text-pelican-dark-green transition-colors"
                >
                  info@pelicanpostvi.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaClock className="text-5xl text-pelican-coral mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Hours of Operation
            </h2>
            <p className="text-lg text-pelican-green">
              We're here when you need us, six days a week
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card max-w-2xl mx-auto"
          >
            <div className="space-y-3">
              {hours.map((item, index) => (
                <div 
                  key={index}
                  className={`flex justify-between items-center p-4 rounded-lg ${
                    item.open 
                      ? 'bg-pelican-cream' 
                      : 'bg-pelican-sand'
                  }`}
                >
                  <span className={`font-bold text-lg ${
                    item.open ? 'text-pelican-dark-green' : 'text-pelican-green'
                  }`}>
                    {item.day}
                  </span>
                  <span className={`font-medium ${
                    item.open ? 'text-pelican-coral' : 'text-pelican-dark-green'
                  }`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-pelican-yellow/20 rounded-lg">
              <div className="flex items-start gap-3">
                <FaInfoCircle className="text-pelican-coral text-xl flex-shrink-0 mt-1" />
                <div className="text-pelican-dark-green">
                  <p className="font-bold mb-2">Holiday Hours May Vary</p>
                  <p className="text-sm">
                    Please check our Facebook or Instagram pages for holiday closures 
                    and special hours announcements.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directions */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              How to Find Us
            </h2>
            <p className="text-lg text-pelican-green">
              Easy access from anywhere in Cruz Bay
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {directions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-pelican-coral mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-pelican-dark-green mb-3">
                  {item.title}
                </h3>
                <p className="text-pelican-green">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Landmarks */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-pelican-green to-pelican-ocean text-white"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Nearby Landmarks & Context
            </h2>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-bold mb-2">📍 In the Enighed Complex</p>
                <p className="text-pelican-sand">
                  We're located in the Enighed Complex, NOT at The Marketplace/Starfish Market. 
                  This is our newer, larger location that allows us to serve you better.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-bold mb-2">⛴️ Near the Car Ferry</p>
                <p className="text-pelican-sand">
                  Just a short drive from the Cruz Bay car ferry dock. Perfect for picking up 
                  packages when coming into town.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-bold mb-2">🏪 Central Cruz Bay</p>
                <p className="text-pelican-sand">
                  In the heart of Cruz Bay, making us easy to access whether you're a resident 
                  or just passing through.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services Note */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <h2 className="text-3xl font-bold text-pelican-dark-green mb-4">
              Walk-Ins Welcome!
            </h2>
            <p className="text-lg text-pelican-green mb-6">
              Most of our services are available on a walk-in basis during business hours. 
              However, we recommend calling ahead or booking an appointment for:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-pelican-sand px-4 py-2 rounded-full text-pelican-dark-green font-medium">
                Notary Services
              </span>
              <span className="bg-pelican-sand px-4 py-2 rounded-full text-pelican-dark-green font-medium">
                Large Format Printing
              </span>
              <span className="bg-pelican-sand px-4 py-2 rounded-full text-pelican-dark-green font-medium">
                Package Consolidation
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://thepelicanpostvi.as.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Notary Appointment
              </a>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-r from-pelican-coral to-pelican-yellow text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions Before You Visit?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're here to help! Give us a call or send us a message.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:3407767663" className="btn-secondary bg-white text-pelican-dark-green hover:bg-pelican-cream">
                <FaPhone className="inline mr-2" />
                (340) 776-7663
              </a>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-pelican-coral">
                Send Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Location;
