import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  FaBox, 
  FaMailBulk, 
  FaSuitcase,
  FaPrint,
  FaShippingFast,
  FaCoffee,
  FaCalculator,
  FaFileSignature,
  FaBusinessTime,
  FaFileInvoiceDollar,
  FaArrowRight,
  FaFax,
  FaLaptop,
  FaShoppingBag,
  FaEnvelope,
  FaCopy
} from 'react-icons/fa';

const Services = () => {
  const mailServices = [
    {
      icon: <FaMailBulk className="text-3xl" />,
      title: "Mail Pick-Up & Drop-Off",
      description: "Send and receive mail through our convenient Cruz Bay location. We handle all your postal needs.",
      color: "bg-pelican-coral",
      featured: false
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Mail Services",
      description: "Comprehensive mail handling including sorting, forwarding, and secure storage for residents and visitors.",
      color: "bg-pelican-ocean",
      featured: false
    },
    {
      icon: <FaBox className="text-3xl" />,
      title: "Package Receiving",
      description: "Use our address for your deliveries. We'll sign for and securely store your packages until you pick them up.",
      color: "bg-pelican-green",
      featured: true
    }
  ];

  const shippingServices = [
    {
      icon: <FaShippingFast className="text-3xl" />,
      title: "Packing & Shipping",
      description: "Professional packing and shipping services for all your items, whether going stateside or internationally.",
      color: "bg-pelican-yellow",
      featured: true
    },
    {
      icon: <FaBox className="text-3xl" />,
      title: "Package Forwarding",
      description: "Need to send something off-island? We handle package forwarding and shipping logistics for you.",
      color: "bg-pelican-coral",
      featured: false
    }
  ];

  const businessServices = [
    {
      icon: <FaCalculator className="text-3xl" />,
      title: "Bookkeeping Services",
      description: "Professional bookkeeping to keep your business finances organized and compliant.",
      color: "bg-pelican-ocean",
      featured: true
    },
    {
      icon: <FaFileInvoiceDollar className="text-3xl" />,
      title: "Tax Preparation",
      description: "Expert tax preparation services for individuals and small businesses in the USVI.",
      color: "bg-pelican-green",
      featured: false
    },
    {
      icon: <FaBusinessTime className="text-3xl" />,
      title: "Payroll Services",
      description: "Reliable payroll processing to ensure your employees are paid accurately and on time.",
      color: "bg-pelican-yellow",
      featured: false
    },
    {
      icon: <FaFileSignature className="text-3xl" />,
      title: "Business License Renewals",
      description: "We handle the paperwork for your business license renewals so you can focus on running your business.",
      color: "bg-pelican-coral",
      featured: false
    },
    {
      icon: <FaBusinessTime className="text-3xl" />,
      title: "LLC Formation",
      description: "Starting a business? We can help with LLC formation and business registration in the USVI.",
      color: "bg-pelican-purple",
      featured: false
    }
  ];

  const officeServices = [
    {
      icon: <FaPrint className="text-3xl" />,
      title: "Printing & Copying",
      description: "High-quality printing and copying services for documents, presentations, and more.",
      color: "bg-pelican-coral",
      featured: false
    },
    {
      icon: <FaCopy className="text-3xl" />,
      title: "Scanning",
      description: "Document scanning services to digitize your important papers and records.",
      color: "bg-pelican-ocean",
      featured: false
    },
    {
      icon: <FaFax className="text-3xl" />,
      title: "Faxing",
      description: "Send and receive faxes when you need reliable fax services.",
      color: "bg-pelican-green",
      featured: false
    },
    {
      icon: <FaLaptop className="text-3xl" />,
      title: "Laminating",
      description: "Protect important documents with our professional laminating services.",
      color: "bg-pelican-yellow",
      featured: false
    }
  ];

  const specialServices = [
    {
      icon: <FaSuitcase className="text-3xl" />,
      title: "Luggage Storage",
      description: "Secure storage for travelers. Small bags/backpacks: $5 | Large bags: $10. Perfect for before or after ferry trips!",
      color: "bg-pelican-coral",
      featured: true
    },
    {
      icon: <FaCoffee className="text-3xl" />,
      title: "Coffee & Refreshments",
      description: "Stop in for coffee from our Puerto Rican partner company that provides scholarships for young women.",
      color: "bg-pelican-ocean",
      featured: false
    },
    {
      icon: <FaShoppingBag className="text-3xl" />,
      title: "Local Retail Products",
      description: "Browse handmade items and products from St. John and St. Thomas artisans and small businesses.",
      color: "bg-pelican-green",
      featured: false
    }
  ];

  const ServiceCard = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={service.featured ? "md:col-span-2" : ""}
    >
      <div className={`card h-full group ${service.featured ? 'bg-gradient-to-br from-pelican-coral to-pelican-pink text-white' : ''}`}>
        <div className={`${service.featured ? 'text-white' : service.color.replace('bg-', 'text-')} mb-4 transform group-hover:scale-110 transition-transform`}>
          {service.icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 ${service.featured ? 'text-white' : 'text-pelican-dark-green group-hover:text-pelican-coral'} transition-colors`}>
          {service.title}
        </h3>
        <p className={`${service.featured ? 'text-white/90' : 'text-pelican-green'}`}>
          {service.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <>
      <Helmet>
        <title>Our Services - The Pelican Post | Mail, Business & More in Cruz Bay</title>
        <meta name="description" content="Complete services in St. John: mail handling, package receiving, luggage storage, bookkeeping, tax prep, payroll, printing, and more at The Pelican Post." />
        <meta name="keywords" content="St. John mail services, luggage storage Cruz Bay, bookkeeping USVI, tax preparation St. John, business services Cruz Bay" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pelican-coral via-pelican-pink to-pelican-purple text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Services for Island Life
            </h1>
            <p className="text-xl text-white/90">
              From mail and shipping to business solutions and luggage storage—everything you need 
              in one convenient Cruz Bay location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mail Services */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Mail & Package Services
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              Comprehensive mail handling and package receiving for residents and visitors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mailServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Packing & Shipping
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              Professional shipping services for all your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {shippingServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Business Services */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Business Solutions
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              Professional services to help your business thrive on St. John
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Office Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Office Services
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              Complete office solutions for all your document needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {officeServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              More ways we serve the St. John community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Community Space */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-pelican-ocean to-pelican-green text-white text-center"
          >
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community Event Space
            </h2>
            <p className="text-xl mb-6">
              After business hours, our space is available to rent for community events, art shows, 
              and children's activities. Contact us to learn more about availability.
            </p>
            <Link to="/contact" className="btn-secondary bg-white text-pelican-ocean hover:bg-pelican-cream inline-flex items-center gap-2">
              Inquire About Events
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hours & Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="text-5xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-pelican-dark-green mb-4">
                Business Hours
              </h3>
              <div className="text-lg text-pelican-green space-y-2">
                <p className="font-bold text-pelican-dark-green">Monday - Friday</p>
                <p>8:30 AM - 5:00 PM</p>
                <p className="text-sm mt-4 text-pelican-coral">
                  Saturday hours coming soon!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-pelican-dark-green mb-4">
                Find Us
              </h3>
              <div className="text-lg text-pelican-green space-y-2">
                <p>Pink & Purple Building</p>
                <p className="font-bold text-pelican-dark-green">
                  King St. & Prince St.
                </p>
                <p>Cruz Bay, St. John USVI</p>
                <p className="text-sm mt-4 text-pelican-coral">
                  One block from the ferry dock
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-pelican-coral to-pelican-purple text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions About Our Services?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Stop by our Cruz Bay location or get in touch. We're here to help make island life easier!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-secondary bg-white text-pelican-coral hover:bg-pelican-cream">
                Contact Us
              </Link>
              <Link to="/location" className="btn-outline border-white text-white hover:bg-white hover:text-pelican-coral">
                Get Directions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
