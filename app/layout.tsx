import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import './globals.css';
import ScrollToTopOnRouteChange from "../components/ScrollToTopOnRouteChange";

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
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* Remove static <title> from layout, let each page set its own title */}
        {/* <title>GEOTUCO</title> */}
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollToTopOnRouteChange />
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
        <FloatingWhatsAppGlobal />
      </body>
    </html>
  );
}
