// src/pages/About.js
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { HiOutlineMail } from 'react-icons/hi';
import { FiTarget } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { motion, useMotionValue, useTransform, animate } from "motion/react";

const Counter = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2 });
      return controls.stop;
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};


const testimonials = [
  {
    name: "Smarika Sedhain",
    testimonial: "Vision without direction is merely imagination. Leadership, at its core, is about turning ideas into impact and guiding purpose into progress. At Uddheshya, the Executive Director stands at the intersection of creativity and clarity, steering every thought, every effort, and every dream toward a shared goal: to create work that not only speaks but lasts.",
  },
  {
    name: "Ishan Sedhain",
    testimonial: "In a world that shouts to be heard, clarity is the rarest sound. At Uddheshya, we believe that when your brand speaks its truth, even silence makes an impact. Nothing louder, nothing lesser.",
  },
  {
    name: "Avijat Niroula",
    testimonial: "We specialize in crafting and executing strategic initiatives that balance organizational growth with lasting impact. My role as CBDO at Uddheshya is pivotal in driving business development, leveraging my expertise in identifying and tapping into new opportunities through in-depth research, with a profound understanding of market dynamics and creative strategy.",
  },
  {
    name: "Sooyog Shrestha",
    testimonial: "Growth isn't just about numbers, it's about nurturing connections, building trust, and creating opportunities that last. At Uddheshya, the Business Development Manager bridges vision and value, turning conversations into collaborations and ideas into impact. Because real growth doesn't chase trends, it builds relationships that stand the test of time.",
  },
  {
    name: "Nitesh Shrestha",
    testimonial: "Ideas are everywhere, but only a few are felt. Creativity isn't about making things look good, it's about making them mean something. At Uddheshya, we shape imagination into identity, turning concepts into experiences that move people. Every color, every line, and every pause is intentional because true creativity doesn't just catch the eye; it stays in the mind.",
  },
  {
    name: "Susan Malakar",
    testimonial: "When words fall short, our visuals take over, because motion isn't just about movement; it's about meaning. Every frame we create carries purpose, and every transition tells a story. At Uddheshya, we move ideas frame by frame until they speak with emotion, direction, and truth.",
  },
  {
    name: "Parakram K.C.",
    testimonial: "In a world of pixels and possibilities, precision drives performance. At Uddheshya, we don't just write code—we craft experiences. From sleek front-end designs to robust back-end systems, every line serves a purpose. Great tech isn’t just about getting things done; it’s about creating smarter, seamless, and meaningful solutions where design and data come together..",
  },
  {
    name: "Srijal Dangol",
    testimonial: "Precision isn't just about numbers or codes, it's about clarity, consistency, and purpose. Behind every strategy, there's a structure; behind every creative spark, there's a system that makes it possible. At Uddheshya, we build that backbone where research meets technology, logic meets creativity, and every solution is engineered to make sense, stand strong, and serve meaning.",
  },
  {
    name: "Sujan Shrestha",
    testimonial: "Where creativity meets purpose, great design begins. Every detail tells a story and connects with people in meaningful ways. At Uddheshya, we turn ideas into designs that inspire and leave a lasting impression.",
  },
];

const team = [
  { name: "Smarika Sedhain", position: "Executive Director", image: "/images/team/smarika.png" },
  { name: "Ishan Sedhain", position: "Admin Manager", image: "/images/team/ishan.png" },
  { name: "Avijat Niroula", position: "Chief Business Development Officer", image: "/images/team/avijat.png" },
  { name: "Sooyog Shrestha", position: "Business Development Manager", image: "/images/team/sooyog.png" },
  { name: "Parakram K.C.", position: "Technical Lead", image: "/images/team/parakram.png" },
  { name: "Nitesh Shrestha", position: "Creative Head ", image: "/images/team/nitesh.png" },
  { name: "Susan Malakar", position: "Creative Lead", image: "/images/team/susan.png" },
  { name: "Srijal Dangol", position: "Research and Technical Officer", image: "/images/team/srijal.png" },
  { name: "Sujan Shrestha", position: "Creative Designer", image: "/images/team/sujan.png" },
].map(member => {
  const testimonial = testimonials.find(t => t.name === member.name);
  return {
    ...member,
    testimonial: testimonial?.testimonial || 'Coming soon...'
  };
});

