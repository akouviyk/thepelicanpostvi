import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  FaMailBulk,
  FaStamp,
  FaPrint,
  FaFileSignature,
  FaKey,
  FaMoneyCheckAlt,
  FaInfoCircle,
  FaPhone
} from 'react-icons/fa';

const Pricing = () => {
  const mailboxPricing = [
    { size: "Small Box", dimensions: "3\" x 5\" x 12\"", monthly: "$35", annual: "$350" },
    { size: "Medium Box", dimensions: "5\" x 11\" x 12\"", monthly: "$45", annual: "$450", popular: true },
    { size: "Large Box", dimensions: "11\" x 11\" x 12\"", monthly: "$60", annual: "$600" }
  ];

  const uspsServices = [
    { service: "Priority Mail Flat Rate - Small Box", price: "$10.40" },
    { service: "Priority Mail Flat Rate - Medium Box", price: "$17.05" },
    { service: "Priority Mail Flat Rate - Large Box", price: "$23.50" },
    { service: "Priority Mail Express Flat Rate - Envelope", price: "$28.75" },
    { service: "First Class Mail - Letters", price: "Starting at $0.68" },
    { service: "Priority Mail - By Weight", price: "Starting at $9.35" }
  ];

  const internationalRates = [
    { destination: "Puerto Rico", service: "Priority Mail", rate: "Starting at $9.80" },
    { destination: "Mainland USA", service: "Priority Mail", rate: "Starting at $9.35" },
    { destination: "United Kingdom", service: "Priority Mail International", rate: "Starting at $48.25" },
    { destination: "Canada", service: "Priority Mail International", rate: "Starting at $40.30" },
    { destination: "Caribbean Islands", service: "Priority Mail International", rate: "Starting at $30.75" }
  ];

  const otherServices = [
    { icon: <FaFileSignature />, service: "Notary Public", price: "$15", unit: "per signature" },
    { icon: <FaPrint />, service: "Black & White Printing", price: "$0.25", unit: "per page" },
    { icon: <FaPrint />, service: "Color Printing", price: "$0.75", unit: "per page" },
    { icon: <FaPrint />, service: "Large Format Print (Engineering)", price: "$5.00", unit: "per sq. ft." },
    { icon: <FaKey />, service: "Key Cutting", price: "$5.00", unit: "per key" },
    { icon: <FaMoneyCheckAlt />, service: "Check Cashing", price: "3%", unit: "of check amount" }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Mail & Services Cost | The Pelican Post</title>
        <meta name="description" content="Transparent pricing for mailbox rental, USPS services, notary, printing, and more at The Pelican Post in St. John. Competitive rates for all your business needs." />
        <meta name="keywords" content="mailbox rental price St. John, notary fees USVI, printing costs Cruz Bay, USPS rates St. John, package shipping prices" />
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-pelican-sand">
              No hidden fees, no surprises. Just honest pricing for quality services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mailbox Rental Pricing */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaMailBulk className="text-5xl text-pelican-coral mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Mailbox Rental
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              Secure your permanent St. John address with a 340 number
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mailboxPricing.map((box, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {box.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-pelican-coral text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                    Most Popular
                  </div>
                )}
                <div className={`card ${box.popular ? 'ring-2 ring-pelican-coral shadow-2xl' : ''}`}>
                  <h3 className="text-2xl font-bold text-pelican-dark-green mb-2">{box.size}</h3>
                  <p className="text-pelican-green text-sm mb-4">{box.dimensions}</p>
                  
                  <div className="border-t border-pelican-sand pt-4 mb-4">
                    <div className="mb-3">
                      <span className="text-3xl font-bold text-pelican-dark-green">{box.monthly}</span>
                      <span className="text-pelican-green">/month</span>
                    </div>
                    <div className="text-pelican-green">
                      <span className="font-medium">{box.annual}</span>/year
                      <span className="text-sm ml-2 text-pelican-coral">(Save 17%)</span>
                    </div>
                  </div>

                  <Link 
                    to="/services/mailboxes" 
                    className="btn-outline w-full text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-pelican-green"
          >
            <p className="flex items-center justify-center gap-2">
              <FaInfoCircle className="text-pelican-coral" />
              Prices subject to availability. Annual payments save 17%.
            </p>
          </motion.div>
        </div>
      </section>

      {/* USPS Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaStamp className="text-5xl text-pelican-ocean mx-auto mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              USPS Services
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              Standard USPS postal rates for domestic shipping
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-pelican-dark-green mb-6">
                Domestic Rates
              </h3>
              <div className="space-y-3">
                {uspsServices.map((item, index) => (
                  <div key={index} className="flex justify-between items-start pb-3 border-b border-pelican-sand last:border-0">
                    <span className="text-pelican-dark-green font-medium">{item.service}</span>
                    <span className="text-pelican-coral font-bold ml-4 whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-br from-pelican-ocean to-pelican-green text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                International Shipping
              </h3>
              <div className="space-y-3">
                {internationalRates.map((item, index) => (
                  <div key={index} className="pb-3 border-b border-white/20 last:border-0">
                    <div className="font-bold text-pelican-yellow mb-1">{item.destination}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{item.service}</span>
                      <span className="font-bold ml-4 whitespace-nowrap">{item.rate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 bg-pelican-sand px-6 py-3 rounded-lg">
              <FaInfoCircle className="text-pelican-coral" />
              <p className="text-pelican-dark-green">
                Rates shown are estimates. Final costs depend on weight, dimensions, and destination.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Business & Convenience Services
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              Additional services to support your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {otherServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="text-3xl text-pelican-coral mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                  {item.service}
                </h3>
                <div className="text-2xl font-bold text-pelican-coral">
                  {item.price}
                </div>
                <p className="text-pelican-green text-sm">
                  {item.unit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping & DHL Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-pelican-yellow to-pelican-coral text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              DHL Express, FedEx & UPS Shipping
            </h2>
            <p className="text-lg mb-6 text-center">
              As an official DHL shipping agent and authorized FedEx/UPS drop-off location, 
              we offer competitive shipping rates for domestic and international express services.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 space-y-3">
              <p className="flex items-start gap-3">
                <FaInfoCircle className="text-2xl flex-shrink-0 mt-1" />
                <span>Pricing varies based on package weight, dimensions, destination, and service level</span>
              </p>
              <p className="flex items-start gap-3">
                <FaInfoCircle className="text-2xl flex-shrink-0 mt-1" />
                <span>Contact us with your shipping details for an accurate quote</span>
              </p>
              <p className="flex items-start gap-3">
                <FaInfoCircle className="text-2xl flex-shrink-0 mt-1" />
                <span>We can help you choose the most cost-effective shipping option</span>
              </p>
            </div>
            <div className="text-center mt-6">
              <a href="tel:3407767663" className="btn-secondary bg-white text-pelican-dark-green hover:bg-pelican-cream inline-flex items-center gap-2">
                <FaPhone />
                Call for Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Package Consolidation */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pelican-dark-green mb-6 text-center">
              Package Consolidation Service
            </h2>
            <p className="text-lg text-pelican-green mb-8 text-center">
              Save significantly on shipping costs by combining multiple packages into one shipment
            </p>
            
            <div className="bg-pelican-sand rounded-xl p-6">
              <h3 className="text-xl font-bold text-pelican-dark-green mb-4">
                How Consolidation Pricing Works
              </h3>
              <div className="space-y-4 text-pelican-green">
                <p className="flex items-start gap-3">
                  <span className="text-pelican-coral text-2xl">1.</span>
                  <span>We assess all packages you want to consolidate</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-pelican-coral text-2xl">2.</span>
                  <span>Calculate the most efficient way to combine them</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-pelican-coral text-2xl">3.</span>
                  <span>Quote you the consolidated shipping rate (typically 30-60% less than shipping separately)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-pelican-coral text-2xl">4.</span>
                  <span>Professionally repack and ship your items securely</span>
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/services/package-receiving" className="btn-primary">
                Learn More About Consolidation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer & CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-pelican-sand rounded-xl p-8 mb-8">
              <FaInfoCircle className="text-4xl text-pelican-coral mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-pelican-dark-green mb-4">
                Important Pricing Information
              </h3>
              <div className="text-left max-w-2xl mx-auto space-y-3 text-pelican-dark-green">
                <p>• All prices are subject to change based on carrier rate adjustments</p>
                <p>• Complex or oversized shipments require individual quotes</p>
                <p>• We strive to offer the most competitive rates on the island</p>
                <p>• Contact us for volume discounts on business services</p>
                <p>• International shipping may include additional customs fees</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-pelican-dark-green mb-6">
              Need a Custom Quote?
            </h2>
            <p className="text-lg text-pelican-green mb-8 max-w-2xl mx-auto">
              For complex shipments, bulk services, or any pricing questions, 
              we're here to help you find the best solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Request Quote
              </Link>
              <a href="tel:3407767663" className="btn-secondary">
                <FaPhone className="inline mr-2" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
