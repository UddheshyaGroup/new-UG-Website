// src/pages/Portfolio.js
import React, { useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { FiLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Comprehensive Digital Transformation',
    client: 'Siddhartha Vanasthali Panauti',
    image: '/svi.png',
    imageHeight: 'h-44',
    description: 'Developed a custom website for the Bachelors of Aviation Management program with seamless Moodle LMS integration for enhanced online learning.',
    services: ['Web Development', 'LMS Integration', 'Graphic Design (Static & Motion)', 'Social Media Content', 'Digital Marketing', 'Lead Generation'],
    results: 'Generated high-quality lead inquiries and boosted admissions by 65% through targeted campaigns.',
    link: 'https://siddharthavanasthali.edu.np/',
  },
  {
    title: 'Dynamic Branding & Promotion',
    client: 'Nepal Adarsha Awasiya Vidhyalaya',
    image: '/NAAV.png',
    imageHeight: 'h-48',
    description: 'Created engaging static and motion design posts alongside a high-production television commercial to elevate the institute\'s visibility.',
    services: ['Graphic Design (Static & Motion)', 'Video Production (TV Commercial)', 'Digital Marketing'],
    results: 'Amplified brand awareness and supported enrollment growth through multi-channel promotion.',
    link: 'https://www.google.com/search?q=nepal+adarsha+awasiya+vidyalaya&sxsrf=AE3TifMPG2hf2iEvP1bLX4x21wzUGL_JAw%3A1763876097914&gs_ssp=eJwFwU0OQDAQBtDYijvoxtoogzqCW3xtp34iIiSlt_deXtRL3TQmxpuHnbKpoq81hq0f2LA46yRM9Gmx3AfuSMSNGjSXp1w4FDzuZ4XCi2dLUHHzCQcSfk--G4I',
  },
  {
    title: 'Targeted Local Growth Strategy',
    client: 'Looniva Edu Mart',
    image: '/Looniva.png',
    imageHeight: 'h-88',
    description: 'Designed and executed a location-based digital marketing strategy focused on stationery, sports, and music supplies to dominate the local market.',
    services: ['Digital Marketing', 'Social Media Campaigns', 'Targeted Advertisements', 'Lead Generation'],
    results: 'Generated inquiries and increased sales by 30% through enhanced online presence and community engagement.',
    link: 'https://share.google/b7CDmQUMyz6RhbjJp',
  },
  {
    title: 'Music-Inspired Website Design',
    client: 'Hot Club of Patan',
    image: '/hcop.png',
    imageHeight: 'h-88',
    description: 'Crafted a sleek, music-themed website to showcase events, artists, and the vibrant jazz community.',
    services: ['Web Development', 'UI/UX Design'],
    results: 'Brought the musical spirit online with modern layouts and warm visuals for better audience connection.',
    link: 'https://www.facebook.com/HotClubOfPatan/',
  },
  {
    title: 'Artistic Jazz Community Platform',
    client: 'Gypsy Swing Patan',
    image: '/gypsy.png',
    imageHeight: 'h-44',
    description: 'Developed a lively website blending vintage charm with modern design to highlight performances and cultural contributions.',
    services: ['Web Development', 'UI/UX Design'],
    results: 'Enhanced online representation, fostering community engagement in Nepal\'s jazz scene.',
    link: 'https://www.google.com/search?q=gypsy+swing+patan&ie=UTF-8',
  },
 {
  title: 'Expert Social Media Empowerment',
  client: 'Vedas College',
  image: '/vedas.png',
  imageHeight: 'h-44',
  description: 'Produced static and motion design posts to drive admissions through compelling visual content.',
  services: ['Social Media Strategy', 'Team Training & Workshops', 'Content Planning', 'Community Engagement Techniques', 'Performance Analytics'],
  results: 'Equipped the in-house team with the skills to independently manage and grow their platforms, leading to a more dynamic and engaged online community.',
  link: 'https://www.google.com/search?q=vedas+college&ie=UTF-8',
  },
  {
  title: 'Strategic Business Development Acceleration',
  client: 'MPercept Technology',
  image: '/mPercept.png',
  imageHeight: 'h-44',
  description: 'Delivered targeted business development support to MPercept Technology strengthen their market positioning and expand growth opportunities.',
  services: ['Business Development Strategy', 'Market Positioning', 'Lead Generation Frameworks', 'Partnership Mapping', 'Sales Enablement Support'],
  results: 'Enabled the team to adopt a structured and scalable business development approach, resulting in clearer value communication, stronger client pipelines and improved outreach effectiveness.',
  link: 'https://www.google.com/search?q=mpercept+technology&oq=mPer&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIPCAgQLhgKGMcBGNEDGIAEMgYICRAuGEDSAQgyMjM4ajBqMagCALACAA&sourceid=chrome&ie=UTF-8',
  },
];

