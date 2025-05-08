import './globals.css';

export const metadata = {
  title: 'GEOTUCO',
  description: 'GeoTunisie Consulting',
}

import Navbar from '../components/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
