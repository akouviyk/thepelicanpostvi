import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaCheckCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '', // 'success', 'error', 'loading'
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Add document to Firestore
      await addDoc(collection(db, 'contact_submissions'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'new',
      });

      setStatus({
        type: 'success',
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: '', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        type: 'error',
        message:
          'Oops! Something went wrong. Please try calling us instead at (340) 776-7663.',
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-3xl" />,
      title: 'Phone',
      content: '(340) 776-7663',
      link: 'tel:3407767663',
      color: 'from-pelican-coral to-pelican-yellow',
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: 'Email',
      content: 'info@pelicanpostvi.com',
      link: 'mailto:info@pelicanpostvi.com',
      color: 'from-pelican-green to-pelican-ocean',
    },
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: 'Address',
      content: '13-1B Enighed Suites, Cruz Bay, St. John, USVI 00830',
      link: '/location',
      color: 'from-pelican-dark-green to-pelican-green',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | The Pelican Post</title>
        <meta
          name="description"
          content="Contact The Pelican Post in St. John for mail, package, shipping, and business service inquiries. Call (340) 776-7663, email, or visit us in Cruz Bay."
        />
        <meta
          name="keywords"
          content="contact The Pelican Post, St. John mail service contact, Cruz Bay business contact, package inquiry St. John"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pelican-dark-green to-pelican-green text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-pelican-sand">
              Have a question about our services? Need help with a shipment?
              We're here to assist you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.link.startsWith('/') ? (
                  <Link to={item.link} className="block h-full">
                    <div
                      className={`card h-full bg-gradient-to-br ${item.color} text-white hover:shadow-2xl transition-shadow`}
                    >
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-pelican-cream">{item.content}</p>
                    </div>
                  </Link>
                ) : (
                  <a href={item.link} className="block h-full">
                    <div
                      className={`card h-full bg-gradient-to-br ${item.color} text-white hover:shadow-2xl transition-shadow`}
                    >
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-pelican-cream">{item.content}</p>
                    </div>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card max-w-2xl mx-auto text-center"
          >
            <FaClock className="text-5xl text-pelican-coral mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-pelican-dark-green mb-4">
              Business Hours
            </h3>
            <div className="grid grid-cols-2 gap-4 text-pelican-dark-green">
              <div>
                <p className="font-bold">Monday - Saturday</p>
                <p className="text-pelican-coral">9:00 AM - 5:00 PM</p>
              </div>
              <div>
                <p className="font-bold">Sunday</p>
                <p className="text-pelican-green">Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-pelican-green">
              Fill out the form below and we'll get back to you as soon as
              possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-pelican-dark-green font-medium mb-2"
                >
                  Full Name <span className="text-pelican-coral">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pelican-sand rounded-lg focus:border-pelican-coral focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-pelican-dark-green font-medium mb-2"
                  >
                    Email Address <span className="text-pelican-coral">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-pelican-sand rounded-lg focus:border-pelican-coral focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-pelican-dark-green font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-pelican-sand rounded-lg focus:border-pelican-coral focus:outline-none transition-colors"
                    placeholder="(340) 123-4567"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-pelican-dark-green font-medium mb-2"
                >
                  Subject <span className="text-pelican-coral">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-pelican-sand rounded-lg focus:border-pelican-coral focus:outline-none transition-colors bg-white"
                >
                  <option value="general">General Question</option>
                  <option value="mailbox">Mailbox Rental Inquiry</option>
                  <option value="package">Package Receiving Question</option>
                  <option value="notary">Notary Appointment</option>
                  <option value="shipping">Shipping Quote</option>
                  <option value="business">Business Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-pelican-dark-green font-medium mb-2"
                >
                  Message <span className="text-pelican-coral">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-pelican-sand rounded-lg focus:border-pelican-coral focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              {/* Status Messages */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : status.type === 'error'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {status.type === 'success' ? (
                    <FaCheckCircle className="text-2xl flex-shrink-0 mt-1" />
                  ) : status.type === 'error' ? (
                    <FaExclamationTriangle className="text-2xl flex-shrink-0 mt-1" />
                  ) : (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current flex-shrink-0 mt-1"></div>
                  )}
                  <p>{status.message}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-sm text-pelican-green text-center">
                Required fields are marked with{' '}
                <span className="text-pelican-coral">*</span>
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-3xl font-bold text-pelican-dark-green mb-6 text-center">
              Other Ways to Reach Us
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Book Notary */}
              <div className="text-center p-6 bg-pelican-cream rounded-lg">
                <h3 className="text-xl font-bold text-pelican-dark-green mb-3">
                  Book Notary Appointment
                </h3>
                <p className="text-pelican-green mb-4">
                  Schedule your notary appointment online for guaranteed
                  availability
                </p>
                <a
                  href="https://thepelicanpostvi.as.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Book Now
                </a>
              </div>

              {/* Social Media */}
              <div className="text-center p-6 bg-pelican-cream rounded-lg">
                <h3 className="text-xl font-bold text-pelican-dark-green mb-3">
                  Follow Us on Social Media
                </h3>
                <p className="text-pelican-green mb-4">
                  Stay updated on hours, services, and island news
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61560219816727"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pelican-coral hover:bg-pelican-dark-green text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaFacebookF className="text-xl" />
                  </a>
                  <a
                    href="https://instagram.com/thepelicanpost.vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pelican-coral hover:bg-pelican-dark-green text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Visit In Person */}
            <div className="mt-8 p-6 bg-gradient-to-br from-pelican-green to-pelican-ocean text-white rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-3">
                Prefer to Talk in Person?
              </h3>
              <p className="mb-4">
                Walk-ins are welcome! Stop by during business hours and we'll be
                happy to help.
              </p>
              <Link
                to="/location"
                className="btn-secondary bg-white text-pelican-dark-green hover:bg-pelican-cream"
              >
                Get Directions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-pelican-dark-green mb-4">
              Looking for Quick Answers?
            </h2>
            <p className="text-lg text-pelican-green mb-6">
              Many common questions are answered in our FAQ section
            </p>
            <Link to="/faq" className="btn-primary">
              View Frequently Asked Questions
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
