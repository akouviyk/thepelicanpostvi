import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  FaCheckCircle,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaDownload,
  FaKey,
  FaArrowRight
} from 'react-icons/fa';

const MailboxRental = () => {
  const benefits = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Permanent St. John Address",
      description: "Get a real 340 number and a reliable Cruz Bay address that's yours to keep."
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Enhanced Security & Privacy",
      description: "Your mail and packages are secure in our modern facility, protected from theft and weather."
    },
    {
      icon: <FaCheckCircle className="text-3xl" />,
      title: "Accepts All Carriers",
      description: "USPS, FedEx, UPS, DHL, Amazon—we accept mail and packages from everyone."
    },
    {
      icon: <FaKey className="text-3xl" />,
      title: "24/7 Access to Your Mail",
      description: "Your mailbox is accessible anytime during our business hours for your convenience."
    }
  ];

  const sizes = [
    {
      name: "Small Box",
      dimensions: "3\" x 5\" x 12\"",
      monthly: "$35",
      annual: "$350",
      description: "Perfect for letters and small packages",
      color: "from-pelican-green to-pelican-ocean"
    },
    {
      name: "Medium Box",
      dimensions: "5\" x 11\" x 12\"",
      monthly: "$45",
      annual: "$450",
      description: "Ideal for regular mail and medium packages",
      color: "from-pelican-coral to-pelican-yellow",
      popular: true
    },
    {
      name: "Large Box",
      dimensions: "11\" x 11\" x 12\"",
      monthly: "$60",
      annual: "$600",
      description: "Great for businesses and frequent shippers",
      color: "from-pelican-dark-green to-pelican-green"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Contact Us",
      description: "Call or visit us to check availability and discuss your needs."
    },
    {
      step: "2",
      title: "Complete Agreement",
      description: "Fill out our simple rental agreement form with your information."
    },
    {
      step: "3",
      title: "Get Your Keys",
      description: "Receive your mailbox keys and start using your new St. John address!"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mailbox Rental - Get Your 340 Address | The Pelican Post</title>
        <meta name="description" content="Rent a private mailbox in St. John with a real 340 number. Secure mail and package receiving from all carriers. Various sizes available in Cruz Bay." />
        <meta name="keywords" content="mailbox rental St. John, 340 address, private mailbox Cruz Bay, USVI mail address, secure mailbox rental" />
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
              Your Permanent St. John Address
            </h1>
            <p className="text-xl text-pelican-sand mb-8">
              Rent a private mailbox with a real 340 number. Secure, reliable, and accepts 
              packages from all carriers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:3407767663" className="btn-primary bg-pelican-coral">
                <FaPhone className="inline mr-2" />
                Call to Reserve
              </a>
              <Link to="/contact" className="btn-secondary bg-white text-pelican-dark-green">
                Send Inquiry
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Why Rent a Mailbox?
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              More than just a box—it's your gateway to hassle-free island living
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-pelican-dark-green mb-6">
              Additional Perks
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-pelican-coral mt-1 flex-shrink-0" />
                <p className="text-pelican-dark-green">
                  <strong>Package overflow storage:</strong> If packages don't fit, we hold them securely at the counter
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-pelican-coral mt-1 flex-shrink-0" />
                <p className="text-pelican-dark-green">
                  <strong>Local support:</strong> Support a vital community business run by St. John residents
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-pelican-coral mt-1 flex-shrink-0" />
                <p className="text-pelican-dark-green">
                  <strong>Convenient location:</strong> Easy access in the heart of Cruz Bay at Enighed Complex
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-pelican-coral mt-1 flex-shrink-0" />
                <p className="text-pelican-dark-green">
                  <strong>No hidden fees:</strong> Transparent pricing with no surprise charges
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Choose Your Size
            </h2>
            <p className="text-lg text-pelican-green">
              Flexible rental options to fit your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {sizes.map((size, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {size.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pelican-coral text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className={`card h-full ${size.popular ? 'ring-2 ring-pelican-coral shadow-2xl' : ''}`}>
                  <div className={`bg-gradient-to-br ${size.color} text-white p-4 rounded-lg mb-4`}>
                    <h3 className="text-2xl font-bold mb-1">{size.name}</h3>
                    <p className="text-sm opacity-90">{size.dimensions}</p>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-pelican-dark-green mb-1">
                      {size.monthly}
                      <span className="text-lg text-pelican-green">/mo</span>
                    </div>
                    <div className="text-pelican-green">
                      or {size.annual}/year
                      <span className="text-sm ml-1">(Save 17%)</span>
                    </div>
                  </div>

                  <p className="text-pelican-dark-green mb-6 text-center">
                    {size.description}
                  </p>

                  <a
                    href="tel:3407767663"
                    className="btn-primary w-full text-center block"
                  >
                    Reserve This Size
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-pelican-green">
              All prices subject to availability. Contact us for current openings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              How to Get Your Mailbox
            </h2>
            <p className="text-lg text-pelican-green">
              Simple three-step process to start receiving mail
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pelican-coral to-pelican-yellow text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
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

      {/* Address Format */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-pelican-green to-pelican-ocean text-white"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              Your Mailbox Address Format
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 font-mono text-center">
              <p className="text-lg mb-2">Your Name</p>
              <p className="text-lg mb-2">PMB #[Your Box Number]</p>
              <p className="text-lg mb-2">13-1B Enighed Suites</p>
              <p className="text-lg mb-2">Cruz Bay, St. John</p>
              <p className="text-lg">USVI 00830</p>
            </div>
            <p className="text-center mt-6 text-pelican-sand">
              We'll provide your specific box number when you sign up
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Form & CTA */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-pelican-dark-green mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-pelican-green mb-6">
                Download our rental agreement to review, or contact us to check availability 
                and reserve your mailbox today.
              </p>
              <div className="space-y-4">
                <a
                  href="/documents/mailbox-rental-agreement.pdf"
                  download
                  className="btn-outline inline-flex items-center gap-2"
                >
                  <FaDownload />
                  Download Rental Agreement
                </a>
                <p className="text-sm text-pelican-green">
                  * Bring the completed form when you visit us to finalize your rental
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-pelican-dark-green mb-4">
                Contact Us Today
              </h3>
              <div className="space-y-4">
                <a 
                  href="tel:3407767663"
                  className="flex items-center gap-3 text-pelican-dark-green hover:text-pelican-coral transition-colors"
                >
                  <FaPhone className="text-pelican-coral" />
                  <span className="font-medium">(340) 776-7663</span>
                </a>
                <Link
                  to="/location"
                  className="flex items-center gap-3 text-pelican-dark-green hover:text-pelican-coral transition-colors"
                >
                  <FaMapMarkerAlt className="text-pelican-coral" />
                  <span className="font-medium">13-1B Enighed Suites, Cruz Bay</span>
                </Link>
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
                >
                  Send Us a Message
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MailboxRental;
