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

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return notFound();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 700, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#2a4d69', marginBottom: '1rem' }}>{service.title}</h1>
      <p style={{ fontSize: '1.15rem', color: '#444' }}>{service.description}</p>
    </main>
  );
}