const TeamCard = ({ member, index, teamInView }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={teamInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="h-96 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* FRONT SIDE - Photo + Name */}
        <div 
          className="absolute inset-0 bg-white flex flex-col rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="h-56 w-full overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover object-top transition-transform duration-500"
              style={{ transform: isFlipped ? 'scale(1.1)' : 'scale(1)' }}
            />
          </div>
          <div className="p-6 text-center flex-1 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
            <p className="text-blue-700 font-semibold text-sm mt-1">
              {member.position}
            </p>
          </div>
          <div className="h-1 bg-blue-700"></div>
        </div>

        {/* BACK SIDE - Quote */}
        <div 
          className="absolute inset-0 bg-white flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-gray-200"
          style={{ 
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="text-left overflow-y-auto max-h-full">
            <blockquote className="text-[12px] text-gray-800 italic leading-tight">
              "{member.testimonial}"
            </blockquote>
            <p className="mt-6 text-sm font-semibold text-blue-700">
              — {member.name}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [groupRef, groupInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-32 pb-24 md:pt-40 lg:pt-48 bg-gray-50" ref={heroRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-6xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-10">
              We Are <span className="text-blue-950">Uddheshya</span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-16 px-4">
              A passionate team of strategists, business development experts, researchers, growth engineers, and creators committed to transforming businesses in Nepal and beyond. We don't just work for you — we grow with you.
            </p>

            <div className="flex flex-wrap justify-center gap-12 md:gap-20">

              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-bold text-green-400">
                  <Counter to={30} />+
                </h3>
                <p className="text-lg text-gray-600 mt-3">Expert Team Members</p>
              </div>

              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-bold text-green-400">
                  <Counter to={15} />+
                </h3>
                <p className="text-lg text-gray-600 mt-3">Projects Delivered</p>
              </div>

              <div className="text-center">
                <h3 className="text-5xl md:text-6xl font-bold text-green-400">
                  <Counter to={100} />%
                </h3>
                <p className="text-lg text-gray-600 mt-3">Client Commitment</p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW INFO SECTION */}
      <section className="py-24 bg-white -mt-16">
       <div className="container mx-auto px-6 max-w-10xl">

          {/* Animation Hook */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 text-center"
          >

            {[
              {
                icon: <HiOutlineMail className="mx-auto text-blue-900 mb-6 h-16 w-16" />,
                title: "Say Hello",
                desc: "Come say Hi to us. We're eager to hear about your brand's story and dreams.",
              },
              {
                icon: <FiTarget className="mx-auto text-blue-900 mb-6 h-16 w-16" />,
                title: "Think Big",
                desc: "Using the latest tools to make your brand shine brighter than the rest.",
              },
              {
                icon: <FaRocket className="mx-auto text-blue-900 mb-6 h-16 w-16" />,
                title: "Deliver",
                desc: "Developing visually striking, story-driven digital experiences.",
              },
              {
                icon: <FaChartLine className="mx-auto text-blue-900 mb-6 h-16 w-16" />,
                title: "Grow Smart",
                desc: "Tracking and improving your campaigns every day for the best results.",
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                {item.icon}
                <h3 className="text-3xl font-bold text-green-400 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg max-w-xs mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>


      {/* TEAM SECTION */}
      <section className="py-24 bg-white -mt-16" ref={teamRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-green-400">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The brilliant minds driving your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {team.map((member, i) => (
              <TeamCard 
                key={i}
                member={member}
                index={i}
                teamInView={teamInView}
              />
            ))}
          </div>
        </div>
      </section>


      {/* GROUP PHOTO SECTION */}
      <section className="py-24 bg-gray-50" ref={groupRef}>
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={groupInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-bold mb-12"
          >
            One Team. One <span className="text-green-400">Vision.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={groupInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <div className="bg-gray-300 border-4 border-dashed rounded-3xl h-96 md:h-[600px] flex items-center justify-center text-3xl font-bold text-gray-600">
                [ COMING SOON... ]
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;