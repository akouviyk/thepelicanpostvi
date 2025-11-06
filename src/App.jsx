import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import MailboxRental from './pages/MailboxRental';
import PackageReceiving from './pages/PackageReceiving';
import Pricing from './pages/Pricing';
import Location from './pages/Location';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/mailboxes" element={<MailboxRental />} />
            <Route path="/services/package-receiving" element={<PackageReceiving />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/location" element={<Location />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
