"use client";
import React from 'react';
import Link from 'next/link';

// Define navbar pages for dynamic rendering
const NAV_PAGES = [
  { label: "Home", slug: "" },
  { label: "About", slug: "about" },
  { label: "Services", slug: "services" },
  { label: "Pricing", slug: "pricing" },
  { label: "Contact", slug: "contact" }
];

export default function Navbar() {
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
        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          {NAV_PAGES.map(({ label, slug }) => (
            <Link
              key={label}
              href={slug ? `/${slug}` : '/'}
              className={
                label === "Home"
                  ? "text-[#189ab4] font-medium hover:underline"
                  : "text-[#495867] font-medium hover:text-[#189ab4]"
              }
            >
              {label}
            </Link>
          ))}
        </div>
        {/* Get Started Button */}
        <Link
          href="/get-started"
          className="bg-[#189ab4] text-white font-bold px-6 py-2 rounded-lg hover:bg-[#1687a7] transition-colors"
          style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.04)' }}
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}
