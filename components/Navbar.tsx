"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (optional, if using next/router)
  // useEffect(() => {
  //   setMenuOpen(false);
  // }, [router.pathname]);

  return (
    <nav
      className="w-full bg-white shadow-md sticky top-0 z-10 transition-transform"
      style={{
        transform: showNavbar ? 'translateY(0)' : 'translateY(-110%)'
      }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        <Link
          href="/"
          className="font-extrabold text-xl md:text-2xl"
          style={{
            color: '#2a4d69',
            letterSpacing: '1px',
            textDecoration: 'none'
          }}
        >
          GEOTUCO
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          aria-label="Open menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span
            className={`block h-0.5 w-6 rounded bg-[#2a4d69] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded bg-[#2a4d69] transition-all duration-200 my-1 ${menuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded bg-[#2a4d69] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          ></span>
        </button>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/about" style={{ color: '#4b86b4', textDecoration: 'none', fontWeight: 500 }}>About</Link>
          <Link href="/services" style={{ color: '#4b86b4', textDecoration: 'none', fontWeight: 500 }}>Services</Link>
          <button
            type="button"
            style={{
              background: '#4b86b4',
              color: '#fff',
              padding: '0.5rem 1.2rem',
              borderRadius: 6,
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => { /* Add modal or contact logic here if needed */ }}
          >
            Contact
          </button>
          <form
            onSubmit={e => { e.preventDefault(); /* implement search logic here if needed */ }}
            className="flex items-center ml-6"
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 rounded border border-[#c7e0f4] text-base outline-none mr-2 bg-[#f7f9fa]"
              style={{ fontSize: '1rem' }}
            />
            <button
              type="submit"
              style={{
                background: '#4b86b4',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '0.4rem 1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 bg-white shadow ${menuOpen ? 'max-h-[500px] py-4 px-4' : 'max-h-0 overflow-hidden py-0 px-0'}`}
        style={{ borderTop: menuOpen ? '1px solid #e0e6ed' : 'none' }}
      >
        <div className="flex flex-col gap-4">
          <Link
            href="/about"
            style={{ color: '#4b86b4', textDecoration: 'none', fontWeight: 500 }}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            style={{ color: '#4b86b4', textDecoration: 'none', fontWeight: 500 }}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <button
            type="button"
            style={{
              background: '#4b86b4',
              color: '#fff',
              padding: '0.5rem 1.2rem',
              borderRadius: 6,
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => { setMenuOpen(false); /* Add modal or contact logic here if needed */ }}
          >
            Contact
          </button>
          <form
            onSubmit={e => { e.preventDefault(); setMenuOpen(false); /* implement search logic here if needed */ }}
            className="flex items-center mt-2"
          >
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 rounded border border-[#c7e0f4] text-base outline-none mr-2 bg-[#f7f9fa] flex-1"
              style={{ fontSize: '1rem' }}
            />
            <button
              type="submit"
              style={{
                background: '#4b86b4',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '0.4rem 1rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
