"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

export const FooterStyles = () => (
  <style jsx global>{`
    .footer-link {
      position: relative;
      display: inline-block;
      transition: color 0.2s;
      text-decoration: none;
    }
    .footer-link::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background: #2356a8;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.12s cubic-bezier(.4,0,.2,1); /* faster */
    }
    .footer-link:hover::after,
    .footer-link:focus::after {
      transform: scaleX(1);
    }
  `}</style>
);

export default function Footer() {
  return (
    <>
      <style global jsx>{`
        .footer-link {
          position: relative;
          display: inline-block;
          transition: color 0.2s;
          text-decoration: none;
        }
        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background: #2356a8;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.12s cubic-bezier(.4,0,.2,1); /* faster */
        }
        .footer-link:hover::after,
        .footer-link:focus::after {
          transform: scaleX(1);
        }
      `}</style>
      <footer className="mt-12" style={{ background: "#001a33" }}>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {/* Left section */}
            <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                {/* Logo */}
                <Image
                  src="/GEOTUCO Logo Mono.svg"
                  alt="GEOTUCO Logo"
                  width={120}
                  height={32}
                  priority
                />
              </div>
              <div className="mb-4" style={{ color: "#fff" }}>
                GeoTunisie Consulting: Hassle-free civil engineering consulting that teams love.
              </div>
              <div className="flex gap-3 mb-4">
                {/* Social icons */}
                <Link href="#" aria-label="LinkedIn" className="hover:opacity-80">
                  <img
                    src="https://www.svgrepo.com/show/390272/linkedin-linked-in.svg"
                    alt="LinkedIn"
                    width={22}
                    height={22}
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      filter: "invert(1) brightness(2)"
                    }}
                  />
                </Link>
                <Link href="#" aria-label="YouTube" className="hover:opacity-80">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#e3ecfa" d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.112C19.412 3.5 12 3.5 12 3.5s-7.412 0-9.386.574A2.997 2.997 0 0 0 .502 6.186C0 8.16 0 12 0 12s0 3.84.502 5.814a2.997 2.997 0 0 0 2.112 2.112C4.588 20.5 12 20.5 12 20.5s7.412 0 9.386-.574a2.997 2.997 0 0 0 2.112-2.112C24 15.84 24 12 24 12s0-3.84-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </Link>
                <Link href="#" aria-label="Facebook" className="hover:opacity-80">
                  <img
                    src="https://www.svgrepo.com/show/503338/facebook.svg"
                    alt="Facebook"
                    width={22}
                    height={22}
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      filter: "invert(1) brightness(2)"
                    }}
                  />
                </Link>
                <Link href="#" aria-label="Twitter" className="hover:opacity-80">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                    alt="X"
                    width={22}
                    height={22}
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      filter: "invert(1) brightness(2)"
                    }}
                  />
                </Link>
                <Link href="#" aria-label="Instagram" className="hover:opacity-80">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#e3ecfa" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.976 1.246 2.243 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.976-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.332-3.608-1.308-.976-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608C4.516 2.565 5.783 2.295 7.149 2.233 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.127 4.659.387 3.678 1.368 2.697 2.349 2.437 3.461 2.38 4.742 2.322 6.022 2.31 6.431 2.31 12c0 5.569.012 5.978.07 7.258.057 1.281.317 2.393 1.298 3.374.981.981 2.093 1.241 3.374 1.298C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.057 2.393-.317 3.374-1.298.981-.981 1.241-2.093 1.298-3.374.058-1.28.07-1.689.07-7.258 0-5.569-.012-5.978-.07-7.258-.057-1.281-.317-2.393-1.298-3.374-.981-.981-2.093-1.241-3.374-1.298C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                </Link>
              </div>
            </div>
            {/* Links section */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <div className="font-semibold mb-2" style={{ color: "#fff", fontWeight: 600, fontSize: "1.15rem" }}>Product</div>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="/structural-analysis"
                      className="footer-link"
                      style={{ color: "#fff" }}
                    >
                      Structural Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/project-management"
                      className="footer-link"
                      style={{ color: "#fff" }}
                    >
                      Project Management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/site-development"
                      className="footer-link"
                      style={{ color: "#fff" }}
                    >
                      Site Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/environmental-consulting"
                      className="footer-link"
                      style={{ color: "#fff" }}
                    >
                      Environmental Consulting
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2" style={{ color: "#fff", fontWeight: 600, fontSize: "1.15rem" }}>Company</div>
                <ul className="space-y-1">
                  <li>
                    <Link href="/about" className="footer-link" style={{ color: "#fff" }}>About</Link>
                  </li>
                  <li>
                    <Link href="/careers" className="footer-link" style={{ color: "#fff" }}>Careers</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="footer-link" style={{ color: "#fff" }}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2" style={{ color: "#fff", fontWeight: 600, fontSize: "1.15rem" }}>Explore</div>
                <ul className="space-y-1">
                  <li>
                    <Link href="/case-studies" className="footer-link" style={{ color: "#fff" }}>Case Studies</Link>
                  </li>
                  <li>
                    <Link href="/partners" className="footer-link" style={{ color: "#fff" }}>Partners</Link>
                  </li>
                  <li>
                    <Link href="/blog" className="footer-link" style={{ color: "#fff" }}>Blog</Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-2" style={{ color: "#fff", fontWeight: 600, fontSize: "1.15rem" }}>Support</div>
                <ul className="space-y-1">
                  <li>
                    <Link href="/help-center" className="footer-link" style={{ color: "#fff" }}>Help Center</Link>
                  </li>
                  <li>
                    <Link href="/docs" className="footer-link" style={{ color: "#fff" }}>Docs</Link>
                  </li>
                  <li>
                    <Link href="/terms" className="footer-link" style={{ color: "#fff" }}>Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col md:flex-row md:justify-between items-center text-xs gap-2"
            style={{ color: "#fff", borderColor: "#fff" }}>
            <div className="mb-2 md:mb-0 text-center">
              &copy; 2003 - {new Date().getFullYear()} GEOTUCO — GeoTunisie Consulting
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
              <Link href="/privacy-policy" className="footer-link" style={{ color: "#fff" }}>Privacy Policy</Link>
              <Link href="/terms" className="footer-link" style={{ color: "#fff" }}>Terms</Link>
              <Link href="/code-of-conduct" className="footer-link" style={{ color: "#fff" }}>Code of Conduct</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
