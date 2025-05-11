import React from 'react';
import { notFound } from 'next/navigation';
import { pages } from '../constants/pages';
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
          {Object.entries(pages).filter(([key]) =>
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

  // Pricing table for /pricing
  if (slug === "pricing") {
    return (
      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#2a4d69', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
          Pricing Plans
        </h1>
        <div style={{
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* Basic Plan */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 12px #e0e6ed',
            padding: '2rem 1.5rem',
            minWidth: 220,
            maxWidth: 260,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Basic</div>
            <div style={{ fontSize: '2rem', color: '#4b86b4', fontWeight: 800, marginBottom: 8 }}>$499</div>
            <ul style={{ color: '#4b5d67', fontSize: '1rem', marginBottom: 16, paddingLeft: 18 }}>
              <li>✔️ Initial Consultation</li>
              <li>✔️ Project Assessment</li>
              <li>✔️ Email Support</li>
            </ul>
            <button style={{
              background: '#4b86b4',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '0.5rem 1.5rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Choose</button>
          </div>
          {/* Standard Plan */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px #b3cbe6',
            padding: '2rem 1.5rem',
            minWidth: 220,
            maxWidth: 260,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '2px solid #4b86b4'
          }}>
            <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Standard</div>
            <div style={{ fontSize: '2rem', color: '#4b86b4', fontWeight: 800, marginBottom: 8 }}>$999</div>
            <ul style={{ color: '#4b5d67', fontSize: '1rem', marginBottom: 16, paddingLeft: 18 }}>
              <li>✔️ Everything in Basic</li>
              <li>✔️ Detailed Report</li>
              <li>✔️ Phone Support</li>
            </ul>
            <button style={{
              background: '#4b86b4',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '0.5rem 1.5rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Choose</button>
          </div>
          {/* Premium Plan */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 12px #e0e6ed',
            padding: '2rem 1.5rem',
            minWidth: 220,
            maxWidth: 260,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 8 }}>Premium</div>
            <div style={{ fontSize: '2rem', color: '#4b86b4', fontWeight: 800, marginBottom: 8 }}>$1999</div>
            <ul style={{ color: '#4b5d67', fontSize: '1rem', marginBottom: 16, paddingLeft: 18 }}>
              <li>✔️ Everything in Standard</li>
              <li>✔️ On-site Visit</li>
              <li>✔️ Priority Support</li>
            </ul>
            <button style={{
              background: '#4b86b4',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '0.5rem 1.5rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Choose</button>
          </div>
        </div>
      </main>
    );
  }

  // Geotechnical Engineering page
  if (slug === "geotechnical-engineering") {
    return (
      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#2a4d69', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
          Geotechnical Engineering
        </h1>
        <div style={{ color: '#444', fontSize: '1.15rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Our Geotechnical Engineering services provide comprehensive site investigations, soil analysis, and foundation recommendations to ensure the safety and stability of your construction projects. We utilize advanced testing methods and industry expertise to deliver reliable solutions tailored to your project's unique requirements.
        </div>
        <ul style={{ color: '#4b5d67', fontSize: '1rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
          <li>✔️ Site and soil investigations</li>
          <li>✔️ Foundation design and recommendations</li>
          <li>✔️ Slope stability analysis</li>
          <li>✔️ Ground improvement solutions</li>
          <li>✔️ Retaining wall and earthwork design</li>
        </ul>
      </main>
    );
  }

  // Geotechnical Tests page
  if (slug === "geotechnical-tests") {
    return (
      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#2a4d69', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
          Geotechnical Tests
        </h1>
        <div style={{ color: '#444', fontSize: '1.15rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          We offer a comprehensive suite of geotechnical tests to assess soil, rock, and groundwater conditions for your project. Our laboratory and field testing services ensure accurate data for safe and cost-effective engineering solutions.
        </div>
        <ul style={{ color: '#4b5d67', fontSize: '1rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
          <li>✔️ Standard Penetration Test (SPT)</li>
          <li>✔️ Cone Penetration Test (CPT)</li>
          <li>✔️ Plate Load Test</li>
          <li>✔️ Soil Classification and Index Properties</li>
          <li>✔️ Shear Strength and Consolidation Tests</li>
          <li>✔️ Permeability and Compaction Tests</li>
        </ul>
      </main>
    );
  }

  // Softwares page
  if (slug === "softwares") {
    return (
      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#2a4d69', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
          Softwares
        </h1>
        <div style={{ color: '#444', fontSize: '1.15rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Explore the essential software tools we use for geotechnical, structural, and civil engineering projects. Our toolkit ensures accuracy, efficiency, and industry compliance.
        </div>
        <ul style={{ color: '#4b5d67', fontSize: '1rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
          <li>✔️ Plaxis 2D/3D – Geotechnical finite element analysis</li>
          <li>✔️ GeoStudio – Slope stability and seepage analysis</li>
          <li>✔️ AutoCAD Civil 3D – Civil infrastructure design</li>
          <li>✔️ SAP2000 – Structural analysis and design</li>
          <li>✔️ Rocscience Suite – Rock and soil mechanics</li>
          <li>✔️ Microsoft Project – Project scheduling and management</li>
        </ul>
      </main>
    );
  }

  const service = pages[slug];
  if (!service) return notFound();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 700, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', color: '#2a4d69', marginBottom: '1rem' }}>{service.title}</h1>
      <p style={{ fontSize: '1.15rem', color: '#444' }}>{service.description}</p>
    </main>
  );
}
