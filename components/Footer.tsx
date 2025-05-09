import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../app/globals.css";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left section */}
          <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              {/* Logo */}
              <Image
                src="/GEOTUCO Logo Normal.svg"
                alt="GEOTUCO Logo"
                width={120}
                height={32}
                priority
              />
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
              <Link href="#" aria-label="Facebook" className="hover:opacity-80">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#4b86b4" d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="hover:opacity-80">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#4b86b4" d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:opacity-80">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#4b86b4" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.976 1.246 2.243 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.976-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.332-3.608-1.308-.976-.975-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608C4.516 2.565 5.783 2.295 7.149 2.233 8.415 2.175 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.127 4.659.387 3.678 1.368 2.697 2.349 2.437 3.461 2.38 4.742 2.322 6.022 2.31 6.431 2.31 12c0 5.569.012 5.978.07 7.258.057 1.281.317 2.393 1.298 3.374.981.981 2.093 1.241 3.374 1.298C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.057 2.393-.317 3.374-1.298.981-.981 1.241-2.093 1.298-3.374.058-1.28.07-1.689.07-7.258 0-5.569-.012-5.978-.07-7.258-.057-1.281-.317-2.393-1.298-3.374-.981-.981-2.093-1.241-3.374-1.298C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
              </Link>
              {/* Add more icons as needed */}
            </div>
          </div>
          {/* Links section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
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
        <div className="border-t border-gray-100 mt-8 pt-6 flex flex-col md:flex-row md:justify-between items-center text-xs text-gray-400 gap-2">
          <div className="mb-2 md:mb-0 text-center">
            &copy; 2003 - {new Date().getFullYear()} GEOTUCO — GeoTunisie Consulting
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
            <Link href="#" className="hover:text-blue-700">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-700">Terms</Link>
            <Link href="#" className="hover:text-blue-700">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
