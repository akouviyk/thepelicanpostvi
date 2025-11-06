import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaBox,
  FaMailBulk,
  FaSuitcase,
  FaPrint,
  FaCoffee,
  FaCalculator,
  FaCheckCircle,
  FaQuoteLeft,
  FaArrowRight,
  FaShoppingBag,
} from 'react-icons/fa';

const Home = () => {
  const services = [
    {
      icon: <FaMailBulk className="text-4xl" />,
      title: 'Mail Services',
      description:
        'Mail pick-up and drop-off, PO box alternatives, and comprehensive postal services for the community.',
      link: '/services',
      color: 'bg-pelican-coral',
    },
    {
      icon: <FaBox className="text-4xl" />,
      title: 'Packing & Shipping',
      description:
        'Professional packing and shipping services to get your items where they need to go safely.',
      link: '/services',
      color: 'bg-pelican-ocean',
    },
    {
      icon: <FaSuitcase className="text-4xl" />,
      title: 'Luggage Storage',
      description:
        'Secure luggage storage for travelers. Small bags $5, large bags $10. Perfect for before/after ferry trips.',
      link: '/services',
      color: 'bg-pelican-yellow',
    },
    {
      icon: <FaCalculator className="text-4xl" />,
      title: 'Business Services',
      description:
        'Bookkeeping, tax preparation, payroll processing, business license renewals, and LLC formation services.',
      link: '/services',
      color: 'bg-pelican-green',
    },
    {
      icon: <FaPrint className="text-4xl" />,
      title: 'Office Services',
      description:
        'Copying, scanning, faxing, laminating, and more. Your complete office solution on the island.',
      link: '/services',
      color: 'bg-pelican-purple',
    },
    {
      icon: <FaCoffee className="text-4xl" />,
      title: 'Coffee & Local Products',
      description:
        'Stop in for coffee from Puerto Rico and browse locally made retail items from St. John and St. Thomas artisans.',
      link: '/services',
      color: 'bg-pelican-coral',
    },
  ];

  const features = [
    {
      icon: <FaCheckCircle />,
      text: 'Women-owned business by St. John natives',
    },
    {
      icon: <FaCheckCircle />,
      text: 'Located in the iconic pink building in Cruz Bay',
    },
    { icon: <FaCheckCircle />, text: 'Just one block from the ferry dock' },
    {
      icon: <FaCheckCircle />,
      text: 'Supporting local artists and businesses',
    },
  ];

  const testimonials = [
    {
      quote:
        "The Pelican Post has become an essential part of St. John's infrastructure. So grateful to have these services back!",
      author: 'Local Resident',
      role: 'Cruz Bay',
    },
    {
      quote:
        'Crystal and Krista have created something special. The community really needed this.',
      author: 'Small Business Owner',
      role: 'St. John',
    },
    {
      quote:
        'Perfect location, great service. The luggage storage is a lifesaver for day trips!',
      author: 'Visitor',
      role: 'Tourist',
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          The Pelican Post - Mail & Business Services | Cruz Bay, St. John USVI
        </title>
        <meta
          name="description"
          content="The Pelican Post offers mail services, luggage storage, business services, packing and shipping in Cruz Bay, St. John. Women-owned business by Crystal George and Krista Kremer."
        />
        <meta
          name="keywords"
          content="mail services St. John, luggage storage Cruz Bay, business services USVI, Pelican Post St. John, bookkeeping St. John"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pelican-dark-green via-pelican-pink to-pelican-dark-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wIDhoLTJ2LTJoMnYyem00LTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wIDhoLTJ2LTJoMnYyem00LTRoLTJ2LTJoMnYyem0wLTRoLTJ2LTJoMnYyem0wIDhoLTJ2LTJoMnYyeiIvPjwvZz48L2c+PC9zdmc+')] animate-[slide_30s_linear_infinite]"></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-6xl">🦩</div>
                <div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    The Pelican Post
                  </h1>
                  <p className="text-xl md:text-2xl text-pelican-cream">
                    St. John, USVI
                  </p>
                </div>
              </div>
              <p className="text-2xl md:text-3xl mb-6 font-medium">
                Your Modern Mail Center &<br />
                Business Solutions Hub
              </p>
              <p className="text-lg mb-10 max-w-2xl text-white/90">
                A woman-owned business offering mail services, luggage storage,
                business solutions, and more in the heart of Cruz Bay. Just one
                block from the ferry dock in the iconic pink building.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="btn-primary bg-white text-pelican-coral hover:bg-pelican-cream inline-flex items-center gap-2"
                >
                  Explore Our Services
                  <FaArrowRight />
                </Link>
                <Link
                  to="/location"
                  className="btn-secondary bg-pelican-ocean hover:bg-opacity-90 inline-flex items-center gap-2"
                >
                  Visit Us in Cruz Bay
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#faf9f6"
            />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Our Services
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              From mail and shipping to business services and beyond—everything
              you need in one convenient location
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.link} className="block h-full">
                  <div className="card h-full hover:shadow-2xl transition-all duration-300 group">
                    <div
                      className={`${service.color} text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-pelican-dark-green mb-2 group-hover:text-pelican-coral transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-pelican-green mb-4">
                      {service.description}
                    </p>
                    <span className="text-pelican-coral font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Learn More <FaArrowRight className="text-sm" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-6">
                Born & Raised on St. John
              </h2>
              <p className="text-lg text-pelican-green mb-6">
                The Pelican Post opened in August 2024, founded by Crystal
                George and Krista Kremer—two lifelong friends and St. John
                natives who saw a need in their community.
              </p>
              <p className="text-lg text-pelican-green mb-6">
                When Connections closed after serving the island for nearly 40
                years, Crystal and Krista stepped up to fill the void. They
                transformed the iconic pink and purple building in Cruz Bay into
                a modern service hub that honors the island's past while
                embracing the future.
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="text-pelican-coral text-xl flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <p className="text-pelican-dark-green font-medium">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  Read Our Story <FaArrowRight />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/pelican-post-building.jpg"
                  alt="The Pelican Post - Pink Building in Cruz Bay"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.className +=
                      ' bg-gradient-to-br from-pelican-coral to-pelican-purple';
                    e.target.parentElement.innerHTML =
                      '<div class="w-full h-full flex items-center justify-center text-white text-center p-8"><div><div class="text-8xl mb-4">🦩</div><p class="text-2xl font-bold">The Pelican Post</p><p class="text-lg">Cruz Bay, St. John</p></div></div>';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-pelican-ocean text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">2024</p>
                <p className="text-sm">Est. August</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Supporting Local
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              We proudly partner with St. John and St. Thomas artisans,
              featuring locally made products and coffee from a Puerto Rican
              company that provides scholarships for young women.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <FaCoffee className="text-5xl text-pelican-coral mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                Coffee Shop
              </h3>
              <p className="text-pelican-green">
                Enjoy quality coffee from a Puerto Rican company focused on
                empowering young women through education
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card text-center"
            >
              <FaShoppingBag className="text-5xl text-pelican-ocean mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                Local Retail
              </h3>
              <p className="text-pelican-green">
                Browse handmade items and products from St. John and St. Thomas
                artists and entrepreneurs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card text-center"
            >
              <FaCheckCircle className="text-5xl text-pelican-yellow mx-auto mb-4" />
              <h3 className="text-xl font-bold text-pelican-dark-green mb-2">
                Community Events
              </h3>
              <p className="text-pelican-green">
                Our space is available for community events, art shows, and
                children's activities after hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              What People Are Saying
            </h2>
            <p className="text-lg text-pelican-green">
              Serving the St. John community with pride
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-pelican-cream rounded-xl p-6 shadow-lg"
              >
                <FaQuoteLeft className="text-3xl text-pelican-coral mb-4" />
                <p className="text-pelican-dark-green mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-pelican-sand pt-4">
                  <p className="font-bold text-pelican-dark-green">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-pelican-green">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-pelican-dark-green via-pelican-pink to-pelican-dark-green text-white overflow-hidden">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Visit Us in Cruz Bay
            </h2>
            <p className="text-xl mb-4 max-w-2xl mx-auto">
              Located in the pink and purple building on the corner of King
              Street and Prince Street
            </p>
            <p className="text-lg mb-8 text-white/90">
              Just one block from the ferry dock
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/location"
                className="btn-secondary bg-white text-pelican-ocean hover:bg-pelican-cream"
              >
                Get Directions
              </Link>
              <Link
                to="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-pelican-ocean"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
