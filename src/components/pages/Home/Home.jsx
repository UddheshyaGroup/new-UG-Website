import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css"

// Rocket animations (unchanged)
const rocketAnimations = [...Array(12)].map(() => ({
  initialX: Math.random() * 1200,
  initialY: 800,
  duration: 3 + Math.random() * 2,
  repeatDelay: Math.random() * 8,
  delay: Math.random() * 6,
}));

const Home = () => {
  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-950 via-blue-900 to-black text-white overflow-hidden px-4">
        {/* Background Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ x: [-100, 100, -100], y: [0, 100, 0] }}
            transition={{ repeat: Infinity, duration: 20 }}
            className="absolute w-80 h-80 bg-green-500/40 rounded-full blur-3xl -top-20 -left-20 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
          />
          <motion.div
            animate={{ x: [100, -100, 100], y: [100, -50, 100] }}
            transition={{ repeat: Infinity, duration: 25 }}
            className="absolute w-72 h-72 bg-blue-600/40 rounded-full blur-3xl bottom-0 right-0 md:w-80 md:h-80 lg:w-96 lg:h-96"
          />
          <motion.div
            animate={{ x: [0, -150, 0], y: [-50, 150, -50] }}
            transition={{ repeat: Infinity, duration: 30 }}
            className="absolute w-64 h-64 bg-purple-500/40 rounded-full blur-3xl top-1/4 left-1/3 md:w-72 md:h-72 lg:w-80 lg:h-80"
          />
          <motion.div
            animate={{ x: [150, 0, 150], y: [50, -100, 50] }}
            transition={{ repeat: Infinity, duration: 28 }}
            className="absolute w-56 h-56 bg-cyan-500/40 rounded-full blur-3xl bottom-1/4 right-1/4 md:w-64 md:h-64 lg:w-72 lg:h-72"
          />
        </div>

        <div className="container mx-auto relative z-10">
          {/* Mobile S/M/L: Stacked | md+ & lg+: Side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text – Always first on mobile */}
            <div className="leftSec text-left md:text-left order-2 md:order-1 mb-5 ">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl leading-tight font-bold mb-6
                           md:text-5xl
                           lg:text-6xl lg:leading-tighter"
              >
                <span className="typewriter block  md:mt-12">
                  We Don't Just Build Brands.
                </span>
                <span className="block mt-3">
                  <span className="text-green-400 typewriter2 inline-block">
                    We Engineer Growth.
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text text-center text-lg mb-10 max-w-2xl mx-auto md:mx-0 text-gray-300
                           md:text-xl
                           lg:text-2xl"
              >
                Strategic Business Development • Digital Services • Innovative
                Solutions • Scalable Results
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-green-500 text-black font-bold text-lg rounded-full hover:bg-green-400 transition transform hover:scale-105 shadow-2xl text-center"
                >
                  <span>Start Growing Today</span>
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition transform hover:scale-105 text-center"
                >
                  <span>See Our Work →</span>
                </Link>
              </motion.div>
            </div>

            {/* Feather Image */}
            <div className="flex justify-center order-1 md:order-2 mt-32">
              <motion.img
                src="/feather.png"
                alt="Floating Feather"
                initial={{ opacity: 0.8, scale: 0.9 }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [-5, 5, -5],
                  scale: [0.95, 1.05, 0.95],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-48 
                           md:w-72
                           lg:w-72 xl:w-[24rem]"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator – Visible only on Tablet & Desktop (≥768px) */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* ====================== PARTNERS MARQUEE ====================== */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <p className="text-2xl font-semibold text-gray-700 mb-10 md:text-3xl lg:text-4xl">
            Our Trusted Partners
          </p>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Row 1 */}
            <div className="flex animate-marquee-left gap-10 py-6">
              {[...Array(4)]
                .flatMap(() => [
                  { f: "svi.png", h: "h-20 md:h-24 lg:h-28" },
                  { f: "NAAV.png", h: "h-20 md:h-24 lg:h-28" },
                  { f: "Looniva.png", h: "h-24 md:h-32 lg:h-36" },
                  { f: "gypsy.png", h: "h-16 md:h-20 lg:h-24" },
                  { f: "hcop.png", h: "h-24 md:h-32 lg:h-36" },
                ])
                .map((c, i) => (
                  <img
                    key={i}
                    src={`/${c.f}`}
                    alt=""
                    className={`flex-shrink-0 ${c.h} object-contain filter grayscale hover:grayscale-0 transition`}
                  />
                ))}
            </div>

            {/* Row 2 */}
            <div className="flex animate-marquee-right gap-10 py-6">
              {[...Array(4)]
                .flatMap(() => [
                  { f: "svi.png", h: "h-20 md:h-24 lg:h-28" },
                  { f: "NAAV.png", h: "h-20 md:h-24 lg:h-28" },
                  { f: "Looniva.png", h: "h-24 md:h-32 lg:h-36" },
                  { f: "gypsy.png", h: "h-16 md:h-20 lg:h-24" },
                  { f: "hcop.png", h: "h-24 md:h-32 lg:h-36" },
                ])
                .map((c, i) => (
                  <img
                    key={i}
                    src={`/${c.f}`}
                    alt=""
                    className={`flex-shrink-0 ${c.h} object-contain filter grayscale hover:grayscale-0 transition`}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== SERVICES ====================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">
              What We Do Best
            </h2>
            <p className="text-lg text-gray-600 md:text-xl lg:text-2xl">
              End-to-end growth solutions under one roof
            </p>
          </div>

          {/* 1 col (mobile) → 3 col (md+) → still 3 col (lg+) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Strategic Marketing",
                icon: "📈",
                color: "from-green-400 to-emerald-600",
              },
              {
                title: "Web & App Development",
                icon: "💻",
                color: "from-blue-500 to-cyan-600",
              },
              {
                title: "Events & Campaigns",
                icon: "🎉",
                color: "from-purple-500 to-pink-600",
              },
              {
                title: "Content Creation",
                icon: "🎥",
                color: "from-orange-400 to-red-600",
              },
              {
                title: "Brand Strategy",
                icon: "💡",
                color: "from-yellow-400 to-amber-600",
              },
              {
                title: "Business Consulting",
                icon: "📊",
                color: "from-indigo-500 to-purple-600",
              },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${s.color}`} />
                <div className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-4xl">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 md:text-2xl lg:text-3xl">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                    From strategy to execution — we deliver measurable results.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== STATS ====================== */}
      <section className="py-20 lg:py-28 bg-blue-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "8+", label: "Satisfied Clients" },
              { num: "10+", label: "Projects Completed" },
              { num: "1+", label: "Year of Innovation" },
              { num: "100%", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-5xl font-bold text-green-400 md:text-6xl lg:text-7xl">
                  {stat.num}
                </h3>
                <p className="text-lg mt-4 md:text-xl lg:text-2xl">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PORTFOLIO TEASER ====================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Work That Speaks</h2>
          <p className="text-xl text-gray-600 mb-12">See how we've transformed businesses</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                logo: '/svi.png',
                alt: 'Client 1 Logo',
                detailText: 'Developed a custom website with Moodle LMS integration, boosting admissions by 65% through targeted lead generation.',
                smallText: 'Enhanced online learning & lead generation',
                logoSize: 'max-h-88',
              },
              {
                id: 2,
                logo: '/NAAV.png',
                alt: 'Client 2 Logo',
                detailText: 'Created compelling static & motion graphics and a TV commercial, amplifying brand awareness and enrollment growth.',
                smallText: 'Elevated brand presence with multi-channel promotion',
                logoSize: 'max-h-44',
              },
              {
                id: 3,
                logo: '/Looniva.png',
                alt: 'Client 3 Logo',
                detailText: 'Executed a location-based digital marketing strategy that increased sales by 30% and boosted community engagement.',
                smallText: 'Targeted local growth & increased sales',
                logoSize: 'max-h-56',
              },
            ].map(({ id, logo, alt, detailText, smallText, logoSize }) => (
              <motion.div
                key={id}
                className="group perspective-1000"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="relative h-80 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 rounded-3xl h-full flex items-center justify-center p-6 transition-all duration-300
          bg-transparent border-0
          group-hover:bg-gray-200 group-hover:border-2 group-hover:border-dashed"
                  >
                    <img
                      src={logo}
                      alt={alt}
                      className={`object-contain mx-auto ${logoSize}`}
                    />
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 bg-blue-900 rounded-3xl h-full [transform:rotateY(180deg)] backface-hidden p-6 text-white flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4">Project {id} Details</h3>
                    <p className="text-center mb-2">{detailText}</p>
                    <p className="text-sm italic opacity-75 mb-6">{smallText}</p>
                    <Link to="/portfolio" className="px-6 py-3 bg-green-500 text-black rounded-full hover:bg-green-400 transition">
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <Link to="/portfolio" className="inline-block mt-12 px-12 py-5 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition">
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* ====================== FINAL CTA WITH ROCKETS ====================== */}
      <section className="lastSec py-24 lg:py-32 bg-gradient-to-r from-green-600 to-emerald-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {rocketAnimations.map((anim, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl lg:text-5xl"
              initial={{ x: anim.initialX, y: anim.initialY, opacity: 0 }}
              animate={{ y: -200, opacity: [0, 1, 0.8, 0] }}
              transition={{
                duration: anim.duration,
                repeat: Infinity,
                repeatDelay: anim.repeatDelay,
                ease: "easeOut",
                delay: anim.delay,
              }}
            >
            🚀
            </motion.div>
          ))}
        </div>

        <div className="rtgBox container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rtgText text-4xl font-bold mb-8 md:text-5xl lg:text-6xl"
          >
            Ready to Grow Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rtgSubText text-xl mb-12 max-w-3xl mx-auto md:text-2xl lg:text-3xl"
          >
            Let's build something extraordinary together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
          >
            <Link
              to="/contact"
              className="gsn inline-block px-12 py-6 bg-white text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.7)] transition-all md:px-16 md:text-2xl"
            >
              <span>Get Started Now</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;