const Portfolio = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, threshold: 0.2 });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, threshold: 0.1 });

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.services.some(service => service.toLowerCase().includes(selectedCategory.toLowerCase())));

  const categories = ['All', 'Web Development', 'Digital Marketing', 'Graphic Design', 'Video Production', 'UI/UX Design'];

  const handleCategoryChange = (category) => {
    setSearchParams({ category });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
    hover: { scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.15)' },
  };

  return (
    <div className="pt-32 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden"
      >
        {/* Animated Color Blobs */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [-100, 100, -100], y: [0, 100, 0] }}
            transition={{ repeat: Infinity, duration: 20 }}
            className="absolute w-96 h-96 bg-green-500/40 rounded-full blur-3xl -top-20 -left-20"
          />

          <motion.div
            animate={{ x: [100, -100, 100], y: [100, -50, 100] }}
            transition={{ repeat: Infinity, duration: 25 }}
            className="absolute w-80 h-80 bg-blue-600/40 rounded-full blur-3xl bottom-0 right-0"
          />

          <motion.div
            animate={{ x: [0, -150, 0], y: [-50, 150, -50] }}
            transition={{ repeat: Infinity, duration: 30 }}
            className="absolute w-72 h-72 bg-purple-500/40 rounded-full blur-3xl top-1/4 left-1/3"
          />

          <motion.div
            animate={{ x: [150, 0, 150], y: [50, -100, 50] }}
            transition={{ repeat: Infinity, duration: 28 }}
            className="absolute w-64 h-64 bg-cyan-500/40 rounded-full blur-3xl bottom-1/4 right-1/4"
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our <span className="text-green-400">Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12"
          >
            Showcasing transformative projects that drive real business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link
              to="/contact"
              className="inline-block px-12 py-5 bg-green-500 text-black font-bold rounded-full hover:bg-green-600 transition transform hover:scale-105 shadow-2xl"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ADD YOUR TEXT HERE */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-6 text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Checkout Our Recent Projects
          </h2>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-8 bg-white border-b border-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section ref={gridRef} className="py-24 bg-white -mt-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={gridInView ? "visible" : "hidden"}
                whileHover="hover"
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 group"
              >
                <motion.div
                  className="relative h-48 flex items-center justify-center bg-gray-100 group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`object-contain ${project.imageHeight}`}
                  />

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title={`Open ${project.title}`}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                    >
                      <FiLink size={40} className="text-white" />
                    </a>
                  )}
                </motion.div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-blue-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p><span className="font-medium text-gray-700">Client:</span> {project.client}</p>
                    <p><span className="font-medium text-gray-700">Services:</span> {project.services.join(', ')}</p>
                    <p><span className="font-medium text-gray-700">Results:</span> {project.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA
      <section ref={ctaRef} className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8"
          >
            Inspired by Our Work?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl mb-12 max-w-3xl mx-auto"
          >
            Let's create your success story together.
          </motion.p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition transform hover:scale-105 shadow-2xl"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Portfolio;
