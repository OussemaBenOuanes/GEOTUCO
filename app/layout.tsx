export const metadata = {
  title: 'GEOTUCO',
  description: 'GeoTunisie Consulting',
}

import Navbar from '../components/Navbar';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        <SpeedInsights />
      </body>
    </html>
  )
}
