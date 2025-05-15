import { notFound } from 'next/navigation';
import { pages } from '../constants/pages';
import Link from 'next/link';
import ContactFormWithTitle from './ContactFormWithTitle';

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === "services") {
    // Render the services list page
    return (
      <>
        <title>Our Services | GEOTUCO</title>
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
      </>
    );
  }

  if (slug === "geotechnical-engineering") {
    return (
      <>
        <title>Geotechnical Engineering | GEOTUCO</title>
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
      </>
    );
  }

  if (slug === "geotechnical-tests") {
    return (
      <>
        <title>Geotechnical Tests | GEOTUCO</title>
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
      </>
    );
  }

  if (slug === "training") {
    return (
      <>
        <title>Training | GEOTUCO</title>
        <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 900, margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.2rem', color: '#2a4d69', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
            Training
          </h1>
          <div style={{ color: '#444', fontSize: '1.15rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            GEOTUCO offers specialized training programs in geotechnical engineering, laboratory testing, and field investigation techniques. Our courses are designed for engineers, technicians, and students seeking to enhance their practical skills and theoretical knowledge in the geotechnical field.
          </div>
          <ul style={{ color: '#4b5d67', fontSize: '1rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            <li>✔️ Hands-on training in soil and rock testing</li>
            <li>✔️ Workshops on geotechnical investigation methods</li>
            <li>✔️ Software training for geotechnical analysis</li>
            <li>✔️ Customized courses for organizations and universities</li>
            <li>✔️ Certification upon completion</li>
          </ul>
        </main>
      </>
    );
  }

  if (slug === "softwares") {
    // Redirect to /geoprog instead of rendering a page here
    if (typeof window !== "undefined") {
      window.location.replace("/geoprog");
      return null;
    }
    // For SSR, use a Next.js redirect
    return notFound();
  }

  if (slug === "contact") {
    // Contact page with mailto form
    return (
      <>
        {/* No <title> here, let ContactFormWithTitle handle it */}
        <ContactFormWithTitle />
      </>
    );
  }

  const service = pages[slug];
  if (!service) return notFound();

  return (
    <>
      <title>{`${service.title} | GEOTUCO`}</title>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', color: '#003365', marginBottom: '1rem' }}>{service.title}</h1>
        <p style={{ fontSize: '1.15rem', color: '#444' }}>{service.description}</p>
      </main>
    </>
  );
}
