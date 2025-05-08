import React from "react";
import Link from "next/link";
import "../app/globals.css";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left section */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-2 mb-2">
              {/* Logo placeholder */}
              <span className="font-extrabold text-xl text-blue-900">GEOTUCO</span>
            </div>
            <div className="text-gray-500 mb-4">
              GeoTunisie Consulting: Hassle-free civil engineering consulting that teams love.
            </div>
            <div className="flex gap-3 mb-4">
              {/* Social icons (replace # with your links) */}
              <Link href="#" aria-label="LinkedIn" className="hover:opacity-80">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#4b86b4" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.36v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v4.77z"/></svg>
              </Link>
              <Link href="#" aria-label="YouTube" className="hover:opacity-80">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#4b86b4" d="M23.498 6.186a2.997 2.997 0 0 0-2.112-2.112C19.412 3.5 12 3.5 12 3.5s-7.412 0-9.386.574A2.997 2.997 0 0 0 .502 6.186C0 8.16 0 12 0 12s0 3.84.502 5.814a2.997 2.997 0 0 0 2.112 2.112C4.588 20.5 12 20.5 12 20.5s7.412 0 9.386-.574a2.997 2.997 0 0 0 2.112-2.112C24 15.84 24 12 24 12s0-3.84-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
              {/* Add more icons as needed */}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-50 border border-gray-200 text-xs text-gray-600">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              All systems operational
            </div>
          </div>
          {/* Links section */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
            <div>
              <div className="font-semibold text-gray-700 mb-2">Product</div>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-blue-700">Structural Analysis</Link></li>
                <li><Link href="#" className="hover:text-blue-700">Project Management</Link></li>
                <li><Link href="#" className="hover:text-blue-700">Site Development</Link></li>
                <li><Link href="#" className="hover:text-blue-700">Environmental Consulting</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-2">Company</div>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-blue-700">About</Link></li>
                <li><Link href="#" className="hover:text-blue-700">Careers</Link></li>
                <li><Link href="#" className="hover:text-blue-700">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-2">Explore</div>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-blue-700">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-blue-700">Partners</Link></li>
                <li><Link href="#" className="hover:text-blue-700">Blog</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-2">Support</div>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-blue-700">Help Center</Link></li>
                <li><Link href="#" className="hover:text-blue-700">Docs</Link></li>
                <li><Link href="#" className="hover:text-blue-700">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-400">
          <div className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} GEOTUCO — GeoTunisie Consulting
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-700">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-700">Terms</Link>
            <Link href="#" className="hover:text-blue-700">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
