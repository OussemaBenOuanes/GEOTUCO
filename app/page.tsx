"use client";
import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Head from 'next/head'; // Add this import
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { testimonials } from './constants/testimonials';
import { carouselImages } from './constants/carouselImages';
import { services } from './constants/services';

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update selected index on slide change
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Listen to carousel events
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Scroll to slide when dot is clicked
  const scrollTo = useCallback((idx: number) => {
    if (emblaApi) emblaApi.scrollTo(idx);
  }, [emblaApi]);

  // Custom handler for FloatingWhatsApp button click
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      // On mobile, redirect to WhatsApp chat link
      window.open("https://wa.me/21671712233", "_blank");
      e.preventDefault();
      e.stopPropagation();
    }
    // On desktop, let FloatingWhatsApp handle it
  };

  return (
    <>
      <Head>
        <title>GEOTUCO | GeoTunisie Consulting</title>
        <meta name="description" content="Innovative solutions for infrastructure, construction, and development. Partner with us for quality, safety, and sustainability." />
        <meta property="og:title" content="GEOTUCO | GeoTunisie Consulting" />
        <meta property="og:description" content="Innovative solutions for infrastructure, construction, and development. Partner with us for quality, safety, and sustainability." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://geotuco.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GEOTUCO | GeoTunisie Consulting" />
        <meta name="twitter:description" content="Innovative solutions for infrastructure, construction, and development. Partner with us for quality, safety, and sustainability." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" />
      </Head>
      <main style={{ fontFamily: 'Inter, sans-serif', background: '#f7f9fa', minHeight: '100vh' }}>
        {/* Embla Carousel - moved outside Hero Section */}
        <div
          className="embla"
          ref={emblaRef}
          style={{
            maxWidth: 900,
            margin: '2rem auto 2.5rem auto', // Added bottom margin for spacing
            width: '100%'
          }}
        >
          <div
            className="embla__container"
            style={{
              display: 'flex'
            }}
          >
            {carouselImages.map((src, idx) => (
              <div
                className="embla__slide"
                key={idx}
                style={{
                  flex: '0 0 80%',
                  minWidth: 0,
                  padding: '0 8px', // Add horizontal padding to each slide
                  background: '#e3ecfa',
                  borderRadius: 12,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 320
                }}
              >
                <img
                  src={src}
                  alt={`Carousel ${idx + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 12,
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </div>
          {/* Carousel Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginTop: 16
          }}>
            {carouselImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollTo(idx)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: 'none',
                  background: selectedIndex === idx ? '#4b86b4' : '#c7e0f4',
                  transition: 'background 0.2s',
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: selectedIndex === idx ? '0 0 0 2px #4b86b433' : undefined,
                  padding: 0
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          background: 'linear-gradient(90deg, #e3ecfa 60%, #c7e0f4 100%)',
          padding: '4rem 0 5rem 0', // Increased top padding for more space
          overflow: 'hidden'
        }}>
          {/* Curved accent */}
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
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              title={service.title}
              desc={service.desc}
              href={service.href}
              emoji={service.emoji}
            />
          ))}
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
        {/* <footer style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: '#888',
          fontSize: '0.95rem',
          padding: '2rem 0 1rem 0'
        }}>
          &copy; {new Date().getFullYear()} GEOTUCO | GeoTunisie Consulting
        </footer> */}
      </main>
      <FloatingWhatsApp
        phoneNumber="+21671712233"
        accountName="GEOTUCO"
        avatar="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436189.jpg?semt=ais_hybrid&w=740"
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello there! 👋 How can we help you?"
        placeholder="Type your message.."
        allowEsc
        allowClickAway
        notification
        notificationDelay={30}
        notificationSound
        buttonStyle={{ boxShadow: 'none' }}
        onClick={handleWhatsAppClick}
      />
    </>
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
