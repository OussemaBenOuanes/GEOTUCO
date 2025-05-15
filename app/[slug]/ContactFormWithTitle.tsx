"use client";
import React, { useEffect, useState } from "react";
import { contactPageTranslations } from '../../translations/contact';
import ContactForm from './ContactForm';

export default function ContactFormWithTitle() {
  const [contactTitle, setContactTitle] = useState(contactPageTranslations.en.h1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lang = localStorage.getItem("lang") || "en";
      setContactTitle(contactPageTranslations[lang]?.h1 || contactPageTranslations.en.h1);
      const handleStorage = (e: StorageEvent) => {
        if (e.key === "lang" && e.newValue) {
          setContactTitle(contactPageTranslations[e.newValue]?.h1 || contactPageTranslations.en.h1);
        }
      };
      window.addEventListener("storage", handleStorage);
      return () => window.removeEventListener("storage", handleStorage);
    }
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', width: '100%', maxWidth: 'none', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#2a4d69', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
        {contactTitle}
      </h1>
      <ContactForm />
    </main>
  );
}
