import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaPhone } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "Where are you located?",
          a: "We're located in the Enighed Complex at 13-1B Enighed Suites, Cruz Bay, St. John, USVI 00830. This is NOT at The Marketplace/Starfish Market—we're in our newer, larger location in the Enighed Complex."
        },
        {
          q: "What are your hours of operation?",
          a: "We're open Monday through Saturday from 9:00 AM to 5:00 PM. We're closed on Sundays. Holiday hours may vary—please check our Facebook or Instagram for updates."
        },
        {
          q: "Do I need an appointment?",
          a: "For notary services, yes—appointments are required and can be booked online at thepelicanpostvi.as.me. For all other services (mail, packages, shipping, printing, etc.), walk-ins are welcome during business hours!"
        },
        {
          q: "How can I contact you?",
          a: "Call us at (340) 776-7663, email info@pelicanpostvi.com, or visit us in person at our Cruz Bay location. You can also send us a message through our contact form."
        },
        {
          q: "Are you the same as Connections or The Mail Center?",
          a: "No, we're a new business created to fill the void left when those businesses closed. We're independently owned by Chris and Francie Kappelmann, but we provide similar essential services for the St. John community."
        }
      ]
    },
    {
      category: "Package Receiving",
      questions: [
        {
          q: "How do I use your address for package delivery?",
          a: "When ordering online, use this address format: [Your Name], c/o The Pelican Post, 13-1B Enighed Suites, Cruz Bay, St. John, USVI 00830. Make sure to include 'c/o The Pelican Post' so carriers know where to deliver."
        },
        {
          q: "Which carriers do you accept packages from?",
          a: "We accept packages from all major carriers: USPS, FedEx, UPS, DHL, Amazon, and private couriers. If someone can ship it to St. John, we can receive it!"
        },
        {
          q: "How long will you hold my package?",
          a: "We hold packages for up to 30 days for registered clients. After 30 days, unclaimed packages may be returned to sender or subject to storage fees."
        },
        {
          q: "Is there a fee for package receiving?",
          a: "Holding fees and service details are provided when you register with us. Contact us for specific pricing based on your needs."
        },
        {
          q: "How will I know when my package arrives?",
          a: "We'll contact you via phone or email as soon as your package arrives. Make sure we have your current contact information on file."
        },
        {
          q: "What if my package is too large?",
          a: "We can accommodate packages of various sizes in our facility. For extremely large or unusual shipments, please contact us in advance so we can make arrangements."
        },
        {
          q: "Can I have packages shipped here if I don't have a mailbox?",
          a: "Yes! You don't need to rent a mailbox to use our package receiving service. Simply register with us and start using our address."
        }
      ]
    },
    {
      category: "Mailbox Rental",
      questions: [
        {
          q: "How do I rent a mailbox?",
          a: "Contact us at (340) 776-7663 to check availability. Once confirmed, you'll complete a rental agreement form, pay the rental fee, and receive your mailbox keys!"
        },
        {
          q: "What sizes are available and how much do they cost?",
          a: "We offer three sizes: Small (3\"x5\"x12\") at $35/month or $350/year, Medium (5\"x11\"x12\") at $45/month or $450/year, and Large (11\"x11\"x12\") at $60/month or $600/year. Annual rentals save 17%!"
        },
        {
          q: "What's included with my mailbox rental?",
          a: "You get a permanent St. John address with a 340 number, keys to your private mailbox, acceptance of mail and packages from all carriers, secure storage, and package overflow handling at our counter."
        },
        {
          q: "What happens if a package is too big for my mailbox?",
          a: "We'll hold it securely at the front counter and notify you. Your packages are always safe with us, regardless of size."
        },
        {
          q: "Can I use my mailbox address for official documents?",
          a: "Yes! Your mailbox address is a legitimate St. John address that can be used for official correspondence, driver's licenses, and business registration."
        },
        {
          q: "Is there a minimum rental period?",
          a: "Mailboxes can be rented on a monthly or annual basis. We recommend annual rentals for the cost savings (17% off)."
        },
        {
          q: "Can I access my mailbox 24/7?",
          a: "Mailbox access is available during our business hours: Monday-Saturday, 9 AM - 5 PM."
        }
      ]
    },
    {
      category: "Shipping Services",
      questions: [
        {
          q: "Do you offer DHL, FedEx, and UPS shipping?",
          a: "Yes! We're an official DHL Express shipping agent and an authorized FedEx/UPS drop-off location. We can help you ship domestically and internationally."
        },
        {
          q: "How much does shipping cost?",
          a: "Shipping costs vary based on package weight, dimensions, destination, and service level. Contact us with your shipping details for an accurate quote. We'll help you find the most cost-effective option!"
        },
        {
          q: "What is package consolidation and how does it save money?",
          a: "If you've ordered from multiple vendors, we can combine all your packages into one shipment. This typically saves 30-60% on shipping costs compared to sending each package separately."
        },
        {
          q: "Can you ship internationally?",
          a: "Absolutely! We handle international shipping through USPS Priority Mail International and DHL Express to destinations worldwide."
        },
        {
          q: "Do you ship to Puerto Rico?",
          a: "Yes! Puerto Rico shipping starts at $9.80 via USPS Priority Mail."
        },
        {
          q: "How does the Amazon Hub Counter work?",
          a: "Bring your Amazon return QR code to our location. We'll scan it, accept your return (no box needed!), and Amazon handles the rest. It's that simple!"
        }
      ]
    },
    {
      category: "Business Services",
      questions: [
        {
          q: "Do you offer notary services?",
          a: "Yes! We have a notary public available by appointment. Book online at thepelicanpostvi.as.me. Our fee is $15 per signature."
        },
        {
          q: "What types of documents can you notarize?",
          a: "We can notarize most standard documents including affidavits, powers of attorney, deeds, contracts, and more. If you have questions about a specific document, please call us."
        },
        {
          q: "What printing services do you offer?",
          a: "We offer black & white printing ($0.25/page), color printing ($0.75/page), and large-format engineering prints ($5/sq ft). We also provide copying and scanning services."
        },
        {
          q: "Can I use your computers and internet?",
          a: "Yes! We have computer workstations with high-speed internet access available for public use during business hours."
        },
        {
          q: "Do you offer fax services?",
          a: "Yes, we can send and receive faxes for you. Contact us for current fax service rates."
        },
        {
          q: "Can you make keys?",
          a: "Yes! We offer key cutting services for $5 per key for standard home, office, and vehicle keys."
        }
      ]
    },
    {
      category: "Payment & Policies",
      questions: [
        {
          q: "What forms of payment do you accept?",
          a: "We accept cash, checks, and major credit/debit cards for your convenience."
        },
        {
          q: "Do you offer check cashing?",
          a: "Yes, we offer check cashing services at 3% of the check amount."
        },
        {
          q: "What items can't you accept or ship?",
          a: "We cannot accept or ship hazardous materials, perishables (without prior arrangement), illegal items, or live animals. If you're unsure about a specific item, please contact us."
        },
        {
          q: "What's your refund policy?",
          a: "Mailbox rental fees are non-refundable after the rental period begins. Shipping charges follow carrier refund policies. For other services, please contact us to discuss specific situations."
        },
        {
          q: "Are my packages insured while in your care?",
          a: "Packages maintain their carrier insurance while in our facility. We take security seriously and store all items safely, but we recommend insuring valuable shipments through the carrier."
        }
      ]
    }
  ];

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>FAQ - Frequently Asked Questions | The Pelican Post</title>
        <meta name="description" content="Find answers to common questions about The Pelican Post's mail, package receiving, mailbox rental, shipping, notary, and business services in St. John, USVI." />
        <meta name="keywords" content="The Pelican Post FAQ, St. John mail questions, package receiving help, mailbox rental info, shipping questions USVI" />
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
            <FaQuestionCircle className="text-6xl mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-pelican-sand">
              Find answers to common questions about our services. Can't find what you're 
              looking for? Give us a call!
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-3xl font-bold text-pelican-dark-green mb-6 pb-3 border-b-2 border-pelican-coral">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <button
                        onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                        className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-pelican-sand/50 transition-colors"
                      >
                        <span className="font-bold text-pelican-dark-green pr-4">
                          {item.q}
                        </span>
                        {isOpen ? (
                          <FaChevronUp className="text-pelican-coral flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="text-pelican-coral flex-shrink-0" />
                        )}
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-pelican-cream/50 text-pelican-green border-t border-pelican-sand">
                          {item.a}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-pelican-dark-green mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-pelican-green mb-8">
              We're here to help! Don't hesitate to reach out—we love hearing from our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:3407767663"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FaPhone />
                Call (340) 776-7663
              </a>
              <Link to="/contact" className="btn-secondary">
                Send Us a Message
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-gradient-to-r from-pelican-coral to-pelican-yellow text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link to="/services" className="btn-secondary bg-white text-pelican-dark-green hover:bg-pelican-cream">
                View Services
              </Link>
              <Link to="/pricing" className="btn-secondary bg-white text-pelican-dark-green hover:bg-pelican-cream">
                See Pricing
              </Link>
              <Link to="/location" className="btn-secondary bg-white text-pelican-dark-green hover:bg-pelican-cream">
                Visit Us
              </Link>
              <a 
                href="https://thepelicanpostvi.as.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-pelican-dark-green hover:bg-pelican-cream"
              >
                Book Notary
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
