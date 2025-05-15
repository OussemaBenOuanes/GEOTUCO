"use client";
import React, { useEffect, useState } from "react";
import { contactPageTranslations } from '../../translations/contact';
import ContactForm from './ContactForm';

export default function ContactFormWithTitle() {
  const [contactTitle, setContactTitle] = useState(contactPageTranslations.en.h1);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set the title immediately to avoid flashing
      const lang = localStorage.getItem("lang") || "en";
      const title = contactPageTranslations[lang]?.h1 || contactPageTranslations.en.h1;
      setContactTitle(title);
      if (document.title !== `${title} | GEOTUCO`) {
        document.title = `${title} | GEOTUCO`;
      }
      const handleStorage = (e: StorageEvent) => {
        if (e.key === "lang" && e.newValue) {
          const newTitle = contactPageTranslations[e.newValue]?.h1 || contactPageTranslations.en.h1;
          setContactTitle(newTitle);
          document.title = `${newTitle} | GEOTUCO`;
        }
      };
      window.addEventListener("storage", handleStorage);
      return () => window.removeEventListener("storage", handleStorage);
    }
  }, []);

  // Also update the title if the language changes while the component is mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new MutationObserver(() => {
        const lang = localStorage.getItem("lang") || "en";
        const title = contactPageTranslations[lang]?.h1 || contactPageTranslations.en.h1;
        if (document.title !== `${title} | GEOTUCO`) {
          document.title = `${title} | GEOTUCO`;
        }
      });
      observer.observe(document.querySelector("title")!, { childList: true });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', width: '100%', maxWidth: 'none', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.2rem', color: '#003365', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>
        {contactTitle}
      </h1>
      <ContactForm />
    </main>
  );
}
