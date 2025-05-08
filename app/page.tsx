import React from 'react';
import Link from 'next/link';
// import { Button } from "@/components/ui/button";

// Dummy testimonials data
const testimonials = [
  {
    name: "Sarah T.",
    text: "GEOTUCO helped us deliver our project on time and within budget. Their expertise in structural analysis was invaluable.",
  },
  {
    name: "Ahmed B.",
    text: "Professional, reliable, and innovative. Highly recommended for any civil engineering needs.",
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: '#f7f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        background: 'linear-gradient(90deg, #e3ecfa 60%, #c7e0f4 100%)',
        padding: '3rem 0 2rem 0',
        overflow: 'hidden'
      }}>
        {/* Curved accent */}
        <svg width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', bottom: 0, left: 0, zIndex: 1 }}>
          <path d="M0,40 Q720,120 1440,40 L1440,80 L0,80 Z" fill="#fff" />
        </svg>
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 900,
          margin: '0 auto',
          padding: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '2.8rem',
            color: '#2a4d69',
            fontWeight: 800,
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Achieve Excellence in Civil Engineering
          </h1>
          <p style={{
            color: '#4b5d67',
            fontSize: '1.25rem',
            maxWidth: 600,
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            Innovative solutions for infrastructure, construction, and development. Partner with us for quality, safety, and sustainability.
          </p>
          <Link href="/contact" style={{
            background: '#4b86b4',
            color: '#fff',
            padding: '0.9rem 2.2rem',
            borderRadius: 8,
            fontSize: '1.15rem',
            textDecoration: 'none',
            fontWeight: 600,
            boxShadow: '0 2px 8px #e0e6ed'
          }}>
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Cards */}
      <section style={{
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        marginTop: '-3rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        zIndex: 3,
        position: 'relative'
      }}>
        <ServiceCard
          title="Structural Analysis"
          desc="Robust design and safety for your structures."
          href="/structural-analysis"
          emoji="🏗️"
        />
        <ServiceCard
          title="Project Management"
          desc="Efficient planning and execution for every project."
          href="/project-management"
          emoji="📋"
        />
        <ServiceCard
          title="Site Development"
          desc="Transforming land into sustainable assets."
          href="/site-development"
          emoji="🌍"
        />
        <ServiceCard
          title="Environmental Consulting"
          desc="Eco-friendly solutions for modern challenges."
          href="/environmental-consulting"
          emoji="🌱"
        />
      </section>

      {/* Testimonials */}
      <section style={{
        background: '#fff',
        borderRadius: 16,
        maxWidth: 900,
        margin: '0 auto 3rem auto',
        padding: '2.5rem 1.5rem',
        boxShadow: '0 2px 16px #e0e6ed',
        position: 'relative'
      }}>
        <h2 style={{ color: '#2a4d69', textAlign: 'center', marginBottom: '2rem' }}>What Our Clients Say</h2>
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: '#f7f9fa',
              borderRadius: 12,
              padding: '1.5rem',
              minWidth: 260,
              maxWidth: 340,
              boxShadow: '0 1px 6px #e0e6ed'
            }}>
              <p style={{ fontStyle: 'italic', color: '#444', marginBottom: '1rem' }}>"{t.text}"</p>
              <div style={{ fontWeight: 600, color: '#4b86b4' }}>{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        maxWidth: 900,
        margin: '0 auto 3rem auto',
        padding: '2rem 1.5rem',
        background: '#e3ecfa',
        borderRadius: 16
      }}>
        <h3 style={{ color: '#2a4d69', marginBottom: '1.5rem' }}>Frequently Asked Questions</h3>
        <ul style={{ listStyle: 'none', padding: 0, color: '#333', fontSize: '1.05rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <b>What services do you offer?</b><br />
            We provide structural analysis, project management, site development, and environmental consulting.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <b>How do I start a project with GEOTUCO?</b><br />
            Simply <Link href="/contact" style={{ color: '#4b86b4' }}>contact us</Link> and our team will guide you through the process.
          </li>
          <li>
            <b>Do you work with both public and private sectors?</b><br />
            Yes, we serve a diverse range of clients across sectors.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        marginTop: '2rem',
        color: '#888',
        fontSize: '0.95rem',
        padding: '2rem 0 1rem 0'
      }}>
        &copy; {new Date().getFullYear()} GEOTUCO | GeoTunisie Consulting
      </footer>
    </main>
  );
}

// Service Card Component
function ServiceCard({ title, desc, href, emoji }: { title: string, desc: string, href: string, emoji: string }) {
  return (
    <Link href={href} style={{
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 2px 12px #e0e6ed',
      padding: '2rem 1.5rem',
      minWidth: 220,
      maxWidth: 260,
      textDecoration: 'none',
      color: '#2a4d69',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.15s',
      fontWeight: 500
    }}>
      <span style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{emoji}</span>
      <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>{title}</div>
      <div style={{ color: '#4b5d67', fontSize: '1rem', textAlign: 'center' }}>{desc}</div>
    </Link>
  );
}
