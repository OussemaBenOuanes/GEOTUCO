import React from 'react';
import { notFound } from 'next/navigation';

const services = {
  "structural-analysis": {
    title: "Structural Analysis & Design",
    description: "Robust design and safety for your structures. We provide advanced structural analysis and design services for all types of projects."
  },
  "project-management": {
    title: "Project Management",
    description: "Efficient planning and execution for every project. Our project management team ensures your goals are met on time and on budget."
  },
  "site-development": {
    title: "Site Development",
    description: "Transforming land into sustainable assets. We handle all aspects of site development from concept to completion."
  },
  "environmental-consulting": {
    title: "Environmental Consulting",
    description: "Eco-friendly solutions for modern challenges. Our experts help you navigate environmental regulations and best practices."
  },
  "about": {
    title: "About Us",
    description: "Learn more about GEOTUCO and our commitment to excellence in civil engineering consulting."
  },
  "contact": {
    title: "Contact Us",
    description: "Get in touch with our team for consultations, project inquiries, or support."
  }
};

import Link from 'next/link';

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "services") {
    // Render the services list page
    return (
      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#2a4d69', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
          Our Services
        </h1>
        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {Object.entries(services).filter(([key]) =>
            ["structural-analysis", "project-management", "site-development", "environmental-consulting"].includes(key)
          ).map(([key, service]) => (
            <Link
              key={key}
              href={`/${key}`}
              style={{
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
                fontWeight: 500,
                transition: 'transform 0.15s'
              }}
            >
              <span style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
                {key === "structural-analysis" && "🏗️"}
                {key === "project-management" && "📋"}
                {key === "site-development" && "🌍"}
                {key === "environmental-consulting" && "🌱"}
              </span>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', textAlign: 'center' }}>{service.title}</div>
              <div style={{ color: '#4b5d67', fontSize: '1rem', textAlign: 'center' }}>{service.description}</div>
            </Link>
          ))}
        </div>
      </main>
    );
  }

  const service = services[slug];
  if (!service) return notFound();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 700, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#2a4d69', marginBottom: '1rem' }}>{service.title}</h1>
      <p style={{ fontSize: '1.15rem', color: '#444' }}>{service.description}</p>
    </main>
  );
}
