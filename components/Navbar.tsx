"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Define navbar pages for dynamic rendering
const NAV_PAGES = [
  { label: "Home", slug: "" },
  { label: "About", slug: "about" },
  // Services will be handled as a dropdown, so remove its children from here
  { label: "Services", slug: "services", children: [
      { label: "Geotechnical Engineering", slug: "geotechnical-engineering" },
      { label: "Geotechnical Tests", slug: "geotechnical-tests" }
    ]
  },
  { label: "Softwares", slug: "softwares", children: [
      { label: "GEOLOGA®", slug: "geologa" },
      { label: "GEOPRES®", slug: "geopres" },
      { label: "GEOPREC®", slug: "geoprec" },
      { label: "GEOSTAT®", slug: "geostat" },
      { label: "GEODYNA®", slug: "geodyna" },
      { label: "GEOGRAN®", slug: "geogran" },
      { label: "GEOLIMA®", slug: "geolima" },
      { label: "GEOCOMP®", slug: "geocomp" },
      { label: "GEOCONS®", slug: "geocons" },
      { label: "GEOGONF®", slug: "geogonf" },
      { label: "GEOCISA®", slug: "geocisa" },
      { label: "GEOPROC®", slug: "geoproc" }
    ]
  },
  { label: "Contact", slug: "contact" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // Track which dropdown is open
  const dropdownTimeout = React.useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Helper to determine if a nav link is active
  const isActive = (slug: string) => {
    if (slug === "") return pathname === "/" || pathname === "";
    // For software children, match /geoprog/[slug]
    if (
      NAV_PAGES.some(
        (p) => p.children && p.children.some((c) => c.slug === slug)
      )
    ) {
      return pathname === `/geoprog/${slug}` || pathname.startsWith(`/geoprog/${slug}/`);
    }
    // Default: match /[slug]
    return pathname === `/${slug}` || pathname.startsWith(`/${slug}/`);
  };

  // Helper to determine if a parent (with children) is active
  const isParentActive = (children: { slug: string }[]) => {
    return children.some(child => isActive(child.slug));
  };

  function setServicesOpen(arg0: (v: any) => boolean): void {
    throw new Error('Function not implemented.');
  }

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
          {NAV_PAGES.map(({ label, slug, children }) => (
            !children ? (
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
            ) : (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                  setDropdownOpen(slug);
                }}
                onMouseLeave={() => {
                  dropdownTimeout.current = setTimeout(() => setDropdownOpen(null), 120);
                }}
              >
                <Link
                  href={`/${slug}`}
                  className={
                    isActive(slug) || isParentActive(children)
                      ? "font-medium"
                      : "text-[#495867] font-medium hover:text-[#003365]"
                  }
                  style={
                    isActive(slug) || isParentActive(children)
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
                {/* Dropdown */}
                <div
                  className={`absolute top-full mt-2 w-max px-2 bg-white border border-gray-100 rounded-lg shadow-lg z-20
                    ${dropdownOpen === slug ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                  style={{
                    left: "50%",
                    transform: dropdownOpen === slug
                      ? "translate(-50%, 0) scale(1)"
                      : "translate(-50%, 16px) scale(0.97)",
                    transition: "opacity 250ms cubic-bezier(.4,0,.2,1), transform 250ms cubic-bezier(.4,0,.2,1)",
                    willChange: "opacity, transform"
                  }}
                  onMouseEnter={() => {
                    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                    setDropdownOpen(slug);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeout.current = setTimeout(() => setDropdownOpen(null), 120);
                  }}
                >
                  <div className="flex flex-col py-2">
                    {children.map((child) => (
                      <Link
                        key={child.label}
                        href={`/geoprog/${child.slug}`}
                        className={
                          isActive(child.slug)
                            ? "px-5 py-2 font-medium"
                            : "px-5 py-2 text-[#495867] font-medium hover:text-[#003365]"
                        }
                        style={
                          isActive(child.slug)
                            ? {
                                background: "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                transition: "background 0.3s"
                              }
                            : undefined
                        }
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
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
            {NAV_PAGES.map(({ label, slug, children }) =>
              !children ? (
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
                >
                  {label}
                </Link>
              ) : (
                <div key={label}>
                  <button
                    className="w-full text-left font-medium py-2"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {label}
                  </button>
                  {setServicesOpen && (
                    <div className="flex flex-col pl-4">
                      {children.map((child) => (
                        <Link
                          key={child.label}
                          href={`/geoprog/${child.slug}`}
                          className={
                            isActive(child.slug)
                              ? "font-medium"
                              : "text-[#495867] font-medium"
                          }
                          style={
                            isActive(child.slug)
                              ? {
                                  background: "linear-gradient(85deg, #003365 54.3%, #0057AC 100%)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  transition: "background 0.3s"
                                }
                              : undefined
                          }
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
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
