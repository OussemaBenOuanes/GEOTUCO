"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define navbar pages for dynamic rendering
const NAV_PAGES = [
  { label: "Home", slug: "" },
  { label: "About", slug: "about" },
  { label: "Services", slug: "services" },
  { label: "Pricing", slug: "pricing" },
  { label: "Contact", slug: "contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine if a nav link is active
  const isActive = (slug: string) => {
    if (slug === "") return pathname === "/" || pathname === "";
    // Match exact path or path starting with /slug (for subpages)
    return pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <img
              src="/GEOTUCO Logo Normal.svg"
              alt="GEOTUCO Logo"
              className="h-10 w-auto"
              style={{ display: 'block' }}
            />
          </Link>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center px-2 py-1 rounded text-[#189ab4] focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d={menuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M3 6h18M3 12h18M3 18h18"}
              stroke="#189ab4"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_PAGES.map(({ label, slug }) => (
            <Link
              key={label}
              href={slug ? `/${slug}` : '/'}
              className={
                isActive(slug)
                  ? "font-medium"
                  : "text-[#495867] font-medium hover:text-[#003365]"
              }
              style={
                isActive(slug)
                  ? {
                      background: "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      transition: "background 0.3s"
                    }
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </div>
        {/* Get Started Button */}
        <Link
          href="/get-started"
          className="hidden md:inline-block text-white font-bold px-6 py-2 rounded-lg transition-colors"
          style={{
            background: "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)",
            boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
            transition: "background 0.3s"
          }}
          onMouseEnter={e => {
            (e.target as HTMLElement).style.background =
              "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)";
          }}
          onMouseLeave={e => {
            (e.target as HTMLElement).style.background =
              "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)";
          }}
        >
          Get started
        </Link>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <div className="flex flex-col gap-3 mt-2">
            {NAV_PAGES.map(({ label, slug }) => (
              <Link
                key={label}
                href={slug ? `/${slug}` : '/'}
                className={
                  isActive(slug)
                    ? "font-medium"
                    : "text-[#495867] font-medium"
                }
                style={
                  isActive(slug)
                    ? {
                        background: "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        transition: "background 0.3s"
                      }
                    : undefined
                }
                onClick={() => setMenuOpen(false)}
                onMouseEnter={e => {
                  if (isActive(slug)) {
                    (e.target as HTMLElement).style.background =
                      "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)";
                  }
                }}
                onMouseLeave={e => {
                  if (isActive(slug)) {
                    (e.target as HTMLElement).style.background =
                      "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)";
                  }
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="text-white font-bold px-6 py-2 rounded-lg transition-colors mt-2 text-center"
              style={{
                background: "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)",
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                transition: "background 0.3s"
              }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.background =
                  "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)";
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.background =
                  "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)";
              }}
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
