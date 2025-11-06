import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  FaBox,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBell,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaClock,
  FaArrowRight
} from 'react-icons/fa';

const PackageReceiving = () => {
  const steps = [
    {
      number: "1",
      title: "Use Our Address",
      description: "When shopping online, use The Pelican Post address as your shipping destination. We accept packages from any carrier.",
      icon: <FaMapMarkerAlt className="text-3xl" />
    },
    {
      number: "2",
      title: "We Receive & Secure",
      description: "Our team signs for your packages and stores them safely in our secure facility.",
      icon: <FaBox className="text-3xl" />
    },
    {
      number: "3",
      title: "Get Notified",
      description: "We'll contact you as soon as your package arrives and is ready for pickup.",
      icon: <FaBell className="text-3xl" />
    },
    {
      number: "4",
      title: "Pick Up at Your Convenience",
      description: "Stop by during business hours to collect your package. It's that easy!",
      icon: <FaCheckCircle className="text-3xl" />
    }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure Storage",
      description: "Your packages are protected from theft, weather, and damage in our modern facility."
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: "Extended Hold Times",
      description: "We hold packages for up to 30 days for registered clients, giving you flexibility."
    },
    {
      icon: <FaHandHoldingUsd className="text-3xl" />,
      title: "Package Consolidation",
      description: "Combine multiple packages into one shipment to save significantly on shipping costs."
    }
  ];

  const carriers = [
    "USPS (United States Postal Service)",
    "FedEx (Federal Express)",
    "UPS (United Parcel Service)",
    "DHL Express",
    "Amazon Logistics",
    "Private Couriers"
  ];

  return (
    <>
      <Helmet>
        <title>Package Receiving Service - Ship to St. John | The Pelican Post</title>
        <meta name="description" content="Use The Pelican Post as your St. John shipping address. We receive and hold packages from all carriers including USPS, FedEx, UPS, DHL, and Amazon. Package consolidation available." />
        <meta name="keywords" content="package receiving St. John, ship to St. John, USVI package service, Amazon delivery St. John, package consolidation Cruz Bay" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pelican-coral via-pelican-yellow to-pelican-ocean text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ship to St. John with Confidence
            </h1>
            <p className="text-xl mb-8">
              Getting packages delivered to your door on St. John can be impossible. 
              That's where we come in. Use our address, and we'll handle the rest.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-pelican-dark-green hover:bg-pelican-cream">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-pelican-dark-green mb-4">
                  The Problem
                </h2>
                <div className="space-y-3 text-pelican-green">
                  <p className="flex items-start gap-3">
                    <span className="text-pelican-coral text-xl">✗</span>
                    Many carriers won't deliver to residential addresses on St. John
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-pelican-coral text-xl">✗</span>
                    Packages left unattended risk theft or weather damage
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-pelican-coral text-xl">✗</span>
                    Coordinating deliveries can be a logistical nightmare
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-pelican-coral text-xl">✗</span>
                    Missed deliveries mean trips to off-island shipping facilities
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-pelican-green to-pelican-ocean text-white rounded-xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold mb-4">
                  Our Solution
                </h2>
                <div className="space-y-3">
                  <p className="flex items-start gap-3">
                    <FaCheckCircle className="text-pelican-yellow text-xl flex-shrink-0 mt-1" />
                    <span>Use The Pelican Post address for all your shipments</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <FaCheckCircle className="text-pelican-yellow text-xl flex-shrink-0 mt-1" />
                    <span>We accept packages from every major carrier</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <FaCheckCircle className="text-pelican-yellow text-xl flex-shrink-0 mt-1" />
                    <span>Secure, climate-controlled storage until you pick up</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <FaCheckCircle className="text-pelican-yellow text-xl flex-shrink-0 mt-1" />
                    <span>Package consolidation saves you money on shipping</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              How It Works
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              Four simple steps to hassle-free package receiving
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center relative"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-pelican-coral to-pelican-yellow text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="text-pelican-coral mb-4 flex justify-center mt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                  {step.title}
                </h3>
                <p className="text-pelican-green">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Address Format Section */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Your Shipping Address
            </h2>
            <p className="text-lg text-pelican-green">
              Use this exact format when ordering online
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pelican-dark-green to-pelican-green text-white rounded-xl p-8 shadow-2xl"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 font-mono text-lg text-center space-y-2">
              <p className="text-pelican-yellow font-bold">[Your Name]</p>
              <p>c/o The Pelican Post</p>
              <p>13-1B Enighed Suites</p>
              <p>Cruz Bay, St. John</p>
              <p>USVI 00830</p>
            </div>
            <div className="mt-6 space-y-2 text-pelican-sand text-sm">
              <p className="flex items-start gap-2">
                <FaCheckCircle className="text-pelican-yellow mt-1 flex-shrink-0" />
                <span>Make sure to include "c/o The Pelican Post" so carriers know where to deliver</span>
              </p>
              <p className="flex items-start gap-2">
                <FaCheckCircle className="text-pelican-yellow mt-1 flex-shrink-0" />
                <span>Use your exact name as registered with us</span>
              </p>
              <p className="flex items-start gap-2">
                <FaCheckCircle className="text-pelican-yellow mt-1 flex-shrink-0" />
                <span>Include a phone number in your order for carrier notifications</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Why Choose Our Service?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-pelican-coral mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                  {benefit.title}
                </h3>
                <p className="text-pelican-green">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Carriers Section */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pelican-dark-green mb-4">
              We Accept All Major Carriers
            </h2>
            <p className="text-lg text-pelican-green">
              No matter who ships your package, we'll receive it
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {carriers.map((carrier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-pelican-sand transition-colors">
                  <FaCheckCircle className="text-pelican-coral text-xl flex-shrink-0" />
                  <span className="text-pelican-dark-green font-medium">{carrier}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Consolidation Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pelican-dark-green mb-4">
                Save Money with Package Consolidation
              </h2>
              <p className="text-lg text-pelican-green mb-6">
                Ordered from multiple vendors? We can combine your packages into a single 
                shipment, dramatically reducing your shipping costs when sending items off-island 
                or having them forwarded elsewhere.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-pelican-coral text-xl mt-1 flex-shrink-0" />
                  <p className="text-pelican-dark-green">
                    <strong>Combine multiple packages</strong> from different senders
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-pelican-coral text-xl mt-1 flex-shrink-0" />
                  <p className="text-pelican-dark-green">
                    <strong>Save on shipping costs</strong> with one consolidated shipment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-pelican-coral text-xl mt-1 flex-shrink-0" />
                  <p className="text-pelican-dark-green">
                    <strong>Professional repacking</strong> to ensure safe transit
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-pelican-green to-pelican-ocean text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Example Savings</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-2">Shipping 3 separate packages:</p>
                  <p className="text-3xl font-bold">$150</p>
                </div>
                <div className="text-center text-2xl">↓</div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm opacity-90 mb-2">Consolidated into 1 package:</p>
                  <p className="text-3xl font-bold text-pelican-yellow">$65</p>
                </div>
                <div className="text-center pt-2 border-t border-white/20">
                  <p className="text-sm opacity-90">Your Savings:</p>
                  <p className="text-2xl font-bold text-pelican-yellow">$85</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pelican-dark-green mb-6 text-center">
              Important Information
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
              <div>
                <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                  Holding Period
                </h3>
                <p className="text-pelican-green">
                  We hold packages for up to 30 days for registered clients. After 30 days, 
                  unclaimed packages may be returned to sender or subject to storage fees.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                  Registration
                </h3>
                <p className="text-pelican-green">
                  First-time users should register with us before shipping. This ensures smooth 
                  processing and proper notifications. Contact us or visit our location to sign up.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                  Prohibited Items
                </h3>
                <p className="text-pelican-green">
                  We cannot accept hazardous materials, perishables without prior arrangement, 
                  illegal items, or live animals. Please contact us if you have questions about 
                  specific items.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                  Notification
                </h3>
                <p className="text-pelican-green">
                  Make sure we have your current phone number and email. We'll notify you promptly 
                  when packages arrive.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-pelican-coral to-pelican-yellow text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Start Shipping to St. John Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Register with us and start using our address for all your shipments. 
              It's the easiest way to receive packages on St. John.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-secondary bg-white text-pelican-dark-green hover:bg-pelican-cream inline-flex items-center gap-2">
                Register Now
                <FaArrowRight />
              </Link>
              <Link to="/faq" className="btn-outline border-white text-white hover:bg-white hover:text-pelican-coral">
                View FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PackageReceiving;
