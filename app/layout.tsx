import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import './globals.css';

export const metadata = {
  title: 'GEOTUCO',
  description: 'GeoTunisie Consulting',
}

import Navbar from '../components/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '../components/Footer';
import FloatingWhatsAppGlobal from '../components/FloatingWhatsAppGlobal';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
        <FloatingWhatsAppGlobal />
      </body>
    </html>
  );
}
