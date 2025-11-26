import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const topBarRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    if (path === '/portfolio') {
      return location.pathname === '/portfolio';
    }
    return location.pathname === path;
  };

  const [visible, setVisible] = useState(true);
  const [topBarHeight, setTopBarHeight] = useState(0);

  // Dropdown states
  const [dropdownOpen, setDropdownOpen] = useState(false); // Portfolio desktop dropdown
  const dropdownRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile main menu open
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false); // Mobile Portfolio submenu open

  const categories = ['Web Development', 'Digital Marketing', 'Graphic Design', 'Video Production', 'UI/UX Design'];

  useEffect(() => {
    const updateHeight = () => {
      if (topBarRef.current) {
        setTopBarHeight(topBarRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY <= 80);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigateAndScrollTop = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobilePortfolioOpen(false);
  };

  const onCategoryClick = (category) => {
    if (category === 'All') {
      navigateAndScrollTop('/portfolio');
    } else {
      navigateAndScrollTop(`/portfolio?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <>
      {/* Top Small Navbar */}
      <div
        ref={topBarRef}
        className={`fixed left-0 w-full bg-blue-950 text-white py-2 text-sm z-50 transition-transform duration-300 ease-in-out ${
          visible ? 'translate-y-0' : '-translate-y-full'
        } hidden sm:flex`} 
      >
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Lalitpur, Nepal / Northampton, United Kingdom
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 sm:mt-0">
            <a href="tel:+9779805533602" className="flex items-center gap-2 hover:text-green-300">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +977-9805533602
            </a>
            <span className="hidden sm:block h-5 w-px bg-gray-400"></span>
            <a href="mailto:info@uddheshyagroup.com" className="hover:text-green-300">
              info@uddheshyagroup.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className="fixed left-0 w-full bg-white shadow-md z-40 transition-all duration-300 ease-in-out top-0 sm:top-[var(--topbar-height)]"
        style={{ '--topbar-height': `${visible ? topBarHeight : 0}px` }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo(0, 0)}>
            <img src="/UddLogo.png" alt="Uddheshya Group" className="h-16" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-10 text-gray-700 font-medium relative">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/services', label: 'Services' },
              { to: '/portfolio', label: 'Portfolio' },
              { to: '/career', label: 'Career' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => {
              if (item.label === 'Portfolio') {
                return (
                  <li key={item.to} className="relative" ref={dropdownRef}>
                    <div className="flex items-center space-x-1">
                      <button
                        type="button"
                        onClick={() => navigateAndScrollTop('/portfolio')}
                        className={`relative pb-2 transition-all duration-300 ${
                          isActive(item.to) ? 'text-blue-950 font-bold' : 'hover:text-blue-800'
                        }`}
                      >
                        Portfolio
                      </button>

                      <button
                        type="button"
                        aria-label="Toggle portfolio dropdown"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className={`relative pb-2 transition-all duration-300 focus:outline-none ${
                          dropdownOpen ? 'text-blue-950 font-bold' : 'hover:text-blue-800'
                        }`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {dropdownOpen && (
                      <ul className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        {categories.map((cat) => (
                          <li key={cat}>
                            <button
                              onClick={() => onCategoryClick(cat)}
                              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 focus:bg-blue-100 focus:outline-none"
                            >
                              {cat}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.to}>
                  <button
                    type="button"
                    onClick={() => navigateAndScrollTop(item.to)}
                    className={`relative pb-2 transition-all duration-300 ${
                      isActive(item.to) ? 'text-blue-950 font-bold' : 'hover:text-blue-800'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-1 transition-transform duration-300 origin-left ${
                        isActive(item.to)
                          ? 'bg-blue-600 scale-x-100'
                          : 'bg-blue-800 scale-x-0 hover:scale-x-100'
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-3xl text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {/* Hamburger icon */}
            {mobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-40">
            <ul className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/career', label: 'Career' },
                { to: '/contact', label: 'Contact' },
              ].map((item) => {
                if (item.label === 'Portfolio') {
                  return (
                    <li key={item.to}>
                      <button
                        onClick={() => setMobilePortfolioOpen((prev) => !prev)}
                        className="flex justify-between w-full items-center text-left focus:outline-none"
                      >
                        <span
                          className={`pb-2 transition-all duration-300 ${
                            isActive(item.to) ? 'text-blue-950 font-bold' : ''
                          }`}
                        >
                          Portfolio
                        </span>
                        <svg
                          className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
                            mobilePortfolioOpen ? 'rotate-180' : ''
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {mobilePortfolioOpen && (
                        <ul className="pl-6 mt-2 space-y-2">
                          {categories.map((cat) => (
                            <li key={cat}>
                              <button
                                onClick={() => onCategoryClick(cat)}
                                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100 focus:bg-blue-100 focus:outline-none rounded"
                              >
                                {cat}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.to}>
                    <button
                      onClick={() => navigateAndScrollTop(item.to)}
                      className={`pb-2 w-full text-left ${
                        isActive(item.to) ? 'text-blue-950 font-bold' : 'hover:text-blue-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
