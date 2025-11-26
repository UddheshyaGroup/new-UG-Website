// src/pages/Services.js
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';

const services = [
  {
    title: 'Business Development',
    icon: '🚀',
    description: 'Driving growth strategies and partnerships to scale your business.',
    details: 'Tailored plans and market insights to accelerate expansion.',
    color: 'from-green-400 to-emerald-600',
  },
  {
    title: 'Web Design & SEO',
    icon: '🌐',
    description: 'Creating beautiful, responsive websites optimized for search engines.',
    details: 'Enhanced user experience and higher rankings to boost traffic.',
    color: 'from-blue-400 to-cyan-600',
  },
  {
    title: 'Social Media Management',
    icon: '📱',
    description: 'Engaging content and consistent presence across social platforms.',
    details: 'Building communities and growing your brand’s digital footprint.',
    color: 'from-purple-400 to-pink-600',
  },
  {
    title: 'Event Promotion & Coordination',
    icon: '🎉',
    description: 'Planning and marketing events that leave a lasting impact.',
    details: 'Seamless execution from concept to follow-up.',
    color: 'from-purple-400 to-pink-600',
  },
  {
    title: 'Content Creation (Reels, Design, Campaign)',
    icon: '🎥',
    description: 'Producing captivating videos, graphics, and campaigns.',
    details: 'Story-driven content that resonates and converts.',
    color: 'from-orange-400 to-red-600',
  },
  {
    title: 'Influencer and Community Marketing',
    icon: '🤝',
    description: 'Leveraging influencers and communities to amplify your message.',
    details: 'Authentic engagement to build trust and loyalty.',
    color: 'from-yellow-400 to-amber-600',
  },
  {
    title: 'YouTube & Podcast Channel Production',
    icon: '🎙️',
    description: 'Full production services for audio and video channels.',
    details: 'From scripting to publishing, grow your audience effectively.',
    color: 'from-indigo-400 to-purple-600',
  },
  // {
  //   title: 'Hospitality & Entertainment Marketing',
  //   icon: '🏨',
  //   description: 'Marketing strategies tailored for hospitality and entertainment sectors.',
  //   details: 'Attract and retain customers with targeted campaigns.',
  //   color: 'from-red-400 to-pink-600',
  // },
  {
    title: 'Paid Advertising & Media Buying',
    icon: '💰',
    description: 'Optimizing ad spend for maximum ROI across platforms.',
    details: 'Strategic media buying and campaign management.',
    color: 'from-blue-600 to-indigo-800',
  },
  {
    title: 'Branding & Identity Development',
    icon: '🎨',
    description: 'Crafting compelling brand identities that stand out.',
    details: 'Logo design, messaging, and cohesive visual language.',
    color: 'from-pink-400 to-red-600',
  },
  {
    title: 'Research & Analysis',
    icon: '📊',
    description: 'Data-driven insights to inform business and marketing decisions.',
    details: 'Market research, competitor analysis, and performance tracking.',
    color: 'from-green-500 to-emerald-700',
  },
  {
    title: 'Educational Campaigns & Conference Management',
    icon: '🎓',
    description: 'Organizing impactful educational events and promotional campaigns.',
    details: 'Engaging stakeholders through well-planned initiatives.',
    color: 'from-yellow-500 to-amber-700',
  },
  {
    title: 'Brand Promotion',
    icon: '📢',
    description: 'Amplifying your brand’s voice through targeted promotional strategies.',
    details: 'Integrated campaigns to increase awareness and loyalty.',
    color: 'from-purple-500 to-pink-700',
  },
];

const Services = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, threshold: 0.2 });

  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, threshold: 0.1 });

  const journeyRef = useRef(null);
  const journeyInView = useInView(journeyRef, { once: true, threshold: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
    hover: { scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.15)' },
  };

  const journeySteps = [
    { step: 1, title: 'Discovery', desc: 'We analyze your business needs and goals.' },
    { step: 2, title: 'Strategy', desc: 'Craft a customized service plan.' },
    { step: 3, title: 'Execution', desc: 'Implement with precision and agility.' },
    { step: 4, title: 'Optimization', desc: 'Measure, refine, and scale for maximum impact.' },
  ];

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.7 },
    }),
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
            Our <span className="text-green-400">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-12"
          >
            Comprehensive, innovative solutions designed to propel your business forward in today’s dynamic market.
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
              Get a Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="container mx-auto px-6 -mt-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-">
            {services.map((service, i) => (
              <Link to="/contact">
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                whileHover="hover"
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8 text-center">
                  <motion.div
                    className="text-6xl mb-6"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-sm text-gray-500 italic">{service.details}</p>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unique: Service Journey Timeline */}
      <section ref={journeyRef} className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center mb-16 text-blue-900"
          >
            Our Service <span className="text-green-500">Journey</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

            {journeySteps.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={stepVariants}
                initial="hidden"
                animate={journeyInView ? "visible" : "hidden"}
                className={`flex items-center mb-16 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2 px-8">
                  <div className="serviceBox bg-white p-6 rounded-2xl shadow-lg">
                    <h3 className="stitle text-2xl font-bold mb-2 text-green-500">Step {step.step}: {step.title}</h3>
                    <p className="sdesc text-gray-600">{step.desc}</p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-md">
                    {step.step}
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl mb-12 max-w-3xl mx-auto"
          >
            Discover how our services can drive your success.
          </motion.p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-green-500 text-black font-bold rounded-full hover:bg-green-600 transition transform hover:scale-105 shadow-2xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
