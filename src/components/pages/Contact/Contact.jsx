// src/pages/Contact.js
import React, { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { Loader } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-blue-900 hover:text-green-500 transition"
      >
        {question}
        <span
          className={`ml-4 transform transition-transform ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      {open && <p className="mt-2 text-gray-700">{answer}</p>}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setSubmitMessage("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        to_name: "Uddheshya Group",
        to_email: import.meta.env.VITE_EMAILJS_CONTACT_EMAIL,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setSubmitMessage(
        "Thank you! Your message has been sent successfully. We'll get back to you soon."
      );
      handleCancel();

      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // useInView hooks
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen mt-16">
      <div className="container mx-auto px-6">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-green-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help your business thrive. Reach out for
            consultations, partnerships, or any inquiries.
          </p>
        </motion.div>

        {/* Contact Info & Form Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Left: Contact Info */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: -50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            {/* Heading */}
            <h2 className="text-3xl font-bold text-blue-950 mb-4 mt-8 text-center">
              Contact Information
            </h2>

            {/* Location Box */}
            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-6 -mt-8">
              <svg
                className="w-10 h-10 text-green-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-blue-950">
                  Location
                </h3>
                <p className="text-gray-700 block">
                  Gusingal Marg, Sanepa, Lalitpur, Nepal
                </p>
                <p className="text-gray-700 block">
                  180 Park Avenue North Northampton, United Kingdom
                </p>
              </div>
            </div>

            {/* Phone Box */}
            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-6">
              <svg
                className="w-10 h-10 text-green-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-blue-950">
                  Phone
                </h3>
                <a
                  href="tel:+9779805533602"
                  className="text-gray-700 hover:text-green-500 transition block"
                >
                  +977 - 9805533602
                </a>
                <a
                  href="tel:+9779805533603"
                  className="text-gray-700 hover:text-green-500 transition block"
                >
                  +977 - 9805533603
                </a>
              </div>
            </div>

            {/* Email Box */}
            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-6">
              <svg
                className="w-10 h-10 text-green-500 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-blue-950">
                  Email
                </h3>
                <a
                  href="mailto:info@uddheshyagroup.com"
                  className="text-gray-700 hover:text-green-500 transition"
                >
                  info@uddheshyagroup.com
                </a>
              </div>
            </div>

            {/* Social Media Box */}
            <div className="bg-white p-6 rounded-2xl shadow-xl flex items-start gap-6">
              <div className="flex-shrink-0 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 010 5.656l-3.536 3.536a4 4 0 01-5.656-5.656l1.414-1.414M10.172 13.828a4 4 0 010-5.656l3.536-3.536a4 4 0 015.656 5.656l-1.414 1.414"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-950">
                  Social Media
                </h3>
                <div className="flex flex-col space-y-4 text-gray-700">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61578545593783"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-green-500 transition"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V7.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" />
                    </svg>
                    <span>Facebook</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/uddheshya.group/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-green-500 transition"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/company/uddheshya-group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-green-500 transition"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.065-.926-2.065-2.065 0-1.138.92-2.065 2.065-2.065 1.139 0 2.065.927 2.065 2.065 0 1.139-.925 2.065-2.065 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@uddheshya.group"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-green-500 transition"
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                    <span>TikTok</span>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@UddheshyaGroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-green-500 transition"
                  >
                    <svg
                      className="w-7 h-7 fill-current"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-950 text-center">
              Send Us a Message
            </h2>

            {/* Success Message */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <p className="text-green-800 font-semibold text-center">
                  {submitMessage}
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <p className="text-red-800 font-semibold text-center">
                  {submitMessage}
                </p>
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <textarea
                name="message"
                placeholder="Your Message *"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full p-4 border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition disabled:bg-gray-100 disabled:cursor-not-allowed"
              ></textarea>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                  className="flex-1 py-4 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-red-500 hover:text-white transition transform hover:scale-105 shadow-lg disabled:bg-gray-200 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Google Map Section */}
      <section className="pb-24" ref={mapRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Find Us Here
            </h2>
            <p className="text-xl text-gray-600">
              Visit our office in Lalitpur for in-person consultations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mapInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-96"
          >
            <iframe
              src="https://www.google.com/maps?q=27.6885298,85.3084899&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Uddheshya Group Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-24 bg-gray" ref={faqRef}>
        <div className="container mx-auto px-6 max-w-4xl mt-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-blue-900 mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            <FAQItem
              question="How long does it take to get a response?"
              answer="We typically respond within an hour of inquiry on business days."
            />
            <FAQItem
              question="Can I schedule a consultation?"
              answer="Yes! Please contact us via the form or phone to schedule an appointment."
            />
            <FAQItem
              question="Do you offer remote services?"
              answer="Absolutely, we work with clients both locally and internationally via online platforms."
            />
            <FAQItem
              question="What services do you offer?"
              answer="We provide a full range of services designed to help your business grow — whether through marketing, branding, or digital solutions."
            />
            <FAQItem
              question="Do you redesign existing websites?"
              answer="Yes, we can revamp your current website to make it modern, fast, and visually appealing."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
