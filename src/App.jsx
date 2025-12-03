import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home/Home';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Services from './components/pages/Services/Services';
import Career from './components/pages/Career/Career';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import { Analytics } from "@vercel/analytics/react"
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <Analytics />
    </Router>
  );
}

export default App;