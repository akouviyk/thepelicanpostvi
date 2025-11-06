import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  FaHeart,
  FaMapMarkedAlt,
  FaHandshake,
  FaUsers,
  FaLightbulb,
  FaArrowRight,
  FaCoffee,
  FaBuilding,
  FaCalendarAlt
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Community First",
      description: "We're St. John natives serving our community. Your success is our success, your needs are our priority."
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Reliability",
      description: "When we say we'll handle your mail, store your luggage, or process your bookkeeping—you can count on it."
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Local Partnership",
      description: "We partner with St. John and St. Thomas artists and businesses, keeping our island economy strong."
    }
  ];

  const timeline = [
    {
      year: "Before 2024",
      title: "A Community Need",
      description: "When Connections closed after 40 years of service, St. John lost a vital hub for mail and business services. The community needed a solution."
    },
    {
      year: "Spring 2024",
      title: "The Decision",
      description: "Crystal George and Krista Kremer, lifelong friends and St. John natives, decided to step up and fill the gap their community desperately needed."
    },
    {
      year: "June 2024",
      title: "Preparation",
      description: "The duo began refurbishing the iconic pink and purple building in Cruz Bay, purchasing equipment and setting up systems for their new venture."
    },
    {
      year: "August 1, 2024",
      title: "Grand Opening",
      description: "The Pelican Post officially opened its doors on the day tropical wave Debby passed over the Virgin Islands. A grand celebration followed on August 8th."
    },
    {
      year: "Today",
      title: "Serving St. John",
      description: "The Pelican Post has quickly become an essential part of island life, offering mail services, business solutions, and community support."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Our Story | The Pelican Post, St. John USVI</title>
        <meta name="description" content="Learn about The Pelican Post, founded by Crystal George and Krista Kremer in 2024 to serve St. John's mail and business service needs. Women-owned, island-born." />
        <meta name="keywords" content="Pelican Post history, Crystal George, Krista Kremer, St. John business, women-owned USVI, Connections successor Cruz Bay" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pelican-coral via-pelican-pink to-pelican-purple text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="text-6xl mb-4">🦩</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Born on St. John, Built for St. John
            </h1>
            <p className="text-xl text-white/90">
              The story of two island natives who saw their community's need and turned it into action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Founders */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-6">
                Meet Crystal & Krista
              </h2>
              <div className="space-y-4 text-lg text-pelican-green">
                <p>
                  <strong className="text-pelican-dark-green">Crystal George</strong> brings extensive experience 
                  in accounting and business management, earned through her B.A. from UVI and her current role 
                  as financial administrator for Cinnamon Bay Resort Campground.
                </p>
                <p>
                  <strong className="text-pelican-dark-green">Krista Kremer</strong> has been a massage therapist 
                  on St. John for 16 years. She first explored buying Connections in 2020, learning the business 
                  operations while maintaining her massage therapy practice.
                </p>
                <p>
                  Both women were born and raised on St. John, attending All Saints Cathedral School on St. Thomas. 
                  Though they had a five-year age difference, they became close friends and eventually business partners.
                </p>
                <p className="font-bold text-pelican-dark-green">
                  Together, they're the perfect team to serve their island community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/crystal-krista.jpg" 
                  alt="Crystal George and Krista Kremer, Founders of The Pelican Post"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.className += ' bg-gradient-to-br from-pelican-coral to-pelican-ocean';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-center p-8"><div><div class="text-8xl mb-4">👭</div><p class="text-2xl font-bold mb-2">Crystal George & Krista Kremer</p><p class="text-lg">Founders & Owners</p><p class="text-sm mt-4">St. John Natives, Island Proud</p></div></div>';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-pelican-yellow text-pelican-dark-green p-6 rounded-xl shadow-xl">
                <p className="text-lg font-bold">15+ Years</p>
                <p className="text-sm">Friends & Partners</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Journey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              From a community need to an island essential
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-pelican-sand hidden md:block" />
                )}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-pelican-coral to-pelican-ocean text-white rounded-full flex items-center justify-center font-bold text-xs shadow-lg text-center p-2">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="card flex-grow">
                    <h3 className="text-2xl font-bold text-pelican-dark-green mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-pelican-green">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Building */}
      <section className="section-padding bg-pelican-sand">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/pink-building.jpg" 
                  alt="The iconic pink and purple Pelican Post building in Cruz Bay"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.className += ' bg-gradient-to-br from-pelican-coral via-pelican-pink to-pelican-purple';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-center p-8"><div><div class="text-8xl mb-4">🏢</div><p class="text-2xl font-bold">The Pink Building</p><p class="text-lg mt-2">King St. & Prince St., Cruz Bay</p></div></div>';
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <FaBuilding className="text-5xl text-pelican-coral mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-pelican-dark-green mb-6">
                The Historic Moorehead Building
              </h2>
              <p className="text-lg text-pelican-green mb-4">
                The Pelican Post calls home the iconic pink and purple building at the corner of King Street 
                and Prince Street in Cruz Bay—the same building that housed Connections for nearly 40 years.
              </p>
              <p className="text-lg text-pelican-green mb-4">
                Located just one block from the ferry dock, our building is impossible to miss with its 
                vibrant pink exterior and purple accents. It's a Cruz Bay landmark and now a modern hub 
                for essential services.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-pelican-dark-green">
                  <FaMapMarkedAlt className="text-pelican-coral flex-shrink-0" />
                  <span>Corner of King St. & Prince St., Cruz Bay</span>
                </div>
                <div className="flex items-center gap-3 text-pelican-dark-green">
                  <FaCalendarAlt className="text-pelican-ocean flex-shrink-0" />
                  <span>Monday-Friday: 8:30 AM - 5:00 PM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-6">
              Our Mission & Values
            </h2>
            <div className="max-w-3xl mx-auto mb-12">
              <div className="card bg-gradient-to-br from-pelican-ocean to-pelican-green text-white">
                <FaMapMarkedAlt className="text-5xl mx-auto mb-4" />
                <p className="text-xl leading-relaxed">
                  To provide essential mail and business services that make island life easier, 
                  while supporting our local community and maintaining the spirit of service that 
                  St. John has always known.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="text-pelican-coral mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-pelican-dark-green mb-3">
                  {value.title}
                </h3>
                <p className="text-pelican-green">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="section-padding bg-pelican-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-pelican-dark-green mb-4">
              More Than Just Business
            </h2>
            <p className="text-lg text-pelican-green max-w-2xl mx-auto">
              We're committed to being active members of the St. John community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <FaCoffee className="text-5xl text-pelican-coral mb-4" />
              <h3 className="text-xl font-bold text-pelican-dark-green mb-3">
                Supporting Education
              </h3>
              <p className="text-pelican-green">
                We partner with a Puerto Rican coffee company focused on providing scholarships for young women
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <FaUsers className="text-5xl text-pelican-ocean mb-4" />
              <h3 className="text-xl font-bold text-pelican-dark-green mb-3">
                Local Artisans
              </h3>
              <p className="text-pelican-green">
                Featuring products from St. John and St. Thomas artists and small businesses in our retail space
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <FaBuilding className="text-5xl text-pelican-yellow mb-4" />
              <h3 className="text-xl font-bold text-pelican-dark-green mb-3">
                Community Space
              </h3>
              <p className="text-pelican-green">
                Our space is available for community events, art shows, and children's activities after business hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sandy Cheeks LLC */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-br from-pelican-sand to-pelican-cream"
          >
            <h2 className="text-3xl font-bold text-pelican-dark-green mb-4 text-center">
              The Sandy Cheeks Story
            </h2>
            <p className="text-lg text-pelican-green mb-4">
              Crystal and Krista's partnership began three years before The Pelican Post, when they 
              formed <strong>Sandy Cheeks LLC</strong> to sell food and drinks at St. John events. 
              Their first venture together was at the St. John Celebration Food Fair.
            </p>
            <p className="text-lg text-pelican-green">
              That experience taught them how well they worked together and gave them the confidence 
              to take on something bigger. Today, Sandy Cheeks LLC is the parent company of The Pelican Post, 
              and their partnership continues to grow stronger with each challenge they overcome together.
            </p>
          </motion.div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Come Say Hi!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Stop by the pink building in Cruz Bay and experience the friendly, professional service 
              that's making island life easier for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/location" className="btn-secondary bg-white text-pelican-coral hover:bg-pelican-cream inline-flex items-center gap-2">
                Visit Us
                <FaArrowRight />
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white hover:text-pelican-coral">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
