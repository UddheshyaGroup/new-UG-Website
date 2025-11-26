import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-blue-950 text-white py-12 px-4 sm:px-6 md:py-16 md:px-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Column - Logo + Social Icons */}
        <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/White.png"
            alt="Uddheshya Group"
            className="h-20 sm:h-24 mb-6 sm:mb-8 transition-all duration-300 hover:filter hover:drop-shadow-[0_0_10px_white]"
          />

          {/* Slogan Text */}
          <p className="text-base sm:text-lg font-semibold mb-6 text-green-400 max-w-xs">
            We Build, Discover, Design, Host and Code.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 justify-center md:justify-start">
            {/* social icons here unchanged */}
            <a
              href="https://www.facebook.com/profile.php?id=61578545593783"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V7.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.325-.597 1.325-1.324V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/uddheshya.group/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/uddheshya-group"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.065-.926-2.065-2.065 0-1.138.92-2.065 2.065-2.065 1.139 0 2.065.927 2.065 2.065 0 1.139-.925 2.065-2.065 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@uddheshya.group"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@UddheshyaGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition duration-300"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section - Useful Links */}
        <div className="md:col-span-3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-6 text-green-400 uppercase tracking-wider">
            Useful Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="hover:text-white transition duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="hover:text-white transition duration-300"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Middle Section - Our Services */}
        <div className="md:col-span-3 text-center md:text-left hidden md:block">
          <h3 className="text-lg font-semibold mb-6 text-green-400 uppercase tracking-wider">
            Our Services
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link
                to="/services"
                className="hover:text-white transition duration-300"
              >
                Strategic Marketing
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition duration-300"
              >
                Business Consulting
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition duration-300"
              >
                Web & App Development
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition duration-300"
              >
                Content Creation & Branding
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition duration-300"
              >
                Event & Campaign Management
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Column - Company Information */}
        <div className="md:col-span-3 text-center md:text-left px-4 sm:px-6 md:px-0">
          <h3 className="text-lg font-semibold mb-6 text-green-400 uppercase tracking-wider">
            Get in Touch
          </h3>
          <div className="space-y-5 text-gray-300 max-w-xs mx-auto md:mx-0">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <svg
                className="w-6 h-6 text-green-400 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-center sm:text-left">
                <p className="font-medium text-white">Office Address</p>
                <p>Sanepa, Lalitpur, Nepal</p>
                <p>Northampton, United Kingdom</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <svg
                className="w-6 h-6 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a
                href="tel:+9779805533602"
                className="hover:text-white transition"
              >
                +977-9805533602
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <svg
                className="w-6 h-6 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a
                href="mailto:info@uddheshyagroup.com"
                className="hover:text-white transition break-all"
              >
                info@uddheshyagroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm -mb-8">
        <p>
          &copy; {new Date().getFullYear()} Uddheshya Group. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
